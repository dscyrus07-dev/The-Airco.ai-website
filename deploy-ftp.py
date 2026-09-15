import ftplib, os, sys, posixpath, getpass

HOST = os.environ.get("FTP_HOST", "217.21.87.58")
USER = os.environ.get("FTP_USER", "u524024588.Airco")
PASS = os.environ.get("FTP_PASS") or getpass.getpass("FTP password: ")
LOCAL = "out"
KEEP_TOP = {".htaccess", ".well-known", "error_docs", "cgi-bin"}

ftp = ftplib.FTP()
ftp.connect(HOST, 21, timeout=30)
ftp.login(USER, PASS)
ftp.set_pasv(True)
print("Connected:", ftp.getwelcome().strip())

# ---- Build local file set ----
local_files = {}   # remote rel path -> local path
local_dirs = set()
for root, dirs, files in os.walk(LOCAL):
    rel = os.path.relpath(root, LOCAL).replace("\\", "/")
    if rel == ".":
        rel = ""
    for d in dirs:
        local_dirs.add(posixpath.join(rel, d) if rel else d)
    for f in files:
        rp = posixpath.join(rel, f) if rel else f
        local_files[rp] = os.path.join(root, f)

print(f"Local: {len(local_files)} files, {len(local_dirs)} dirs")

# ---- Ensure remote dirs exist ----
def ensure_dir(path):
    parts = [p for p in path.split("/") if p]
    cur = ""
    for p in parts:
        cur = f"{cur}/{p}" if cur else p
        try:
            ftp.mkd(cur)
        except ftplib.error_perm:
            pass  # exists

for d in sorted(local_dirs, key=lambda x: x.count("/")):
    ensure_dir(d)

# ---- Upload all files ----
done = 0
errors = []
for rp, lp in sorted(local_files.items()):
    try:
        with open(lp, "rb") as fh:
            ftp.storbinary(f"STOR {rp}", fh)
        done += 1
        if done % 50 == 0:
            print(f"  uploaded {done}/{len(local_files)}")
    except Exception as e:
        errors.append((rp, str(e)))

print(f"Uploaded {done}/{len(local_files)} files")
if errors:
    print("ERRORS:")
    for rp, e in errors:
        print(" ", rp, e)

# ---- Remote listing ----
remote_files = []
remote_dirs = []

def walk_remote(path):
    try:
        names = ftp.nlst(path)
    except ftplib.error_perm:
        return
    for name in names:
        name = name[2:] if name.startswith("./") else name
        base = name.rsplit("/", 1)[-1]
        if base in (".", ".."):
            continue
        if path == "." and base in KEEP_TOP:
            continue
        if base.startswith(".") and path == ".":
            continue
        # determine type
        try:
            ftp.cwd(name)
            ftp.cwd("/")
            remote_dirs.append(name)
            walk_remote(name)
        except ftplib.error_perm:
            remote_files.append(name)

walk_remote(".")
print(f"Remote: {len(remote_files)} files, {len(remote_dirs)} dirs")

# ---- Delete stale remote files ----
deleted = 0
for rf in remote_files:
    if rf not in local_files:
        try:
            ftp.delete(rf)
            deleted += 1
            print("  del", rf)
        except Exception as e:
            print("  DEL FAIL", rf, e)

# ---- Delete stale/empty remote dirs (deepest first) ----
for rd in sorted(remote_dirs, key=lambda x: -x.count("/")):
    if rd not in local_dirs:
        try:
            ftp.rmd(rd)
            print("  rmdir", rd)
        except Exception:
            pass  # not empty or protected

print(f"Deleted {deleted} stale files")
ftp.quit()
print("DONE")

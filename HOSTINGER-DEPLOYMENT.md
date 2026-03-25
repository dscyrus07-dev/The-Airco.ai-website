# 🚀 Hostinger Deployment Guide - AiRCo Insights

## ✅ Your Static Website is Ready!

Your website has been successfully converted to **static HTML files** ready for Hostinger upload!

---

## 📦 **UPLOAD THIS FOLDER TO HOSTINGER:**

### **Folder Location:**
```
x:\airco-insights-web\out\
```

This `out/` folder contains your complete website as static HTML files.

---

## 🔧 **Step-by-Step Hostinger Deployment:**

### **Step 1: Access Hostinger File Manager**

1. Log in to your **Hostinger Control Panel** (hPanel)
2. Go to **Files** → **File Manager**
3. Navigate to `public_html/` folder (or your domain's root folder)

### **Step 2: Upload Files**

**Option A: Using File Manager (Recommended)**
1. Click **Upload Files** button
2. Select **ALL files and folders** from `x:\airco-insights-web\out\`
3. Upload everything to `public_html/`

**Option B: Using FTP (FileZilla)**
1. Download FileZilla (if not installed)
2. Get FTP credentials from Hostinger:
   - Go to **Files** → **FTP Accounts**
   - Note: Hostname, Username, Password, Port
3. Connect via FileZilla
4. Upload entire `out/` folder contents to `public_html/`

### **Step 3: Verify Upload**

Make sure these files are in `public_html/`:
- ✅ `index.html` (your homepage)
- ✅ `404.html` (error page)
- ✅ `_next/` folder (optimized assets)
- ✅ `images/` folder (your images, OG image)
- ✅ `robots.txt` (SEO)
- ✅ `sitemap.xml` (SEO)
- ✅ `manifest.json` (PWA)
- ✅ All other files from `out/` folder

### **Step 4: Configure Domain (if needed)**

If using a custom domain:
1. Go to **Domains** in hPanel
2. Point your domain to the `public_html/` folder
3. Wait for DNS propagation (up to 24 hours)

---

## 🌐 **Your Website Structure:**

```
public_html/
├── index.html              ← Homepage
├── 404.html                ← Error page
├── _next/                  ← Optimized JS/CSS
│   ├── static/
│   └── ...
├── images/                 ← Your images
│   ├── og-image.png        ← Social media preview
│   └── ...
├── robots.txt              ← Search engine directives
├── sitemap.xml             ← SEO sitemap
├── manifest.json           ← PWA manifest
├── favicon.ico             ← Favicon
└── ... (other assets)
```

---

## ✨ **SEO Features Included:**

✅ **All SEO optimizations are preserved:**
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (in HTML)
- Robots.txt
- Sitemap.xml
- PWA manifest
- Optimized images

---

## 🔍 **After Upload - Verify:**

1. **Visit your website:** `https://yourdomain.com`
2. **Check SEO files:**
   - `https://yourdomain.com/robots.txt`
   - `https://yourdomain.com/sitemap.xml`
   - `https://yourdomain.com/manifest.json`

3. **Test social sharing:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

4. **Submit to Search Engines:**
   - [Google Search Console](https://search.google.com/search-console) - Submit sitemap
   - [Bing Webmaster Tools](https://www.bing.com/webmasters) - Submit sitemap

---

## 📝 **Important Notes:**

### ⚠️ **Static Export Limitations:**
- ✅ All your SEO features work perfectly
- ✅ All animations and interactions work
- ✅ All pages are pre-rendered
- ⚠️ No server-side features (but you don't use any)
- ⚠️ Images are not optimized on-the-fly (pre-optimized during build)

### 🔄 **Updating Your Website:**

When you make changes:
1. Edit files locally in `x:\airco-insights-web\`
2. Run `npm run build` to regenerate `out/` folder
3. Re-upload `out/` folder contents to Hostinger

---

## 🎯 **Quick Upload Checklist:**

- [ ] Log in to Hostinger hPanel
- [ ] Go to File Manager → public_html/
- [ ] Delete old files (if any)
- [ ] Upload ALL files from `x:\airco-insights-web\out\`
- [ ] Verify index.html is in public_html/
- [ ] Visit your domain to test
- [ ] Check robots.txt and sitemap.xml
- [ ] Submit sitemap to Google Search Console

---

## 💡 **Pro Tips:**

1. **Clear Cache:** After upload, clear your browser cache to see changes
2. **Cloudflare:** Consider using Cloudflare for free CDN and SSL
3. **Backup:** Keep a backup of your `out/` folder
4. **Analytics:** Add Google Analytics if needed (edit source code before build)

---

## 🆘 **Troubleshooting:**

**Problem:** Website shows blank page
- **Solution:** Make sure `index.html` is directly in `public_html/`, not in a subfolder

**Problem:** Images not loading
- **Solution:** Upload the entire `out/` folder, including `_next/` and `images/`

**Problem:** 404 errors
- **Solution:** Check that all files from `out/` are uploaded

---

## 📞 **Need Help?**

- **Hostinger Support:** Available 24/7 via live chat
- **File Location:** `x:\airco-insights-web\out\`
- **Upload Destination:** `public_html/` on Hostinger

---

## 🎉 **You're All Set!**

Your SEO-optimized website is ready to go live on Hostinger! Just upload the `out/` folder and you're done! 🚀

**Folder to upload:** `x:\airco-insights-web\out\`
**Upload to:** Hostinger `public_html/`

---

**Last Updated:** January 29, 2026
**Build Type:** Static HTML Export
**Hosting:** Hostinger

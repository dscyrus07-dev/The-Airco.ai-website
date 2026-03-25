# 🚀 Quick Deployment Guide for AiRCo Insights

## Your Website is Ready for Hosting!

You have **2 deployment options** depending on your hosting type:

---

## ✅ **Option 1: Node.js Hosting (RECOMMENDED)**

**Best for:** Vercel, Railway, Render, Utho VPS, DigitalOcean, AWS

### What to Upload:
Upload your **entire project folder** to the server, including:
- ✅ All source files (`app/`, `components/`, `lib/`, `public/`)
- ✅ `package.json` and `package-lock.json`
- ✅ `next.config.ts`
- ✅ `.next/` folder (after building)
- ✅ `node_modules/` (or run `npm install` on server)

### Deployment Steps:

#### For Utho/VPS Server:
```bash
# 1. Upload project via FTP/SCP or Git
git clone your-repo-url
cd airco-insights-web

# 2. Install dependencies
npm install

# 3. Build for production
npm run build

# 4. Start the server (use PM2 for persistence)
pm2 start npm --name "airco-insights" -- start
pm2 save
pm2 startup

# 5. Configure Nginx (if needed)
# Point to http://localhost:3000
```

#### For Vercel (Easiest):
```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Deploy! (Vercel handles everything automatically)
```

**Server Requirements:**
- Node.js 18+ or 20+
- Port 3000 (or configure as needed)

---

## 📦 **Option 2: Static HTML Hosting**

**Best for:** cPanel, Shared Hosting, Netlify, GitHub Pages

### ⚠️ **Important Limitation:**
Static export doesn't support:
- Dynamic sitemap generation (we created a static one for you)
- Server-side features (but your site doesn't use them)

### Steps to Generate Static Files:

1. **Enable Static Export:**
   I can modify `next.config.ts` to add `output: 'export'`

2. **Build Static Files:**
   ```bash
   npm run build
   ```

3. **Upload Folder:**
   Upload the `out/` folder contents to your hosting

**Would you like me to enable static export mode?**

---

## 🎯 **Recommended Choice**

### Use **Option 1 (Node.js)** if:
- ✅ You have VPS/Cloud hosting (Utho, DigitalOcean, AWS)
- ✅ You can run Node.js on your server
- ✅ You want best performance and all features

### Use **Option 2 (Static)** if:
- ✅ You have traditional cPanel/shared hosting
- ✅ You can only upload HTML/CSS/JS files
- ✅ You don't need dynamic features

---

## 📂 Current Build Output

Your current build is in **Node.js mode**. The output is in:
- `.next/` folder - Contains optimized production build
- `public/` folder - Static assets (images, robots.txt, etc.)

**To deploy to Utho (your current setup):**
```bash
# On your Utho server:
cd /path/to/your/project
npm install
npm run build
pm2 start npm --name "airco-insights" -- start
```

---

## ❓ Which hosting type do you have?

1. **VPS/Cloud** (Utho, DigitalOcean, AWS) → Use Option 1
2. **cPanel/Shared Hosting** → I'll enable Option 2 for you
3. **Vercel/Netlify** → Push to GitHub and deploy

Let me know which one, and I'll guide you through the exact steps! 🚀

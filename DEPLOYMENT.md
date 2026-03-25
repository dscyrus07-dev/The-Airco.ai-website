# AiRCo Insights - Production Deployment Guide

This guide will help you deploy the SEO-optimized AiRCo Insights website to production.

## Pre-Deployment Checklist

### 1. Environment Configuration

Update the following in `lib/metadata.ts` if deploying to a different domain:
```typescript
url: "https://insights.theairco.ai", // Change if needed
```

### 2. Analytics Setup (Optional)

If you want to add Google Analytics:
1. Get your GA4 Measurement ID from Google Analytics
2. Add it to your environment variables or directly in the code

### 3. Build and Test Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test the production build
npm start
```

The build should complete without errors. Check for:
- ✅ No TypeScript errors
- ✅ No build warnings
- ✅ Sitemap generated at `/sitemap.xml`
- ✅ Robots.txt accessible at `/robots.txt`

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "SEO optimization complete"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings
   - Add environment variables if needed
   - Deploy!

3. **Configure Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add `insights.theairco.ai`
   - Update DNS records as instructed by Vercel

### Option 2: Docker Deployment

1. **Create Dockerfile** (if not exists):
   ```dockerfile
   FROM node:20-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM node:20-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t airco-insights .
   docker run -p 3000:3000 airco-insights
   ```

### Option 3: Traditional Server (Nginx + PM2)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start with PM2**:
   ```bash
   pm2 start npm --name "airco-insights" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name insights.theairco.ai;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d insights.theairco.ai
   ```

## Post-Deployment SEO Tasks

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://insights.theairco.ai`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://insights.theairco.ai/sitemap.xml`

### 2. Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap: `https://insights.theairco.ai/sitemap.xml`

### 3. Social Media Preview Testing

Test your Open Graph tags:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 4. Performance Monitoring

1. Run Lighthouse audit in Chrome DevTools
2. Check Core Web Vitals in Google Search Console
3. Monitor page speed with [PageSpeed Insights](https://pagespeed.web.dev/)

### 5. Schema Markup Validation

1. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Validate JSON-LD structured data
3. Check for any warnings or errors

## SEO Features Implemented

✅ **Metadata Optimization**
- Comprehensive title and description
- 30+ targeted keywords
- Open Graph tags for social sharing
- Twitter Card metadata

✅ **Structured Data (JSON-LD)**
- Organization schema
- Website schema
- SoftwareApplication schema
- FAQ schema

✅ **Technical SEO**
- Sitemap.xml (dynamic generation)
- Robots.txt (search engine friendly)
- Canonical URLs
- Security headers (HSTS, CSP, etc.)
- Image optimization (AVIF/WebP)
- Compression enabled

✅ **Content Optimization**
- Semantic HTML structure
- Keyword-rich hidden content for crawlers
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images (to be added)

✅ **Performance**
- Next.js 16 with React Compiler
- Image optimization
- Font optimization (preconnect)
- Compression (gzip/brotli)

✅ **Progressive Web App**
- Web app manifest
- Theme colors
- App icons (multiple sizes)

## Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for crawl errors
- Monitor search rankings for target keywords
- Review Core Web Vitals metrics

### Monthly Tasks
- Update content with fresh information
- Add new blog posts or case studies (if applicable)
- Review and update keywords based on performance
- Check backlink profile

### Quarterly Tasks
- Comprehensive SEO audit
- Competitor analysis
- Update structured data if needed
- Refresh Open Graph images

## Target Keywords

Primary:
- AI analytics platform
- Business intelligence software
- AI-powered insights

Secondary:
- Predictive analytics
- Data visualization
- Machine learning analytics
- KPI dashboard

Long-tail:
- AI analytics for business decisions
- Automated business intelligence platform
- Real-time data insights dashboard

## Expected Results

With proper implementation, you should see:
- **Week 1-2**: Site indexed by Google
- **Month 1**: Appearing in search results for brand keywords
- **Month 2-3**: Ranking improvements for long-tail keywords
- **Month 3-6**: Competitive rankings for secondary keywords
- **Month 6+**: Strong presence for primary keywords

## Support

For issues or questions:
- Email: info@the-airco.com
- Website: https://www.the-airco.com

---

**Last Updated**: January 29, 2026
**Version**: 1.0.0

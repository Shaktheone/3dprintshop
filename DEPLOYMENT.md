# 🚀 Deploy Your 3D Print Shop to the Web (FREE!)

## Method 1: Vercel (Recommended - Easiest & Free)

Vercel is perfect for Next.js and gives you a free domain instantly!

### Step 1: Create a Vercel Account
1. Go to **https://vercel.com**
2. Click "Sign Up"
3. Sign up with GitHub (recommended) or email

### Step 2: Install Vercel CLI
Open your terminal and run:
```bash
npm install -g vercel
```

### Step 3: Deploy Your Website
In your project folder, run:
```bash
vercel
```

Follow the prompts:
- "Set up and deploy?" → **Yes**
- "Which scope?" → Select your account
- "Link to existing project?" → **No**
- "What's your project's name?" → `3d-print-shop` (or any name)
- "In which directory is your code located?" → `./`
- "Override settings?" → **No**

**That's it!** Vercel will:
- Deploy your site
- Give you a FREE domain like: `3d-print-shop.vercel.app`
- Auto-deploy when you make changes

### Step 4: Share with Your Friend
Copy the URL Vercel gives you (e.g., `https://3d-print-shop.vercel.app`) and send it to anyone!

---

## Method 2: Deploy via Vercel Website (No Terminal)

### Step 1: Push to GitHub First
1. Create a GitHub account at **https://github.com**
2. Create a new repository
3. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to **https://vercel.com**
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

**Done!** You'll get a free URL instantly.

---

## 🎯 Quick Commands

### Deploy Updates
Whenever you make changes:
```bash
vercel --prod
```

### Check Deployment
```bash
vercel ls
```

---

## 💡 Pro Tips

### Custom Domain (Free subdomain)
- Vercel gives you: `yourproject.vercel.app`
- You can change the project name in Vercel dashboard

### Want Your Own Domain?
If you want something like `3dprintshop.com`:
1. Buy domain from Namecheap/GoDaddy (~$10/year)
2. Connect it in Vercel settings (still FREE hosting!)

### Performance
Vercel automatically:
- ✅ Optimizes images
- ✅ Enables CDN globally
- ✅ SSL certificate (HTTPS)
- ✅ Fast load times worldwide

---

## 🔥 Alternative Free Options

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```
Gets you: `yoursite.netlify.app`

### Cloudflare Pages
- Free hosting
- Connect via GitHub
- Gets you: `yoursite.pages.dev`

---

## ⚠️ Before Deploying

Make sure all your files are saved and the local version works:
```bash
npm run build
```

If build succeeds, you're ready to deploy!

---

## 🎉 After Deployment

Share your link:
- **WhatsApp**: Send the URL
- **Email**: Copy and paste
- **QR Code**: Use a QR generator for the URL

Your website will be:
- ✅ Live 24/7
- ✅ Fast globally
- ✅ Mobile responsive
- ✅ Both light/dark mode
- ✅ Georgian + English

---

**Need help?** Let me know and I'll walk you through it step by step!

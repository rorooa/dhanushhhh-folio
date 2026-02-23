# Dhanush Portfolio

A dark antigravity-themed React portfolio.

## 🚀 Local Development

```bash
npm install
npm start
```

## 📦 Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts → Done! Your site is live.

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "init: portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **New Project** → Import your GitHub repo
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy** → Done! 🎉

## 🎨 Customizing

- Update social links, email, phone in `src/App.jsx` at the top `data` object
- Colors: edit CSS variables at the top of `src/index.css`
- Add/remove projects in the `data.projects` array

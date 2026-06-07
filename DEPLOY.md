# Portfolio Deployment Guide

## Prerequisites
- Node.js 18+ (use nvm: `nvm use 22`)
- npm or pnpm

## Local Development
```bash
cd portfolio
npm install
npm run dev       # http://localhost:5173
```

## Production Build
```bash
npm run build     # outputs to /dist
npm run preview   # preview the built output locally
```

## Deployment Options

### 1. Vercel (Recommended — fastest, free)
```bash
npm i -g vercel
vercel            # follow prompts, auto-detects Vite
```
Or connect your GitHub repo at vercel.com → Import Project.

### 2. Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
Or drag-and-drop the `/dist` folder at app.netlify.com/drop.

### 3. GitHub Pages
```bash
# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"
npm i -D gh-pages
npm run deploy
```

### 4. AWS S3 + CloudFront
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
# Configure CloudFront distribution pointing to S3
```

## Customization Checklist
- [ ] Replace `/public/resume.pdf` with your actual resume PDF
- [ ] Update GitHub links (`https://github.com/your-username`) in Hero.tsx, Projects.tsx, Contact.tsx, Footer.tsx
- [ ] Update LinkedIn URL in Hero.tsx, Contact.tsx, Footer.tsx
- [ ] Connect contact form: integrate EmailJS (emailjs.com) or Formspree (formspree.io) in Contact.tsx
- [ ] Add GitHub API token to GitHubActivity.tsx for real contribution data
- [ ] Update certifications status in Certifications.tsx as you earn them

## Environment Variables (for contact form)
Create `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Folder Structure
```
portfolio/
├── public/
│   └── resume.pdf          ← Replace with your resume
├── src/
│   ├── App.tsx             ← Root layout
│   ├── index.css           ← Global styles + Tailwind layers
│   ├── main.tsx            ← React entry point
│   └── components/
│       ├── Navbar.tsx      ← Sticky nav with mobile menu
│       ├── Hero.tsx        ← Landing section with typewriter
│       ├── About.tsx       ← Bio, strengths, career highlights
│       ├── Skills.tsx      ← Interactive tabbed skill cards
│       ├── Experience.tsx  ← Timeline with project impact metrics
│       ├── Projects.tsx    ← Featured + regular project cards
│       ├── SystemDesign.tsx ← Architecture case studies
│       ├── Certifications.tsx ← Cert cards with status
│       ├── GitHubActivity.tsx ← Heatmap + language breakdown
│       ├── Contact.tsx     ← Form + contact info
│       └── Footer.tsx      ← Footer with nav + socials
├── tailwind.config.ts      ← Custom fonts, colors, animations
├── index.html              ← Google Fonts (Syne + DM Sans + JetBrains Mono)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

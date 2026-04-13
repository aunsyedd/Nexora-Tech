# Nexora Tech — AI-Powered Software Company Website

A full production-ready website for **Nexora Tech**, built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nexora-tech/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer + SEO)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services page
│   ├── projects/page.tsx       # Projects / Portfolio page
│   ├── contact/page.tsx        # Contact page
│   └── globals.css             # Global styles + CSS variables
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   │   └── Footer.tsx          # 4-column footer
│   └── ui/
│       ├── Button.tsx          # Animated button (4 variants)
│       └── SectionHeader.tsx   # Reusable section titles
│
├── sections/                   # Page-specific sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── about/
│   ├── services/
│   ├── projects/
│   └── contact/
│
├── lib/
│   ├── data.ts                 # All content data (services, projects, etc.)
│   └── utils.ts                # cn() utility + constants
│
├── tailwind.config.ts          # Design system (colors, shadows, animations)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary (Neon Cyan) | `#00D4FF` |
| Accent (Purple) | `#7C3AED` |
| Background | `#050A14` |
| Surface / Card | `#0D1526` |
| Border | `#1A2540` |
| Text Muted | `#8896A8` |
| Font Display | Syne |
| Font Body | DM Sans |

---

## 📄 Pages

| Page | Route | Sections |
|------|-------|----------|
| Home | `/` | Hero, Services preview, Featured Projects, Testimonials, CTA |
| About | `/about` | Hero, Mission/Vision, CEO intro, Values |
| Services | `/services` | Hero, Detailed service cards, Process steps |
| Projects | `/projects` | Hero, Filterable project grid |
| Contact | `/contact` | Hero, Contact form + info |

---

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Vercel auto-detects Next.js
4. Click **Deploy**

No environment variables required for the base setup.

---

## 🔧 Customization

### Update company content
Edit `/lib/data.ts` — all services, projects, testimonials, and stats live here.

### Update contact form action
In `sections/contact/ContactSection.tsx`, replace the `handleSubmit` mock with a real API call (e.g. Resend, EmailJS, or your own backend endpoint).

### Add your logo
Replace the `<Zap>` icon in `components/layout/Navbar.tsx` with your own SVG or `<Image>` component.

---

## 👤 CEO
**Syed Aun Muhammad** — Founder & CEO, Nexora Tech

---

Built with ❤️ by Nexora Tech

<!-- @format -->

# Tiva Creative - Digital Consulting & Business Transformation

A modern, responsive website for **Tiva Creative**, a digital consulting and business transformation company partnering with ambitious founders, SMEs, and organisations across Nigeria and Africa.

## 🎯 About Tiva Creative

Tiva Creative helps African businesses design, build, and scale digital-first operations. We partner with growth-focused businesses to move from ideas and ambition to structured execution and measurable results.

### Our Mission

To design and deliver digital strategies, systems, and solutions that optimise operations, empower teams, and drive sustainable business growth.

### Our Vision

To become a trusted digital consulting partner shaping how African businesses build, scale, and compete globally.

## 🌟 Website Features

### Core Pages

- **Home** - Dynamic landing page with hero section, service overview, strategic positioning, core pillars, social proof, and call-to-action
- **About** - Comprehensive company information including mission, vision, approach, and leadership
- **Services** - Three strategic programs tailored for different growth stages:
  - Digital Business Foundation & Growth Program (8-12 weeks)
  - Product, Operations & Scale Acceleration Program (90 days)
  - Digital Transformation & Leadership Advisory Program (3-6 months)
- **Contact** - Interactive contact form for strategy session bookings
- **Privacy Policy** - Comprehensive privacy and data protection information
- **Terms of Service** - Detailed terms and conditions

### Design Highlights

- **Modern UI/UX** - Clean, professional design with smooth animations powered by Framer Motion
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Interactive Elements** - Engaging hover effects, scroll animations, and particle backgrounds
- **Accessibility** - Built with semantic HTML and ARIA labels for screen readers
- **Performance** - Optimized loading times with code splitting and lazy loading
- **SEO Optimized** - Proper meta tags, Open Graph, and Twitter Card integration

### Key Components

- **Hero Sections** - Eye-catching gradient backgrounds with animated content
- **Service Cards** - Detailed program breakdowns with outcomes and deliverables
- **Social Proof** - Client testimonials and success metrics
- **Contact Forms** - React Hook Form with Zod validation
- **Navigation** - Responsive header with mobile menu
- **Footer** - Comprehensive site links and company information

## 🛠️ Technology Stack

### Core Technologies

- **React 18.3** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **React Router DOM** - Client-side routing

### UI Framework & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon set

### Form Management

- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Additional Features

- **@tanstack/react-query** - Powerful data synchronization
- **next-themes** - Dark mode support
- **tsparticles** - Interactive particle backgrounds
- **date-fns** - Modern date utility library
- **Sonner** - Beautiful toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tiva-creative-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
bun run build
```

The optimized production build will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

## 📁 Project Structure

```
tiva-creative-website/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Header, Footer, Layout)
│   │   ├── sections/    # Page sections (Hero, WhatWeDo, etc.)
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route pages
│   │   ├── Index.tsx    # Home page
│   │   ├── About.tsx    # About page
│   │   ├── Services.tsx # Services page
│   │   ├── Contact.tsx  # Contact page
│   │   ├── Privacy.tsx  # Privacy policy
│   │   ├── Terms.tsx    # Terms of service
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

### Theme Configuration

The theme is configured in `tailwind.config.ts` with custom colors, fonts, and design tokens. Modify this file to adjust the visual appearance.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in the header component

### Styling

- Global styles: `src/index.css`
- Component styles: Use Tailwind utility classes
- Custom components: Located in `src/components/ui/`

## 📄 License

This project is proprietary and confidential. All rights reserved by Tiva Creative.

## 🤝 Contact

For inquiries about Tiva Creative's services, visit the [Contact page](https://tivacreative.com/contact) or reach out through the website.

---

**Built with ❤️ for African businesses ready to scale digitally**

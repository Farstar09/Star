# Star Developer Website

A modern, interactive developer portfolio website for **Star** built with Next.js 14, React, TypeScript, and Tailwind CSS. Features a stunning dark theme with purple accents and glowing animations.

## 🌟 Features

### Core Sections
- **Hero Section**: Eye-catching introduction with animated elements and call-to-action buttons
- **Services**: Showcase of expertise in Discord Bots, Minecraft Plugins, Web Development, eSports, and more
- **Portfolio**: Interactive project gallery with category filtering (Discord Bots, Minecraft Plugins, Websites, eSports)
- **Blog**: Article listings with search functionality for tutorials and insights
- **Contact**: Integrated contact form with social media links

### Design & UX
- **Dark Theme**: Black-dominant background (#0a0a0a) with purple accents (#9333ea)
- **Glowing Effects**: Purple glow effects on buttons, cards, and interactive elements
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Responsive Design**: Fully mobile-friendly and optimized for all screen sizes
- **Modern Typography**: Using Inter font family for clean, professional text

### Technical Features
- **Next.js 14**: Latest App Router architecture for optimal performance
- **TypeScript**: Type-safe development with full TypeScript support
- **Tailwind CSS**: Utility-first CSS with custom theme configuration
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Static generation for fast load times
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Farstar09/Star.git
cd Star
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
Star/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout with navigation and footer
│   └── page.tsx             # Home page (combines all sections)
├── components/              # React components
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Footer.tsx          # Footer with links and social media
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Portfolio.tsx       # Portfolio with filtering
│   ├── Blog.tsx            # Blog section with search
│   └── Contact.tsx         # Contact form and info
├── public/                 # Static assets
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts` and `app/globals.css`. Key colors:
- **Primary Purple**: `#9333ea` (purple-600)
- **Dark Background**: `#0a0a0a`
- **Dark Card**: `#111111`
- **Lighter Dark**: `#1a1a1a`

### Content
Update the content in each component file:
- **Portfolio Projects**: Edit the `projects` array in `components/Portfolio.tsx`
- **Blog Posts**: Edit the `blogPosts` array in `components/Blog.tsx`
- **Services**: Edit the `services` array in `components/Services.tsx`
- **Contact Info**: Update contact details in `components/Contact.tsx`

### Images
Replace placeholder images in the Portfolio and Blog sections with your actual project images. Images should be added to the `public/images` directory.

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Platforms
This Next.js app can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any platform supporting Node.js

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## 🎯 Design Inspiration

The website design takes inspiration from modern portfolio websites with a focus on:
- Dark, immersive user interface
- Vibrant purple accents for visual interest
- Smooth animations and transitions
- Clean, professional layout
- Easy navigation and user experience

## 📧 Contact

For any inquiries or custom work:
- **Email**: hello@builtbystar.com
- **GitHub**: [Farstar09](https://github.com/Farstar09)

## 📄 License

This project is open source and available under the MIT License.

---

Built with 💜 by **Star**

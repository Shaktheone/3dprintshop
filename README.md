# 3DPrintShop - Premium 3D Printed Creations

A modern, professional e-commerce website for selling 3D printed products. Built with Next.js, TypeScript, and modern web design principles.

## ✨ Features

- **Modern Dark Theme**: Premium dark mode design with gradient accents and glassmorphism effects
- **3D Visual Effects**: Stunning hover animations, floating backgrounds, and depth-based shadows
- **Product Showcase**: Beautiful product grid with high-quality images and interactive cards
- **Responsive Design**: Fully responsive layout that works on all devices
- **Custom Orders Section**: Dedicated section for custom 3D printing requests
- **Shopping Cart**: Integrated cart system for e-commerce functionality
- **Category Filtering**: Easy product navigation with category filters

## 🎨 Design Highlights

- **Premium Color Palette**: Carefully selected gradients (purple, pink, teal)
- **Orbitron Font**: Futuristic tech font for headings
- **Micro-animations**: Smooth transitions and hover effects throughout
- **Glassmorphism**: Frosted glass effects for modern UI elements
- **3D Shadows & Glows**: Depth-based shadows that create a 3D appearance

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd printersettinggs
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
printersettinggs/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Header.tsx          # Navigation and cart
│       │   ├── Header.module.css
│       │   ├── Hero.tsx            # Hero section with CTA
│       │   ├── Hero.module.css
│       │   ├── ProductCard.tsx     # Product display card
│       │   └── ProductCard.module.css
│       ├── globals.css             # Global styles & design system
│       ├── page.tsx                # Main homepage
│       ├── page.module.css
│       └── layout.tsx              # Root layout
├── public/
│   ├── vase.png                    # Product images
│   ├── dragon.png
│   ├── phone-stand.png
│   ├── planter.png
│   ├── organizer.png
│   └── robot.png
└── package.json
```

## 🛠️ Technology Stack

- **Framework**: Next.js 16.x (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Fonts**: Google Fonts (Inter, Orbitron)
- **Build Tool**: Turbopack

## 🎯 Product Categories

- **Home Decor**: Vases, planters, decorative items
- **Tech Accessories**: Phone stands, cable organizers
- **Figurines**: Dragon models, articulated robots
- **Office**: Desk organizers, pen holders
- **Custom**: Personalized 3D printed items

## 💰 Pricing

Products range from ₾25 to ₾89 with special discounts available on select items.

## 📞 Contact Information

- **Location**: Tbilisi, Georgia
- **Phone**: +995 555 123 456
- **Email**: info@3dprintshop.ge

## 🚢 Deployment

To build for production:

```bash
npm run build
npm start
```

The production build will be optimized and ready to deploy to any hosting platform (Vercel, Netlify, etc.).

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --color-accent: #14b8a6;
  /* ... more colors */
}
```

### Adding Products

Edit the `products` array in `src/app/page.tsx`:

```typescript
const products = [
  {
    id: 7,
    name: 'Your Product Name',
    price: 50.00,
    originalPrice: 70.00, // Optional
    image: '/your-image.png',
    category: 'Your Category'
  },
  // ... more products
];
```

## 📝 License

This project is private and proprietary.

## 🙏 Credits

Designed and developed with care for premium 3D printing e-commerce.

---

**Ready to launch your 3D printing business? This website is your perfect starting point!** 🚀

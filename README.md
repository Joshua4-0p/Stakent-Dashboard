# Stakent Dashboard - Cryptocurrency Staking Platform

A modern, responsive cryptocurrency staking dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates a professional staking platform interface with pixel-perfect accuracy and enhanced user experience features.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Seamlessly adapts across mobile (≤640px), tablet (641–1024px), and desktop (>1024px) breakpoints
- **Dark/Light Mode**: Persistent theme switching with system preference detection
- **Interactive Charts**: Real-time data visualization with smooth animations
- **Collapsible Sidebar**: Space-efficient navigation with expandable sections
- **Live Data Updates**: Simulated real-time staking metrics and portfolio updates

### Enhanced User Experience
- **Micro-interactions**: Smooth hover states, transitions, and loading animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Next.js 15 features including image optimization and SSR
- **Component Architecture**: Modular, reusable components following atomic design principles

### Dashboard Sections
1. **Top Staking Assets**: Featured cryptocurrency staking opportunities with trend charts
2. **Active Stakings**: Portfolio management with detailed metrics and controls
3. **Liquid Staking Portfolio**: Investment period configuration and wallet integration
4. **Real-time Metrics**: Live updates for staking ratios, rewards, and market data

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **Charts**: Custom Canvas-based mini charts

#Deployment URL
https://stakent-dashboard.vercel.app/

## Github Link
https://github.com/Joshua4-0p/Stakent-Dashboard
## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd stakent-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Design Implementation

### Responsive Breakpoints
- **Mobile**: ≤640px - Stacked layout, collapsible navigation
- **Tablet**: 641–1024px - Hybrid layout with adjusted spacing
- **Desktop**: >1024px - Full three-column layout with sidebar

### Color Palette
- **Background**: Deep navy (#0a0b0f, #0f1015)
- **Cards**: Semi-transparent gray (#1f2937/50)
- **Accents**: Purple gradient (#667eea → #764ba2)
- **Text**: White primary, gray secondary (#9ca3af)

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Bold headings, medium labels, regular body text
- **Sizes**: Responsive scaling from 12px to 32px

## 🔧 Customization

### Theme Configuration
Modify `tailwind.config.ts` for custom colors and spacing:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      // Custom color palette
    },
    animation: {
      // Custom animations
    }
  }
}
\`\`\`

### Component Styling
Components use Tailwind classes with CSS variables for theme consistency:

\`\`\`css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
\`\`\`

## 📱 Responsive Features

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for chart navigation
- Collapsible sidebar with overlay
- Optimized typography scaling

### Tablet Adaptations
- Hybrid grid layouts
- Adjusted spacing and padding
- Optimized for both portrait and landscape

### Desktop Enhancements
- Full three-column layout
- Hover states and micro-interactions
- Keyboard shortcuts (Cmd/Ctrl + B for sidebar)
- Advanced tooltips and dropdowns

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images load on demand
- **Bundle Analysis**: Optimized bundle size with tree shaking

## 🧪 Testing & Quality

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meet standards

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm run build
# Deploy to Vercel
\`\`\`
#Deployment URL
https://stakent-dashboard.vercel.app/

### Other Platforms
The application can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📋 Design Decisions & Assumptions

### Visual Fidelity
- **Color Matching**: Used color picker tools to match exact hex values
- **Spacing**: Implemented 8px grid system for consistent spacing
- **Typography**: Matched font weights and sizes pixel-perfectly
- **Icons**: Used Lucide React for consistent icon styling

### Interactive Elements
- **Hover States**: Added subtle animations and color transitions
- **Loading States**: Implemented skeleton loaders for better UX
- **Error Handling**: Graceful fallbacks for data loading failures

### Data Simulation
- **Mock Data**: Created realistic cryptocurrency data for demonstration
- **Real-time Updates**: Simulated live data updates with intervals
- **Chart Data**: Generated realistic trend data for visualizations

### Responsive Strategy
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Touch Optimization**: Larger touch targets and gesture support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern fintech applications
- shadcn/ui for the excellent component library
- Tailwind CSS for the utility-first approach
- Next.js team for the amazing framework

---

**Live Demo**: [Deploy URL will be added after deployment]

**Repository**: [GitHub URL]

For questions or support, please open an issue in the repository.

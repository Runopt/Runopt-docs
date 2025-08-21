# Runopt Documentation

Official documentation site for Runopt - AI-powered software for land development.

## 🚀 Features

- **Custom Homepage**: Beautiful dark theme with Runopt brand gradients
- **Responsive Design**: Optimized for desktop and mobile devices
- **Tailwind CSS**: Modern utility-first styling
- **Interactive Navigation**: Functional buttons and links
- **SEO Optimized**: Meta tags and social card images

## 🎨 Design

- **Brand Colors**: Purple (`#B945CC`) to Blue (`#355BE0`) gradients
- **Dark Theme**: Consistent dark backgrounds throughout
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions

## 📁 Project Structure

```
Runopt-docs/
├── docs/                    # Documentation content
│   ├── intro.md            # Getting started
│   ├── getting-started/    # Installation & setup guides
│   ├── zoning-analysis/    # Zoning tools documentation
│   ├── civil-engineering/  # Civil engineering features
│   └── api-reference/      # API documentation
├── src/
│   ├── pages/              # Custom pages
│   │   └── index.tsx       # Homepage component
│   ├── css/                # Global styles
│   │   └── custom.css      # Custom CSS with Tailwind
│   └── pages/              # Page-specific styles
│       └── index.module.css # Homepage styling
├── static/                 # Static assets
│   └── img/               # Images and logos
├── pdfs/                  # PDF documentation files
└── docusaurus.config.ts   # Docusaurus configuration
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

### Customization

- **Styling**: Modify `src/css/custom.css` for global styles
- **Homepage**: Edit `src/pages/index.tsx` and `src/pages/index.module.css`
- **Configuration**: Update `docusaurus.config.ts` for site settings
- **Content**: Add documentation in the `docs/` directory

## 🚀 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions" for automatic deployment

### Build Configuration

The site is configured for GitHub Pages deployment with:
- Base URL: `/`
- Organization: Runopt
- Project name: Runopt-docs

## 📚 Documentation Sections

- **Getting Started**: Installation, authentication, quick start
- **Zoning Analysis**: Property search, zoning tools overview
- **Civil Engineering**: Design optimization, grading, drainage
- **API Reference**: Developer documentation
- **Troubleshooting**: Common issues and solutions

## 🎯 Key Features Implemented

- ✅ Custom homepage with Runopt branding
- ✅ Purple-to-blue gradient styling
- ✅ Functional navigation buttons
- ✅ Dark theme throughout
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Tailwind CSS integration
- ✅ GitHub Pages ready

## 📄 License

This project is part of the Runopt platform documentation.

---

Built with [Docusaurus](https://docusaurus.io/) - A modern static website generator.

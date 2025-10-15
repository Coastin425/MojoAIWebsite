# MojoAIWebsite
# MojoAI Website

Modern, responsive landing page for MojoAI - an AI-powered conversational assistant that users can text for reminders, notes, and everyday support.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌊 Animated gradient backgrounds and floating elements
- ✨ Glow effects and smooth transitions
- 📱 Mobile-first, fully responsive layout
- 🚀 Built with Next.js 15 and React 19
- 🎯 SEO optimized with meta tags
- 🔒 Ready for Twilio domain verification
- 📦 Static export for easy deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Coastin425/MojoAIWebsite.git
cd MojoAIWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

Build and export the site as static files:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment.

## Deployment

### GitHub Pages

1. Build the site:
```bash
npm run build
```

2. Deploy the `out/` directory to GitHub Pages:
```bash
# Add the out directory (if needed)
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

3. Configure GitHub Pages in repository settings to serve from the `gh-pages` branch

### Porkbun GitHub Integration

1. Build the site: `npm run build`
2. Connect your Porkbun domain to GitHub
3. Point to the `out/` directory in repository settings
4. Configure DNS records as per Porkbun documentation

### Custom Server

Simply upload the contents of the `out/` directory to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.)

## Project Structure

```
MojoAIWebsite/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Main landing page component
├── public/
│   ├── logo.svg             # MojoAI logo (placeholder)
│   ├── background.svg       # Hero background pattern
│   └── favicon.svg          # Site favicon
├── next.config.js           # Next.js configuration (static export)
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts

```

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'mojo-indigo': '#1e1b4b',
  'mojo-violet': '#7c3aed',
  'mojo-aqua': '#06b6d4',
}
```

### Content

Edit `app/page.tsx` to update:
- Hero headline and subheadline
- About section text
- Features and icons
- Contact form behavior
- Footer links and information

### SEO & Metadata

Update `app/layout.tsx` to modify:
- Page title and description
- Open Graph tags
- Twitter card metadata
- Twilio verification code

### Assets

Replace placeholder files in `public/`:
- `logo.svg` - Your company logo
- `background.svg` - Hero background pattern
- `favicon.svg` - Browser favicon

## Contact Form

The contact form currently displays a success message on submit. To add backend functionality:

1. Set up a form handler (e.g., Formspree, SendGrid, custom API)
2. Update the `handleSubmit` function in `app/page.tsx`
3. Add environment variables for API keys

## License

© 2025 MojoAI LLC | Atlanta, Georgia

## Contact

- **Email**: hello@mojoai.work
- **Location**: Atlanta, Georgia

---

Built with ❤️ by the MojoAI team

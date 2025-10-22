# MojoAIWebsite
# MojoAI Website

Modern, responsive landing page for MojoAI, an AI powered conversational assistant that users can text for reminders, notes, and everyday support.

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

## Developer API Integration

The public website (this repository) is intentionally separated from the backend service ("Verbas") which powers AI and SMS processing.

### Architecture Separation
- **Frontend (this repo)**: Static Next.js site deployed via GitHub Pages / Porkbun.
- **Backend (Verbas)**: Node.js/Express service deployed to Azure App Service.
- **Communication**: Client-side fetch calls to the backend's public base URL.

### Environment Variable
Add to `.env.local` (or configure in GitHub Actions secrets):
```bash
NEXT_PUBLIC_API_BASE_URL=https://mojoaitest1-cbdgeke8abevate3.centralus-01.azurewebsites.net
```

### API Endpoints

#### 1. Waitlist Endpoint
Users can join the private beta waitlist through the modal form.

**Endpoint**: `POST /waitlist`

**Request**:
```json
{
  "email": "user@example.com",
  "phone": "+15551234567"
}
```

**Response** (Success - 200 OK):
```json
{
  "status": "ok",
  "message": "Added to waitlist"
}
```

**Response** (Error - 400/500):
```json
{
  "error": "Invalid email format"
}
```

**Example curl**:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","phone":"+15551234567"}' \
  https://mojoaitest1-cbdgeke8abevate3.centralus-01.azurewebsites.net/waitlist
```

#### 2. Contact Form Endpoint
Users can submit general inquiries through the contact form.

**Endpoint**: `POST /contact`

**Request**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to learn more about MojoAI."
}
```

**Response** (Success - 200 OK):
```json
{
  "status": "ok",
  "message": "Message received"
}
```

**Response** (Error - 400/500):
```json
{
  "error": "All fields are required"
}
```

**Example curl**:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"I would like to learn more"}' \
  https://mojoaitest1-cbdgeke8abevate3.centralus-01.azurewebsites.net/contact
```

#### 3. Twilio Inbound SMS
Normally invoked by Twilio's webhook (not called by frontend).

**Endpoint**: `POST /sms`

**Request** (application/x-www-form-urlencoded):
```
From=%2B15551234567
To=%2B19314655995
Body=Hello
```

**Example curl**:
```bash
curl -X POST \
  -d "From=%2B15551234567&To=%2B19314655995&Body=Hello" \
  https://mojoaitest1-cbdgeke8abevate3.centralus-01.azurewebsites.net/sms
```

Note: The real Twilio webhook includes `X-Twilio-Signature` for validation.

### Frontend Implementation Details

Both forms in the frontend:
- Validate inputs before submission
- Show loading state while requests are pending (button disabled)
- Display success/error toasts with auto-dismiss timers
- Log request/response to browser console for debugging
- Handle timeouts (10s max) with AbortController
- Gracefully degrade when `NEXT_PUBLIC_API_BASE_URL` is not set

### Security Notes
- Do **not** expose Twilio or OpenAI credentials in frontend code.
- Only public base URL and non-sensitive endpoints are referenced here.
- Backend performs signature validation and logging.

### Updating the Base URL
Change `NEXT_PUBLIC_API_BASE_URL` in GitHub Actions workflow (`.github/workflows/deploy.yml`) and redeploy; the static export will embed the new value for subsequent client requests.

### Failure Handling
When the API is down or unreachable:
- Forms show clear error messages.
- No data is transmitted if env variable is missing.
- User can retry later without losing page state.
- Browser console logs include "calling backend..." then "success" or "error" for debugging.

---

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

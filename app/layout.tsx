import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MojoAI - AI You Can Text",
  description: "MojoAI makes your thoughts actionable — just send a text. Get reminders, notes, and everyday AI support.",
  keywords: ["AI", "text assistant", "reminders", "notes", "conversational AI", "MojoAI"],
  authors: [{ name: "MojoAI LLC" }],
  openGraph: {
    title: "MojoAI - AI You Can Text",
    description: "MojoAI makes your thoughts actionable — just send a text.",
    type: "website",
    locale: "en_US",
    siteName: "MojoAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "MojoAI - AI You Can Text",
    description: "MojoAI makes your thoughts actionable — just send a text.",
  },
  verification: {
    other: {
      // Placeholder for Twilio verification
      "twilio-domain-verification": "placeholder-verification-code",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

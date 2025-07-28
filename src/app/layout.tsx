import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { SITE_CONFIG, FONT_CONFIG } from "@/lib/constants";

// Font configuration with better optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: FONT_CONFIG.subsets,
  display: FONT_CONFIG.display,
  preload: FONT_CONFIG.preload,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: FONT_CONFIG.subsets,
  display: FONT_CONFIG.display,
  preload: FONT_CONFIG.preload,
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.creator }],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    description: SITE_CONFIG.description,
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport configuration for better mobile experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: SITE_CONFIG.themeColor,
};

// Type definition for layout props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

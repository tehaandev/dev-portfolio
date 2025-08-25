import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import TransitionWrapper from "@/components/TransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tehaan Perera | Software Engineer",
  description:
    "Professional portfolio showcasing projects, skills, and experience in web development, programming, and technology solutions.",
  keywords: [
    "software developer",
    "web development",
    "full-stack developer",
    "Tehaan Perera",
    "portfolio",
  ],

  // Basic metadata
  authors: [{ name: "Tehaan Perera" }],
  creator: "Tehaan Perera",
  publisher: "Tehaan Perera",

  // Open Graph / social sharing metadata
  openGraph: {
    title: "Tehaan Perera | Software Engineer Portfolio",
    description:
      "Explore my software engineering projects, technical skills, and professional experience.",
    url: "https://tehaan.me",
    siteName: "Tehaan Perera Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tehaan.me/tp-og-image.jpg", // Create this image - 1200x630px recommended
        width: 1200,
        height: 630,
        alt: "Tehaan Perera | Software Engineer",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Tehaan Perera | Software Engineer",
    description: "Software Engineer specializing in modern web technologies.",
    creator: "@yourtwitterhandle",
    images: ["https://tehaan.me/tp-og-image.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://tehaan.me", // Replace with your actual domain
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Web app manifest
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <Header />
        <TransitionWrapper>{children}</TransitionWrapper>
        <Footer />
        <SpeedInsights />
        {/* 
          Developed by Tehaan Perera
          Website: https://tehaan.me
          Project: Tehaan Perera's Portfolio
          Year: 2025
        */}
      </body>
    </html>
  );
}


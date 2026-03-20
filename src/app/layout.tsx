import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LiveSoul — Still Human",
  description:
    "LiveSoul is a manifesto for human connection. In a world flooded with AI-mediated everything, we believe real relationships still matter. Still human. Always.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LiveSoul',
  },
  icons: {
    apple: '/icons/icon-192.png',
  },
  openGraph: {
    title: "LiveSoul — Still Human",
    description:
      "In a world flooded with AI-mediated everything, we believe real relationships still matter.",
    type: "website",
    siteName: "LiveSoul",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveSoul — Still Human",
    description:
      "In a world flooded with AI-mediated everything, we believe real relationships still matter.",
  },
};

export const viewport: Viewport = {
  themeColor: "#C4882F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

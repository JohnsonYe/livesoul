import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PostHumanAPI — the only endpoint that feels something",
  description:
    "PostHumanAPI connects you with real people — for a meal, a walk, a sport, a conversation, an adventure. Not a bot. Not a subscription. A human, on demand.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'PostHumanAPI',
  },
  icons: {
    apple: '/icons/icon-192.png',
  },
  openGraph: {
    title: "PostHumanAPI — the only endpoint that feels something",
    description:
      "In a world of infinite intelligence, we remain as the only API that's still human.",
    type: "website",
    siteName: "PostHumanAPI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostHumanAPI — the only endpoint that feels something",
    description:
      "In a world of infinite intelligence, we remain as the only API that's still human.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f4f0",
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
      <body className="min-h-full flex flex-col font-sans antialiased bg-void text-fg">
        {children}
      </body>
    </html>
  );
}

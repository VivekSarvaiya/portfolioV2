import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "My Professional Portfolio & Blog",
    template: "%s | My Portfolio",
  },
  description: "A professional portfolio and blog showcasing engineering, design, and thoughts on software development.",
  keywords: ["Software Engineer", "React", "Next.js", "Portfolio", "Blog"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "My Professional Portfolio & Blog",
    description: "A professional portfolio and blog showcasing engineering, design, and thoughts on software development.",
    siteName: "My Portfolio",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Professional Portfolio & Blog",
    description: "A professional portfolio and blog showcasing engineering, design, and thoughts on software development.",
    images: ["/opengraph.jpg"],
    creator: "@yourhandle",
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
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable
        )}
      >
        <div className="noise-bg" />
        <main className="relative flex min-h-screen flex-col">
           {/* Assume Navbar exists or we import it. For now, simple wrapper */}
          {children}
        </main>
      </body>
    </html>
  );
}


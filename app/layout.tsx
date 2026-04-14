import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nexora Tech — AI-Powered Software Development",
    template: "%s | Nexora Tech",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  description:
    "Nexora Tech is a premium software development company specializing in Full Stack Web Development, AI-Powered Applications, SaaS Products, and AI Chatbot Integration.",
  keywords: [
    "AI software development",
    "full stack development",
    "SaaS development",
    "AI chatbot integration",
    "web development agency",
    "Nexora Tech",
  ],
  authors: [{ name: "Nexora Tech" }],
  creator: "Nexora Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoratech.io",
    title: "Nexora Tech — AI-Powered Software Development",
    description:
      "Building Intelligent Software Solutions with AI & Full Stack Engineering",
    siteName: "Nexora Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Tech — AI-Powered Software Development",
    description:
      "Building Intelligent Software Solutions with AI & Full Stack Engineering",
    creator: "@nexoratech",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise bg-[#050A14] text-[#E8EDF5] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

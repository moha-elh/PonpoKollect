import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ponpokollect.ma"),
  title: { default: "Ponpo Kollect | Rare Yu-Gi-Oh! cards and sealed boxes in Morocco", template: "%s | Ponpo Kollect" },
  description: "Rare Yu-Gi-Oh! singles and sealed booster boxes, handpicked abroad by Ponpoko. Pay on delivery, delivered across Morocco in 2–3 days.",
  openGraph: { siteName: "Ponpo Kollect", images: ["/assets/hero.webp"] },
  icons: { icon: "/assets/logo.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Chivo:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ToastProvider>
          <div className="page">
            <Header />
            {children}
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}

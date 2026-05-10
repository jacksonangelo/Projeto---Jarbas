import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header }         from "@/components/layout/Header";
import { Footer }         from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE }           from "@/lib/constants";

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
  display:  "swap",
});

const playfair = Playfair_Display({
  subsets:  ["latin"],
  variable: "--font-playfair",
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  SITE.name,
    template: `%s | Jarbas Garcia · Psicólogo em Almada`,
  },
  description:  SITE.description,
  metadataBase: new URL(SITE.url),
  alternates:   { canonical: "/" },
  openGraph: {
    type:        "website",
    locale:      "pt_PT",
    url:         SITE.url,
    siteName:    "Clínica de Psicologia Jarbas Garcia",
    title:       SITE.name,
    description: SITE.description,
  },
  twitter: {
    card:        "summary_large_image",
    title:       SITE.name,
    description: SITE.description,
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

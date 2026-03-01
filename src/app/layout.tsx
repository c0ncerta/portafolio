import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ram Daod | Junior Full-Stack Developer",
    template: "%s | Ram Daod",
  },
  description:
    "Portfolio de Ram Daod, desarrollador Junior Full-Stack con foco frontend (React/Next.js) y backend con Node.js.",
  keywords: [
    "Ram Daod",
    "Junior Full-Stack",
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Ram Daod" }],
  creator: "Ram Daod",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "Ram Daod | Junior Full-Stack Developer",
    description:
      "Desarrollo web orientado a producto: interfaces claras, rendimiento y soluciones funcionales.",
    siteName: "Portfolio de Ram Daod",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Daod | Junior Full-Stack Developer",
    description:
      "Portfolio con proyectos, stack y contacto para oportunidades de desarrollo web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

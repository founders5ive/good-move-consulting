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

export const metadata: Metadata = {
  metadataBase: new URL("https://goodmoveconsulting.com"),
  title: "Good Move Consulting | Organizational Capability & Execution",
  description: "Good Move helps organizations see how work actually happens, remove friction, and build the capability to execute.",
  openGraph: {
    title: "Good Move Consulting",
    description: "Better work starts with seeing the work clearly.",
    url: "https://goodmoveconsulting.com",
    siteName: "Good Move Consulting",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Good Move Consulting — Better work starts with seeing the work clearly." }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Good Move Consulting", description: "Better work starts with seeing the work clearly.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
        {children}
      </body>
    </html>
  );
}

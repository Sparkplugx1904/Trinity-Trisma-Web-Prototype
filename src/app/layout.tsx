import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trinity - Club Informatika SMA Negeri 3 Denpasar",
  description: "Website resmi Club Informatika Trinity SMA Negeri 3 Denpasar. Tempat berkembangnya bakat dan minat di bidang teknologi informasi.",
  keywords: ["Trinity", "Club Informatika", "SMA Negeri 3 Denpasar", "Trisma", "Programming", "Technology"],
  authors: [{ name: "Trinity Club Team" }],
  openGraph: {
    title: "Trinity - Club Informatika SMA Negeri 3 Denpasar",
    description: "Website resmi Club Informatika Trinity SMA Negeri 3 Denpasar",
    url: "https://trinity.sman3denpasar.sch.id",
    siteName: "Trinity Club",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinity - Club Informatika SMA Negeri 3 Denpasar",
    description: "Website resmi Club Informatika Trinity SMA Negeri 3 Denpasar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

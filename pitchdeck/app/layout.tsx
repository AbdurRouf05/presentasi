import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switch to Inter
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sinergo.ID | Pitch Deck",
  description: "Offline-First Attendance with AI Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased bg-black text-white min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

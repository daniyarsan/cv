import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/Providers";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniyar Akylbekov",
  description:
    "Full-stack developer with 8+ years of experience in building web apps. Skilled in React, Next.js, Node.js, PHP (Laravel), Python,and SQL.",
  icons: {
    icon: "/assets/images/site-logo.svg",
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
        className={`background-light600_dark100 text-dark100_light900 text-sm ${inter.variable}`}
      >
        <div className="m-4 mx-auto max-w-screen-lg p-4">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Portfolio | Sanjit Soreng",
  description: "Personal portfolio of Sanjit Soreng, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
      </head>
      <body className={`${inter.variable} font-inter bg-[#111111] text-white`}>{children}</body>
    </html>
  );
}

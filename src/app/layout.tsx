import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - MernStack",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

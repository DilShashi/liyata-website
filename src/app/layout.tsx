import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto font
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header/Header';
import Bg_home from "./components/Home/Background";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',  // Declare a custom variable for easier access in CSS
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Liyata Clone",
  description: "This is a souvenir business website clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistSans.variable} antialiased`}> 
        {/* Header */}
        <Header />
        {/* Main content area */}
        <div className="max-w-[1440px] w-full mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

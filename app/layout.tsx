import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Fira_Sans } from "next/font/google";

;


const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Add weights you need
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

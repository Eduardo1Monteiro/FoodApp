import type { Metadata } from "next";
import Header from '@/components/MainHeader/Header';
import "./globals.css";

export const metadata: Metadata = {
  title: "Food App",
  description: "Developed using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-radial">
        <Header />
        {children}
      </body>
    </html>
  );
}

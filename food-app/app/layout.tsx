import type { Metadata } from "next";
import Header from '@/components/MainHeader/Header';
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

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
        <Footer>Esse site é meramente um exemplar e não tem objetivos lucrativos ou de uso geral</Footer>
      </body>
    </html>
  );
}

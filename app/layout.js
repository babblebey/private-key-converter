import "./globals.css";
import Head from "@/components/Head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        <Header />
        <main className="min-h-[70vh] pb-5">
          { children }
        </main>
        <Footer />
      </body>
    </html>
  );
}

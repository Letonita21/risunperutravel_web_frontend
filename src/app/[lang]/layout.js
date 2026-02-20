import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/menu/Footer";
import WidgetWhatsapp from "@/components/contactos/WidgetWhatsapp";
import { getDictionary } from "../dictionaries/getDictionary";
import CookieBanner from "@/components/CookieBanner";
import { GoogleAnalytics } from '@next/third-parties/google';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <GoogleAnalytics gaId="G-16GXS72KM7" />
      <CookieBanner />
      <Navbar dict={dict.Navbar} lang={lang} />
      <main className="w-full items-center justify-center flex flex-col">
        {children}
      </main>
      <WidgetWhatsapp />
      <Footer dict={dict.Footer} lang={lang} />
    </div>
  );
}
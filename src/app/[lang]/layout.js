import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/menu/Footer";
import WidgetWhatsapp from "@/components/contactos/WidgetWhatsapp";
import { getDictionary } from "../dictionaries/getDictionary";
import CookieBanner from "@/components/CookieBanner";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* ✅ Google tag en head */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-H99RVXNPP6"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H99RVXNPP6');
        `}
      </Script>

      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CookieBanner />
        <Navbar dict={dict.Navbar} lang={lang} />
        <main className="w-full items-center justify-center flex flex-col">
          {children}
        </main>
        <WidgetWhatsapp />
        <Footer dict={dict.Footer} lang={lang} />
      </div>
    </>
  );
}
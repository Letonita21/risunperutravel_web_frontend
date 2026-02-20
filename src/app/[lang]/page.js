import { getDictionary } from "../dictionaries/getDictionary";
import BannerEmpresa from "@/components/inicio/BannerEmpresa";
import Divider from "@/components/Divider";
import ImperdiblesCusco from "@/components/inicio/ImperdiblesCusco";
import Traking from "@/components/inicio/Traking";
import LoMejorDePeru from "@/components/inicio/LoMejorDePeru";
import Vivencial from "@/components/inicio/Vivencial";
import { Portada } from "@/components/inicio/Portada";
import GaleriaHorizontal from "@/components/GaleriaHorizontal";
import ComentarioTripAdvisor from "@/components/inicio/ComentarioTripAdvisor";
import ComentarioGoogle from "@/components/inicio/ComentarioGoogle";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (lang === "es") {
    return {
      title: "Risun Peru Travel - Agencia de viajes en Perú",
      description: "Agencia de viajes en Perú: tours personalizados a Cusco, Machu Picchu, Lago Titicaca y Amazonía con cultura andina auténtica.",
      keywords: ["Perú", "Cusco", "Valle Sagrado", "Camino Inca", "Machu Picchu", "Turismo vivencial", "Lago Titicaca", "Amazonía", "agencia de viajes", "tours personalizados"],
      openGraph: {
        title: "Risun Peru Travel - Agencia de viajes en Perú",
        description: "Viajes únicos en Perú: Cusco, Machu Picchu, Lago Titicaca y Amazonía con cultura auténtica.",
        url: "https://www.risunperutravel.com",
        siteName: "Risun Peru Travel",
        images: [
          {
            url: "https://www.risunperutravel.com/inicio/terres-des-incas.webp",
            width: 1200,
            height: 630,
            alt: "Risun Peru Travel - Viajes en Perú"
          }
        ],
        locale: "es_PE",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Risun Peru Travel - Agencia de viajes en Perú",
        description: "Descubre Perú con tours personalizados: Cusco, Machu Picchu, Lago Titicaca y Amazonía.",
        images: ["https://www.risunperutravel.com/inicio/terres-des-incas.webp"],
      },
    };
  }

  if (lang === "en") {
    return {
      title: "Risun Peru Travel - Travel Agency in Peru",
      description: "Travel agency in Peru: customized tours to Cusco, Machu Picchu, Lake Titicaca and the Amazon with authentic Andean culture.",
      keywords: ["Peru", "Cusco", "Machu Picchu", "Lake Titicaca", "Amazon", "travel agency", "custom tours"],
      openGraph: {
        title: "Risun Peru Travel - Travel Agency in Peru",
        description: "Unique trips in Peru: Cusco, Machu Picchu, Lake Titicaca and the Amazon with authentic culture.",
        url: "https://www.risunperutravel.com",
        siteName: "Risun Peru Travel",
        images: [
          {
            url: "https://www.risunperutravel.com/inicio/terres-des-incas.webp",
            width: 1200,
            height: 630,
            alt: "Risun Peru Travel - Travel in Peru"
          }
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Risun Peru Travel - Travel Agency in Peru",
        description: "Discover Peru with customized tours: Cusco, Machu Picchu, Lake Titicaca and the Amazon.",
        images: ["https://www.risunperutravel.com/inicio/terres-des-incas.webp"],
      },
    };
  }
 

  return {
    title: "Risun Peru Travel",
    description: "Discover Peru with personalized tours: Cusco, Machu Picchu, Lake Titicaca and the Amazon.",
  };
}



export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const jsonLdHome = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://risunperutravel.com/#organization",
        "name": "Risun Peru Travel",
        "url": "https://risunperutravel.com/",
        "logo": "https://risunperutravel.com/logitpo.png",
        "image": "https://risunperutravel.com/inicio/machupicchu-terresdesinca.jpg",
        "description": "Agencia de viajes especialista en tours a Machu Picchu, Camino Inca y experiencias auténticas en Cusco, Perú.",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Urb. San Miguel II, San Sebastián ",
          "addressLocality": "Cusco",
          "addressRegion": "Cusco",
          "postalCode": "08004",
          "addressCountry": "PE"
        },
        "telephone": "+51 927 466 911",
        "email": "info@risunperutravel.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/turismoterres",
          "https://www.instagram.com/terresdesinca",
          "https://www.tripadvisor.com.pe/Attraction_Review-g294314-d17761305-Reviews-Turismo_Terres-Cusco_Cusco_Region.html",
          "https://www.tiktok.com/@risunperutravel"
        ]
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <div className="font-sans w-full">
        <Portada dict={dict.Body} lang={lang} />
        <BannerEmpresa dict={dict.Body} />
        <Divider />
        <GaleriaHorizontal dict={dict.filantropia} body={dict.Body} lang={lang} />
        <Divider />
        <ImperdiblesCusco dict={dict.Body} lang={lang} />
        <Divider />
        <Traking dict={dict.Body} lang={lang} />
        <Divider />
        <ComentarioTripAdvisor dict={dict.Body} />
        <ComentarioGoogle dict={dict.Body} />
        <Divider />
        <LoMejorDePeru dict={dict.Body} lang={lang} />
        <Divider />
        {/* <Vivencial dict={dict.Body} lang={lang} /> */}
        
      </div>
    </>
  );
}
export const revalidate = 3600;

import React from "react";
import Image from "next/image";
import CardPrecio from "@/components/CardPrecio";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalVideo from "@/components/ModalVideo";
import { redirect } from "next/dist/server/api-utils";
import InformacionFlotante from "@/components/InformacionFlotante";
import TabTourSimple from "@/components/TabTourSimple";
import CarruselTours from "@/components/CarruselTours";
import { getDictionary } from "@/app/dictionaries/getDictionary";
import Divider from "@/components/Divider";
import { notFound } from "next/navigation";
import Diagrama from "@/components/Diagrama";

export const revalidate = 300;
//Construsccion de medatesdcripciones para SEO
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug, lang } = params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://terresdesincas.com";
  const imgStorage = process.env.NEXT_PUBLIC_URL;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/metadata.php?slug=${slug}`,
    );
    if (!res.ok) return { title: "Risun Peru Travel" };
    const tour = await res.json();
    if (!tour) {
      return {
        title: "Risun Peru Travel | Agencia de Viajes en Cusco",
      };
    }
    const canonical = `${baseUrl}/${lang}/${tour.tipo}/${slug}`;
    const imagenUrl = tour.imagen_portada.startsWith("http")
      ? tour.imagen_portada
      : `${imgStorage}${tour.imagen_portada}`;
    return {
      metadataBase: new URL(baseUrl),
      title: `${tour.nombre}`,
      description: tour.frase_seo,
      alternates: {
        canonical: canonical,
      },
      openGraph: {
        title: tour.nombre,
        description: tour.frase_seo,
        url: canonical,
        siteName: "Risun Peru Travel",
        locale: lang === "fr" ? "fr_FR" : "es_PE",
        images: [
          {
            url: imagenUrl,
            width: 1200,
            height: 630,
            alt: `Tour ${tour.nombre} - Risun Peru Travel`,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: tour.nombre,
        description: tour.frase_seo,
        images: [imagenUrl],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return { title: "Risun Peru Travel" };
  }
}

const page = async ({ params }) => {
  const { slug, lang } = await params;
  //traermos los textos de el idioma
  const diccionario = await getDictionary(lang);
  const dict = diccionario.Tour;

  //traemos los datos del tour por slug(url)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/tour.php?slug=${slug}`,
  );
  const tour = await res.json();
  if (!tour) {
    notFound();
  }
  //traermos 10 tours aleatorios en el idioma lang
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  //construccion de la estructura de datos para la pagina
  const urlImagenes = process.env.NEXT_PUBLIC_URL;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://terresdesincas.com";
  const precio = parseFloat(tour.precio_enganche).toFixed(2);
  const duracion = `P${parseInt(tour.duracion) || 1}D`;

  const imagenAbsoluta = tour.imagen_portada.startsWith("http")
    ? tour.imagen_portada
    : `${urlImagenes}${tour.imagen_portada}`;

  const faqEntities =
    tour.preguntas?.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })) || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: `${tour.nombre}`,
        description: tour.frase_seo,
        image: imagenAbsoluta,
        brand: {
          "@type": "Brand",
          name: "Risun Peru Travel",
        },

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: tour.rating || "5",
          reviewCount: tour.reviews_total || "34",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: precio,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${baseUrl}/${lang}/${tour.tipo}/${tour.slug}`,
          priceValidUntil: "2026-12-31",
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: 0,
              currency: "USD",
            },
            shippingDestination: [
              {
                "@type": "DefinedRegion",
                addressCountry: "PE",
              },
            ],
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY",
              },
            },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "PE",
            returnPolicyCategory:
              "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 60,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
        },
        hasPart: {
          "@type": "TouristTrip",
          name: tour.nombre,
          description: tour.frase_seo,
          touristType: tour.tipo,
          duration: duracion,
          areaServed: {
            "@type": "Country",
            name: "Peru",
          },
        },
      },
      ...(faqEntities.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqEntities,
            },
          ]
        : []),
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "es" ? "Inicio" : "Accueil",
        item: `https://terresdesincas.com/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tour.tipo,
        item: `https://terresdesincas.com/${lang}/${tour.tipo}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.nombre,
        item: `https://terresdesincas.com/${lang}/${tour.tipo}/${tour.slug}`,
      },
    ],
  };

  const lista = [lang, tour.tipo, tour.nombre];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <header className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden group">
        <Image
          src={`${urlImagenes}${tour.imagen_portada}`}
          alt={tour.nombre}
          priority
          fill
          sizes="(max-width: 768px) 100vh, 100vw"
          className="object-cover md:transition-transform md:duration-10000 md:group-hover:scale-105"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* TEXTO */}
        <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-extrabold text-white
        leading-tight
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
        text-balance
        translate-y-2
      "
            >
              {tour.nombre || "Tour..."}
            </h1>
          </div>
        </div>
      </header>

      <InformacionFlotante
        allPrecios={tour.precio}
        departamento={tour.departamento}
        duracion={tour.duracion}
        picos={tour.picos}
        dificultad={tour.dificultad}
        dict={dict.flotanteHorizontal}
      />
      <main className="w-full mt-[3vh]">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <article className="md:col-span-2 flex flex-col justify-center">
            <Breadcrumbs data={lista} />
            <div className="md:col-span-1 mt-5 md:hidden flex-col">
              <CardPrecio
                titulo={tour.nombre}
                tours={tours}
                dict={dict}
                lang={lang}
                precio_enganche={tour.precio_enganche}
              />
            </div>
            <section>
              <h2 className="text-sky-700 text-2xl font-bold">
                {dict.cuerpo.descripcion}:
              </h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: tour.descripcion }}
              />
            </section>
            <TabTourSimple
              itinerario={tour.itinerario}
              incluye={tour.incluye}
              no_incluye={tour.no_incluye}
              recomendaciones={tour.recomendaciones}
              mapa={tour.mapa}
              galeria={tour.galeria}
              dict={dict.cuerpo}
              url={urlImagenes}
              preguntas={tour.preguntas}
            />
            <Divider />
            <Diagrama
              lang={lang}
              titulo={dict.cuerpo.responsable}
              tour={tour.nombre}
              contenido={dict.cuerpo.responsableContenido}
            />
          </article>
          <aside className="md:col-span-1 hidden md:block">
            <div className="sticky top-27 z-30 flex flex-col">
              <CardPrecio
                titulo={tour.nombre}
                tours={tours}
                dict={dict}
                lang={lang}
                precio_enganche={tour.precio_enganche}
              />
            </div>
          </aside>
          <ModalVideo
            video={tour.video}
            titulo={tour.nombre}
            dict={dict.flotanteVertical}
            lang={lang}
            documento={tour.doc_itinerario}
          />
        </div>
      </main>
      <Divider />
      <CarruselTours tours={tours} dict={dict.flotanteVertical} />
    </>
  );
};

export default page;

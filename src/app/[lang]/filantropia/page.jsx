import { getDictionary } from "@/app/dictionaries/getDictionary";
import Image from "next/image";
import { numeroWhatsapp } from "@/components/contactos/numero";
import React from "react";
import { WhatsAppIcon } from "@/icons";
import CardsTours from "@/components/CardsTours";
import { Galeria } from "@/components/Galeria";

const page = async ({ params }) => {
  const { lang } = await params;
  const diccionario = await getDictionary(lang);
  const dict = diccionario.filantropia;
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;
  const urlImagenes = process.env.NEXT_PUBLIC_BASE_URL;

  const galeria = [
    {
      id: 0,
      url: "/filantropia/AYUDA-A-LA-NINES-TERRES-DES-INCA.webp",
      nombre: "Ayuda a las niñas Risun Peru Travel",
    },
    {
      id: 1,
      url: "/filantropia/AYUDANOS-A-AYUDAR.webp",
      nombre: "Ayudanos a ayudar",
    },
    {
      id: 2,
      url: "/filantropia/AYUDANOS-A-EDUCAR.webp",
      nombre: "Ayudanos a educar",
    },
    {
      id: 3,
      url: "/filantropia/COMPARTIR-EN-NAVIDAD.webp",
      nombre: "Compartir en Navidad",
    },
    {
      id: 4,
      url: "/filantropia/CONOCIENDO-NUESTRA-CULTURA.webp",
      nombre: "Conociendo nuestra cultura",
    },
    {
      id: 5,
      url: "/filantropia/LLEVANDO-ALEGRIA.webp",
      nombre: "Llevando alegría",
    },
    {
      id: 6,
      url: "/filantropia/MEJORANDO-VIDAS.webp",
      nombre: "Mejorando vidas",
    },
    {
      id: 7,
      url: "/filantropia/NAVIDAD-DE-LO-NINOS.webp",
      nombre: "Navidad de lo niños",
    },
    {
      id: 8,
      url: "/filantropia/POR-MAS-NINOS-FELICES.webp",
      nombre: "Por mas niños felices",
    },
    {
      id: 9,
      url: "/filantropia/POR-UNA-MEJOR-NAVIDAD.webp",
      nombre: "Por una mejor Navidad",
    },
    {
      id: 10,
      url: "/filantropia/SOLIDARIDAD-TERRES-DES-INCAS-20.webp",
      nombre: "Solidaridad Risun Peru Travel 20",
    },
    {
      id: 11,
      url: "/filantropia/SOLIDARIDAD-TERRES-DES-INCAS-202.webp",
      nombre: "Solidaridad Risun Peru Travel 202",
    },
    {
      id: 12,
      url: "/filantropia/SOLIDARIDAD-TERRES-DES-INCAS-CON.webp",
      nombre: "Solidaridad Risun Peru Travel con",
    },
    {
      id: 13,
      url: "/filantropia/SOLIDARIDAD-TERRES-DES-INCAS.webp",
      nombre: "Solidaridad Risun Peru Travel",
    },
    {
      id: 14,
      url: "/filantropia/SOLIDARIOS-CON-TERRES-DES-INCAS.webp",
      nombre: "Solidarios con Risun Peru Travel",
    },
  ];
  return (
    <>
      <div className="relative w-full h-[80vh] overflow-hidden group">
        <Image
          src={"/filantropia/filantropia.webp"}
          alt="Risun Peru Travel - filantropia"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        {/* <div className="absolute inset-0 z-20 flex items-center ml-2 md:ml-10">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md drop-shadow-gray-950 ">
                        <span className="relative inline-block">
                            {dict.titulo}
                            <span
                                className="absolute left-0 bottom-0 h-1 w-4/5
                            bg-linear-to-r from-teal-900 via-teal-400 to-teal-50
                            rounded-full"/>
                        </span>
                    </h1>
                </div> */}
      </div>
      <div className="w-full mt-5">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <div className="md:col-span-2 flex flex-col mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              {dict.titulo}
            </h1>
            <div className="grid gap-2">
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p1 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p2 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p3 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p4 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p5 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p6 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p7 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p8 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p9 }}
              />
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 "
                dangerouslySetInnerHTML={{ __html: dict.p10 }}
              />
            </div>
            <Galeria galeria={galeria} url={urlImagenes} />
            <div className="flex gap-2 items-center justify-center">
              <Image
                src="/logotipo.png"
                width={330}
                height={100}
                className="width:auto brightness-0 "
                loading="lazy"
                alt="Risun Peru Travel"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-27 z-30 flex flex-col">
              <a
                href={`https://wa.me/${numeroWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gap-2 flex bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition justify-center"
              >
                <WhatsAppIcon />
                {dictTour.flotanteVertical.whatsapp}
              </a>
              <div className="mt-5">
                <CardsTours tours={tours} dict={dictTour.flotanteVertical} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

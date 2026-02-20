import { getDictionary } from "@/app/dictionaries/getDictionary";
import Image from "next/image";
import React from "react";
import { numeroWhatsapp } from "@/components/contactos/numero";
import CardsTours from "@/components/CardsTours";
import { getCards } from "@/lib/getById";
import { WhatsAppIcon } from "@/icons";

const page = async ({ params }) => {
  const { lang } = await params;
  const diccionario = await getDictionary(lang);
  const dict = diccionario.PoliticaDeCancelacion;
  //const tours = await getCards(lang);
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;
  return (
    <>
      <div className="relative w-full h-[80vh] overflow-hidden group">
        <Image
          src={"/inicio/politica-de-cancelacion.webp"}
          alt="Inca Trail"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 z-20 flex items-center ml-2 md:ml-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md drop-shadow-gray-950 text-center">
            <span className="relative inline-block">
              {dict.nombre}
              <span
                className="absolute left-0 bottom-0 h-1 w-4/5
                    bg-linear-to-r from-red-900 via-red-400 to-red-50
                    rounded-full"
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <div className="md:col-span-2 flex flex-col mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              {dict.nombre}
            </h1>
            <div className="grid gap-5">
              <div
                className="prose max-w-none text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: dict.contenido }}
              />
              <div className="flex gap-2 items-center justify-center">
                <h2 className="text-lg font-semibold italic ">
                  {dict.fraseFinal}
                </h2>
              </div>
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

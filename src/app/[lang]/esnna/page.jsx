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
  const dict = diccionario.Esnna;
  //const tours = await getCards(lang);
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;

  const card = [
    {
      bg: "bg-[#8F0D24]",
      img: "/inicio/2.png",
      title: dict.esnnaContenido5,
      desc: dict.esnnaContenido6,
    },
    {
      bg: "bg-[#F7B500]",
      img: "/inicio/3.png",
      title: dict.esnnaContenido7,
      desc: dict.esnnaContenido8,
    },
    {
      bg: "bg-[#8F0D24]",
      img: "/inicio/4.png",
      title: dict.esnnaContenido9,
      desc: dict.esnnaContenido10,
    },
  ];
  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/inicio/codigo_esnna.jpg"
          alt="Inca Trail"
          priority
          fill
          className="object-cover"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Texto centrado */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            {dict.nombre}
          </h1>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <div className="md:col-span-2 flex flex-col mb-8">
            <p className="text-xl md:text-4xl font-bold mb-4">{dict.esnna}</p>
            <p
              className="text-xl md:text-lg font-bold mb-4 "
              dangerouslySetInnerHTML={{ __html: dict.esnnaContenido }}
            ></p>

            {/* BLOQUE ESNNA 2 COLUMNAS */}
            <div className="mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* IZQUIERDA - IMÁGENES */}
                <div className="flex justify-center">
                  <div className="grid gap-6">
                    <img
                      src="/inicio/NINOS_ESNNA.png"
                      alt="Niños ESNNA"
                      className="w-[250px] sm:w-[280px] object-contain"
                      loading="lazy"
                    />
                    <img
                      src="/inicio/esnna-1.png"
                      alt="Campaña ESNNA"
                      className="w-[250px] sm:w-[280px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* DERECHA - TEXTO */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#A30923] mb-4">
                    {dict.esnnaContenido2}
                  </h3>

                  <p
                    className="text-base leading-relaxed text-gray-800 mb-3"
                    dangerouslySetInnerHTML={{ __html: dict.esnnaContenido3 }}
                  />

                  <p
                    className="text-base leading-relaxed text-gray-800 mb-5"
                    dangerouslySetInnerHTML={{ __html: dict.esnnaContenido4 }}
                  />

                  <ul className="list-disc pl-6 space-y-3 text-base text-gray-800">
                    <li className="marker:text-[#A30923]">
                      {dict.esnnaContenido41}
                    </li>
                    <li className="marker:text-[#A30923]">
                      {dict.esnnaContenido42}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  cards esnna */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {card.map((cards, i) => (
                  <div
                    key={i}
                    className="rounded-3xl bg-white shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100"
                  >
                    {/* top color + img */}
                    <div
                      className={`${cards.bg} h-56 flex items-center justify-center`}
                    >
                      <img
                        src={cards.img}
                        alt={cards.title}
                        className="w-70 h-70 object-contain drop-shadow-md"
                        loading="lazy"
                      />
                    </div>

                    {/* content */}
                    <div className="p-6">
                      <h3 className="text-sm font-extrabold text-gray-900 leading-tight">
                        {cards.title}
                      </h3>
                      <p className="mt-4 text-gray-700 leading-relaxed text-base text-sm">
                        {cards.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* parte final */}
            <div className="mt-6 w-full bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                  {/* IZQUIERDA - IMAGEN TELÉFONO */}
                  <div className="flex justify-center md:justify-start">
                    <img
                      src="/inicio/esnna_2.png" // 👈 tu imagen
                      alt="Línea 1818"
                      className="w-[260px] object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* CENTRO - LOGO LINEA 100 */}
                  <div className="flex justify-center">
                    <img
                      src="/inicio/esnna_3.png" // 👈 tu imagen
                      alt="Línea 100"
                      className="w-[280px] object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* DERECHA - TEXTO */}
                  <div className="text-center md:text-left">
                    <p className="text-blue-500 font-bold leading-relaxed mb-2">
                      {dict.esnnaContenido11}
                    </p>
                    <p className="text-blue-500 font-bold leading-relaxed mb-2">
                      {dict.esnnaContenido12}
                    </p>
                    <p className="text-blue-500 font-bold leading-relaxed">
                      {dict.esnnaContenido13}
                    </p>
                    <p className="text-blue-500 font-bold leading-relaxed">
                      {dict.esnnaContenido14}
                    </p>
                  </div>
                </div>
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

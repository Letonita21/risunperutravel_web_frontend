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
  const dict = diccionario.TerminosYCondiciones;
  //const tours = await getCards(lang);
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;
  const reservaciones = [
    {
      nombre: "Nombre Completo",
      nroPasaporte: "Número de Pasaporte.",
      nacionalidad: "Nacionalidad.",
      edad: "Edad.",
      sexo: "Sexo.",
    },
    {
      nombre: "Número de Pasaporte",
    },
    {
      nombre: "Nacionalidad",
    },
    {
      nombre: "Edad",
    },
    {
      nombre: "Sexo",
    },
  ];
  const pago = [
    {
      label: "Nombre Completo.",
      value: "ABRAHAN SINCHI PUMA.",
    },
    {
      label: "DNI (ID).",
      value: "74975005",
    },
    {
      label: "Dirección.",
      value: "AV. JR LIBERTAD 1848-B\nCUSCO – PERÚ. 1234",
    },
    {
      label: "Código Postal.",
      value: "08002",
    },
  ];
  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/inicio/terminosCondiciones.webp"
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
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              {dict.nombre}
            </h2>
            {/* para reservaciones */}
            <div className="grid gap-5">
              <div
                className="prose max-w-none text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.contenido }}
              />

              <div className="flex gap-2 ">
                <h2 className="text-2xl font-bold text-[#a30923]  drop-shadow-xs drop-shadow-gray-950">
                  {dict.reservaciones}
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.reservacionesCont }}
              ></p>
              <div className="mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {reservaciones.map((txt, i) => (
                    <div
                      key={i}
                      className="border-2 border-dashed border-gray-400 px-4 py-3 text-center font-semibold text-black-800 bg-white"
                    >
                      {/* valor */}
                      <p className="text-black-700 font-semibold leading-relaxed whitespace-pre-line">
                        {txt.nombre}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* para pagos */}
            <div className="grid gap-5 mt-4">
              <div className="flex gap-2 ">
                <h2 className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                  {dict.pago}
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont }}
              ></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pago.map((item, i) => (
                  <div
                    key={i}
                    className="border-2 border-dashed border-gray-400 px-4 py-4 text-center bg-white"
                  >
                    {/* título */}
                    <h4 className="font-bold text-gray-900 uppercase text-sm mb-2">
                      {item.label}
                    </h4>

                    {/* valor */}
                    <p className="text-gray-700 font-semibold leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont2 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont3 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont4 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont5 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont6 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont7 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.pagoCont8 }}
              ></p>
            </div>
            {/* para anulaciones */}
            <div className="grid gap-5 mt-4">
              <div className="flex gap-2 ">
                <h2 className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                  {dict.anulacion}
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont1 }}
              ></p>

              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont2 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont3 }}
              ></p>
              <p
                className="text-lg leading-relaxed ] "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont4 }}
              ></p>
              <p
                className="text-lg leading-relaxed text-[#ffbf00] font-semibold"
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont5 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont6 }}
              ></p>
              <p
                className="text-lg leading-relaxed text-[#ffbf00] font-semibold"
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont5 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont8 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont9 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont10 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont11 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.anulacionCont12 }}
              ></p>
            </div>
            {/* para politica de privacidad */}
            <div className="grid gap-5 mt-4">
              <div className="flex gap-2 ">
                <h2 className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                  {dict.politicas}
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont1 }}
              ></p>

              <p className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                {dict.politicas}
              </p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont2 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont3 }}
              ></p>
              <p
                className="text-lg leading-relaxed text-[#ffbf00] font-semibold"
                dangerouslySetInnerHTML={{ __html: dict.politicasCont4 }}
              ></p>

              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont5 }}
              ></p>
              <p
                className="text-lg leading-relaxed text-[#047B3E] font-semibold"
                dangerouslySetInnerHTML={{ __html: dict.politicasCont6 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont7 }}
              ></p>
              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont8 }}
              ></p>
              <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
                <li dangerouslySetInnerHTML={{ __html: dict.politicasCont9 }} />
                <li
                  dangerouslySetInnerHTML={{ __html: dict.politicasCont910 }}
                />
                <li
                  dangerouslySetInnerHTML={{ __html: dict.politicasCont911 }}
                />
                <li
                  dangerouslySetInnerHTML={{ __html: dict.politicasCont912 }}
                />
              </ul>

              <p
                className="text-lg leading-relaxed "
                dangerouslySetInnerHTML={{ __html: dict.politicasCont10 }}
              ></p>
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

import { getDictionary } from "@/app/dictionaries/getDictionary";
import Image from "next/image";
import React from "react";
import { numeroWhatsapp } from "@/components/contactos/numero";
import CardsTours from "@/components/CardsTours";
import { EyesIcon, WhatsAppIcon, ShipIcon } from "@/icons";
import CardEquipo from "@/components/menu/CardEquipo";
const page = async ({ params }) => {
  const { lang } = await params;
  const diccionario = await getDictionary(lang);
  const dict = diccionario.Nosotros;
  //const tours = await getCards(lang);
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;
  const urlImagenes = process.env.NEXT_PUBLIC_BASE_URL;

  const equipoOperacionesVentas = [
    {
      nombre: "Ubaldina Sinchi",
      rol: "Área de ventas",
      imagen: "/equipo/equipo1.jpg",
    },
    {
      nombre: "Lourdes Ccoycosi",
      rol: "Ejecutiva en Ventas",
      imagen: "/equipo/equipo2.jpg",
    },
    {
      nombre: "Abraham Sinchi",
      rol: "Operaciones y reservas",
      imagen: "/equipo/equipo3.jpg",
    },
  ];
  const equipoGuias = [
    {
      nombre: "Carlos Quispe",
      rol: "Guía",
      imagen: "",
    },
    {
      nombre: "María Huamán",
      rol: "Guía de Aventura",
      imagen: "",
    },
    {
      nombre: "José Condori",
      rol: "Guía",
      imagen: "",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/inicio/nosotros_risun.jpg"
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
      {/* contenido sobre nosotros */}
      <div className="w-full mt-5">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <div className="md:col-span-2 flex flex-col mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              {dict.pregunta}
            </h1>
            <div className="grid gap-5">
              <div
                className="prose max-w-none text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: dict.contenido }}
              />
              {/* mision y vision */}
              <div className="w-full py-2 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
                  {/* Misión */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center hover:shadow-xl transition">
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center">
                        <EyesIcon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Misión</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.misionRisun}
                    </p>
                  </div>
                  {/* Visión */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center hover:shadow-xl transition">
                    <div className="flex justify-center mb-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center">
                          <ShipIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Visión</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.visionRisun}
                    </p>
                  </div>
                </div>
              </div>
              {/* NUESTRO EQUIPO */}
              <div className="max-w-7xl mx-auto px-4 text-center">
                {/* título */}
                <h2 className="text-3xl font-bold text-black-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
                  NUESTRO EQUIPO
                </h2>
                <div className="w-32 h-1 bg-[#A30923] mx-auto mt-4" />
              </div>
              {/* EQUIPO DE OPERACIONES Y VENTAS */}
              <div className="w-full py-2 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  {/* título */}
                  <h3 className="text-xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                    {dict.operacionesyventas}
                  </h3>
                  {/* grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipoOperacionesVentas.map((item, i) => (
                      <CardEquipo
                        key={i}
                        nombre={item.nombre}
                        rol={item.rol}
                        imagen={item.imagen}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* EQUIPO DE GUIAS */}
              <div className="w-full py-2 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  {/* título */}
                  <h3 className="text-xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
                    {dict.guias}
                  </h3>

                  {/* grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipoGuias.map((item, i) => (
                      <CardEquipo
                        key={i}
                        nombre={item.nombre}
                        rol={item.rol}
                        imagen={item.imagen}
                      />
                    ))}
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

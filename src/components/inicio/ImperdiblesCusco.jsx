import { Fragment } from "react";
import React from "react";
import { Transition } from "@headlessui/react";
import Cardrisun from "../menu/Cardrisun";
import { getImperdibles } from "@/lib/infoPortada";

const ImperdiblesCusco = async ({ dict, lang }) => {
  const ids = [
    dict.imperdibles.machupicchu.id,
    dict.imperdibles.colores.id,
    dict.imperdibles.salineras.id,
    dict.imperdibles.valleSagrado.id,
    dict.imperdibles.cityTour.id,
    dict.imperdibles.sieteLagunas.id,
  ];
  //const imperdibles = await getImperdibles(ids);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/portada/inperdibles.php?ids=${ids.join(",")}`,
  );
  const imperdibles = await res.json();

  const dataInit = [
    {
      title: "",
      description: dict.imperdibles.machupicchu.descripcion,
      price: "",
      image: "/imperdibles/foto-machupicchu.jpg",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.machupicchu.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.imperdibles.colores.descripcion,
      price: "",
      image: "/imperdibles/montana-de-colores.webp",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.colores.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.imperdibles.salineras.descripcion,
      price: "",
      image: "/imperdibles/maras.webp",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.salineras.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.imperdibles.valleSagrado.descripcion,
      price: "",
      image: "/imperdibles/valle-sagrado-incas.webp",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.valleSagrado.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.imperdibles.cityTour.descripcion,
      price: "",
      image: "/imperdibles/citytour-cusco.webp",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.cityTour.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.imperdibles.sieteLagunas.descripcion,
      price: "",
      image: "/imperdibles/7-lagunas-de-ausangate.webp",
      picos: 0,
      zapatos: 0,
      id: dict.imperdibles.sieteLagunas.id,
      slug: "",
      tipo: "",
    },
  ];

  const cards = dataInit.map((data) => {
    const match = imperdibles.find((item) => item.id === data.id);
    return match
      ? {
          ...data,
          title: match.title || match.nombre || "",
          price: match.precio_enganche || match.precio || "",
          picos: match.picos || 0,
          zapatos: match.dificultad || 0,
          slug: match.slug || "",
          tipo: match.tipo || "",
        }
      : data;
  });

  return (
    <section className="py-5 px-4 md:px-8 lg:px-16  justify-items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-green-700">
        Estas listo para tu siguiente aventura ?
      </h2>
      <h3 className="text-3xl font-bold text-black-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
        {dict.nombreImperdibles}
      </h3>
      <div className="w-44 h-1 bg-[#a30923] mt-3 mb-8 rounded-full" />
      <div className="w-5/6 sm:3/4 m-5 text-md xl:text-lg">
        <div
          className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6 justify-items-center"
          dangerouslySetInnerHTML={{ __html: dict.descripcionImperdibles }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Transition
            as="div"
            show={true}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            key={index}
          >
            <div key={index}>
              <Cardrisun
                image={card.image}
                price={`${dict.desde}: $${card.price}`}
                duration={`${dict.duracion}: ${dict.dia1}`}
                title={card.title}
                picos={card.picos}
                zapatos={card.zapatos}
                description={card.description}
                masDetalles={dict.masDetalles}
                id={card.id}
                lang={lang}
                slug={card.slug}
                tipo={card.tipo}
                color="green"
              />
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
};

export default ImperdiblesCusco;

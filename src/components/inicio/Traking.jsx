import { Fragment } from "react";
import React from "react";
import { Transition } from "@headlessui/react";
import Card from "../Card";
import { getCaminatas } from "@/lib/infoPortada";

const Traking = async ({ dict, lang }) => {
  const ids = [
    dict.caminatas.salkantay.id,
    dict.caminatas.caminoInca.id,
    dict.caminatas.choquequirao.id,
    dict.caminatas.huchuyQosqo.id,
    dict.caminatas.ausangate.id,
    dict.caminatas.lares.id,
  ];

  //const caminatas = await getCaminatas(ids);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/portada/caminatas.php?ids=${ids.join(",")}`,
  );
  const caminatas = await res.json();
  const dataInit = [
    {
      title: "",
      description: dict.caminatas.salkantay.descripcion,
      price: "",
      image: "/caminatas/salkantay2.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.salkantay.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.caminatas.caminoInca.descripcion,
      price: "",
      image: "/caminatas/camino-inca.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.caminoInca.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.caminatas.choquequirao.descripcion,
      price: "",
      image: "/caminatas/choquequirao.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.choquequirao.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.caminatas.huchuyQosqo.descripcion,
      price: "",
      image: "/caminatas/huchuyqosqo.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.huchuyQosqo.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.caminatas.ausangate.descripcion,
      price: "",
      image: "/caminatas/ausangate.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.ausangate.id,
      slug: "",
      tipo: "",
    },
    {
      title: "",
      description: dict.caminatas.lares.descripcion,
      price: "",
      image: "/caminatas/lares.webp",
      picos: 0,
      zapatos: 0,
      id: dict.caminatas.lares.id,
      slug: "",
      tipo: "",
    },
  ];

  const cards = dataInit.map((data) => {
    const match = caminatas.find((item) => item.id === data.id);
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
    <section className="py-5 px-4 md:px-8 lg:px-16  justify-items-center bg-white-900">
      <h2 className="text-3xl font-bold text-green-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
        {dict.nombreCaminatas}
      </h2>

      <div className="w-44 h-1 bg-[#a30923] mt-3 mb-8 rounded-full" />
      <div className="w-5/6 sm:3/4 m-5 text-md xl:text-lg">
        <div
          className="prose max-w-none text-black text-lg leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: dict.descripcionCaminatas }}
        />
      </div>
      <div
        className="
    max-w-7xl mx-auto
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-10 lg:gap-15
    justify-items-center
  "
      >
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
              <Card
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
export default Traking;

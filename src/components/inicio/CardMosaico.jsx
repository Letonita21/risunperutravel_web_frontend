"use client";
import { useState, useEffect } from "react";
import { HandRightIcon, LugarIcon } from "@/icons";
import Link from "next/link";

const CardMosaico = ({ dict, images, lang }) => {
  const [selected, setSelected] = useState(images[0] || null);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setSelected((prev) => {
        const currentIndex = images.findIndex((img) => img.id === prev?.id);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [images]);

  if (!selected) return null;
  return (
    <section className="w-full  px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
          La aventura te espera
        </p>
        <h2 className="text-4xl font-bold text-green-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
          Lo mejor de nuestro Perú
        </h2>
        <div className="w-44 h-1 bg-[#a30923]  mb-3 rounded-full" />
        <div className="my-5 text-md xl:text-lg">
          <div
            className="prose max-w-none text-shadow-amber-600 text-lg leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: dict.descripcionMejorPeru }}
          />
        </div>

        {/* GALERÍA: DETALLE + MOSAICO */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* IZQUIERDA: SELECCIONADO (DETALLES) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-[520px] object-cover transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/70 text-white px-4 py-3 rounded-xl">
                <h3 className="text-2xl font-semibold">{selected.title}</h3>

                <p className="mt-1 flex items-center gap-2 text-lg font-semibold">
                  <LugarIcon /> {selected.departamento}
                </p>

                <Link
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-white text-black hover:bg-[#A30923] rounded-lg font-semibold text-sm shadow"
                  href={`/${lang}/${selected.tipo}/${selected.slug}`}
                >
                  <HandRightIcon color={"#000000"} /> {dict.masDetalles}
                </Link>
              </div>
            </div>
          </div>

          {/* DERECHA: MOSAICO ORDENADO */}
          <div className="lg:col-span-4">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 max-h-[520px] overflow-y-auto pr-1
                    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelected(img)}
                  className={`group relative rounded-xl overflow-hidden border-2 transition
            ${selected.id === img.id ? "border-amber-500 shadow-lg" : "border-transparent hover:border-amber-400"}
          `}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-28 sm:h-32 lg:h-36 object-cover grayscale group-hover:grayscale-0 transition duration-200"
                    loading="lazy"
                  />

                  {/* mini caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-black/55 text-white text-xs px-2 py-1">
                    <p className="truncate">{img.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardMosaico;

"use client";
import { useState, useEffect } from "react";
import { HandRightIcon, LugarIcon } from "@/icons";
import Link from "next/link";

const CardMejorPeru = ({ dict, images, lang }) => {
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
    <section className="w-full py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-amber-600 drop-shadow-xs drop-shadow-gray-950">
          {dict.tituloMejorPeru}
        </h2>
        <div className="my-5 text-md xl:text-lg">
          <div
            className="prose max-w-none text-shadow-amber-600 text-lg leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: dict.descripcionMejorPeru }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full h-[550px] object-cover transition duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
              <h3 className="flex text-2xl font-semibold"> {selected.title}</h3>
              <h3 className="flex items-center gap-1 text-lg font-semibold">
                <LugarIcon /> {selected.departamento}
              </h3>
              <Link
                className="flex gap-2 mt-3 px-4 py-2 bg-white text-black hover:bg-yellow-500 rounded-lg font-semibold text-sm shadow"
                href={`/${lang}/${selected.tipo}/${selected.slug}`}
              >
                <HandRightIcon color={"#000000"} /> {dict.masDetalles}
              </Link>
            </div>
          </div>

          <div className="flex md:flex-col gap-4 max-h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelected(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition shrink-0
                                ${
                                  selected.id === img.id
                                    ? "border-blue-500 shadow-md"
                                    : "border-transparent"
                                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardMejorPeru;

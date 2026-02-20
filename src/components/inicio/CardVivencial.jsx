"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { HandRightIcon, LugarIcon, ClockIcon } from "@/icons";
import Link from "next/link";

const CardVivencial = ({ dict, lang, slides }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid w-full bg-emerald-950 pb-10">
      <h2 className="text-3xl m-10 font-bold text-orange-400 mb-4 drop-shadow-sm drop-shadow-gray-800 text-center">
        {dict.vivencialTitulo}
      </h2>
      <div className="text-sm  md:text-xl mx-10 text-white mb-4 drop-shadow-sm drop-shadow-gray-800 text-center">
        <div
          className="prose max-w-none text-white text-lg leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: dict.vivencialDescripcion }}
        />
      </div>
      <section className="relative w-full h-[725px] overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-7xl h-full">
          {slides.map((slide, index) => (
            <Transition
              as="div"
              key={index}
              show={index === current}
              enter="transition transform duration-1000"
              enterFrom="translate-y-full opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition transform duration-1000"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-full opacity-0"
              className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-yellow-50 flex flex-col justify-center p-1 md:p-10 text-center">
                <h2 className="text-teal-950 text-xl md:text-4xl font-bold mb-1 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-900 mb-2 text-left line-clamp-2">
                  {slide.descripcion}
                </p>
                <Link
                  className="flex text-sm text-blue-800 mb-2 gap-1 font-bold text-left"
                  href={slide.ubicacion}
                  target="_blank"
                  rel="noopener"
                >
                  <LugarIcon color={"#oklch(42.4% 0.199 265.638)"} />{" "}
                  {slide.lugar}
                </Link>
                <p className="flex text-sm text-gray-900 mb-2 gap-1">
                  <ClockIcon color={"#000000"} /> {slide.duracion}
                </p>
                <p className="text-gray-900 text-xs md:text-sm text-left">
                  Actividades:
                </p>
                <ul className="list-disc ml-8 text-left">
                  {slide.actividades.map((obj, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-900">
                      {obj}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    className="flex gap-2 mt-3 px-4 py-2 bg-teal-900 text-white hover:bg-yellow-500 rounded-lg font-semibold text-sm shadow"
                    href={`/${lang}/${slide.tipo}/${slide.slug}`}
                  >
                    <HandRightIcon /> {dict.masDetalles}
                  </Link>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                current === index
                  ? "bg-orange-400 border-orange-400 scale-110"
                  : "bg-white border-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardVivencial;

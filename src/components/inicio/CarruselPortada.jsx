"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  StarInternoIcon,
  TripAdvisorIcon,
  GorGoogleIcon,
  GroupIcon,
  TravelIcon,
  ReserIcon,
  HelpIcon,
} from "@/icons";
import { numeroWhatsapp } from "../contactos/numero";
import { HandRightIcon } from "@/icons";
const message = "Hi!, Risun Peru Travel...";

const CarruselPortada = ({ portadaHome, dict, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portadaHome.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const url = process.env.NEXT_PUBLIC_URL;
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `100%`,
        }}
      >
        {portadaHome.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-screen shrink-0 overflow-hidden"
          >
            <div className="relative w-full h-[98vh] ">
              <Image
                src={`${url}${src.ruta}`}
                alt={src.nombre}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vh, 100vw"
                className={`object-cover transition-transform duration-10000 ease-out ${
                  idx === currentIndex ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            {/*logo y panel de información*/}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center ml-2 md:ml-10 text-white px-4 ">
              <span className="flex items-center space-x-2">
                <Image
                  src="/risun_logo2.png"
                  width={500}
                  height={80}
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 300px, 500px"
                  className="drop-shadow-xs drop-shadow-blue-100 w-[230px] sm:w-[300px] lg:w-[500px] h-auto object-contain"
                  priority
                  fetchPriority="high"
                  alt="risun peru travel agencia de cusco"
                />
              </span>
              {/* Panel de información */}
              <div className="mt-5 w-[95%] md:w-3/4 lg:w-2/3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* 1) Operador */}
                  <div className="rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg px-4 py-3 flex items-center justify-center gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center justify-center gap-2">
                        <div className="rounded-xl bg-black/5 p-2">
                          <GroupIcon className="w-7 h-7" />
                        </div>
                      </div>
                      <p className="mt-2 text-2xl md:text-xl font-extrabold text-gray-700 leading-none">
                        {dict.operador}
                      </p>
                    </div>
                  </div>

                  {/* 2) Operaciones + estrellas */}
                  <div className="rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg px-4 py-3 ">
                    <div className="n flex items-center justify-center">
                      <div className="rounded-xl bg-black/5 p-2">
                        <div className="flex items-center gap-0.5 ">
                          {[...Array(5)].map((_, i) => (
                            <StarInternoIcon
                              key={i}
                              className="w-7 h-7 text-[#fff]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
                      +1000
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-gray-700">
                      Operaciones
                    </p>
                  </div>

                  {/* 3) Medida */}
                  <div className="rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg px-4 py-3 flex items-center justify-center gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center justify-center gap-2">
                        <div className="rounded-xl bg-black/5 p-2">
                          <TravelIcon className="w-7 h-7" />
                        </div>
                      </div>
                      <p className="mt-2 text-2xl md:text-xl font-extrabold text-gray-700 leading-none">
                        {dict.medida}
                      </p>
                      <p className="mt-2 text-2xl md:text-xl font-extrabold text-gray-900 leading-none">
                        ------------------
                      </p>
                    </div>
                  </div>

                  {/* 4) Opiniones */}
                  <a
                    href="#opiniones"
                    className="rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg px-4 py-3 no-underline hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className="rounded-xl bg-black/5 p-2">
                        <TripAdvisorIcon className="w-7 h-7" />
                      </div>
                      <div className="rounded-xl bg-black/5 p-2">
                        <GorGoogleIcon className="w-7 h-7" />
                      </div>
                    </div>

                    <p className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
                      4.9+
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-gray-600">
                      {dict.opiniones}
                    </p>
                  </a>
                </div>

                {/* Fila inferior (acciones) */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {/* Filantropía */}
                  <a
                    href="#filantropia"
                    className="rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg px-4 py-3 no-underline hover:shadow-md transition flex items-center justify-center gap-3"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-xl bg-black/5 p-2">
                      <HelpIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-extrabold text-gray-900 leading-none">
                        {dict.ayuda}
                      </p>
                      <p className="text-xs md:text-sm font-semibold text-gray-600">
                        Filantropía
                      </p>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-[#047B3E] hover:bg-green-800 transition text-white px-4 py-3 no-underline flex items-center justify-center gap-3"
                  >
                    <div className="rounded-xl bg-white/10 p-2">
                      <ReserIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-extrabold leading-none">
                        {dict.reserva}
                      </p>
                      <p className="text-xs md:text-sm font-semibold text-white/80">
                        WhatsApp
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              {/* Fin panel info */}
            </div>

            {idx === currentIndex && (
              <div className="w-full mx-1 absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-center space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-xl drop-shadow-gray-950 tracking-wide">
                  {src.nombre}
                </h2>
                <Link
                  href={`/${lang}/${src.tipo}/${src.slug}`}
                  className="flex gap-2 px-6 py-2 mt-3 bg-white/90 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all"
                >
                  <HandRightIcon color="#000" /> {dict.verMas}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselPortada;

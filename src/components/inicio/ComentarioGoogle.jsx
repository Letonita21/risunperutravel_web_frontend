"use client";

import { useState } from "react";
import { StarIcon, ComentarioIcon, GoogleIcon } from "@/icons";
import Image from "next/image";

const testimonials = [
  {
    name: "Emmanuel Vera",
    date: "Hace un año",
    text: "¡Increíble experiencia con esta agencia de turismo en Cusco! Las Montañas de Colores fue mágico. Todo estuvo bien organizado, y los guías eran excelentes. Sin duda, un viaje inolvidable. ¡Gracias por todo!",
    calificacion: 5,
  },
  {
    name: "Maricarmen Aclla Cuba Follana",
    date: "Hace un año",
    text: `¡Acabo de regresar de unas vacaciones increíbles organizadas por esta agencia de viajes y no puedo dejar de elogiar su excelente servicio! Desde la planificación hasta la ejecución, cada detalle fue atendido con profesionalismo y atención personalizada. Muy agradecida por todo`,
    calificacion: 5,
  },
  {
    name: "Maria Eugenia Vargas Contreras",
    date: "Hace un año",
    text: `Exelente experiencia. La empresa muy responsable, con esmero para solucionar imprevistos propios de un viaje de este tipo. Muy agradecida`,
    calificacion: 5,
  },
  {
    name: "Brenda Leguizamón",
    date: "Hace un año",
    text: `Estuvo hermosa la visita a líneas de nazca y la atención fue excelente con ganas de volverrrr✨`,
    calificacion: 5,
  },
  {
    name: "Santi Souto",
    date: "Hace un año",
    text: `we loved going to valle sagrado and Montana arcoiris, highly recommend`,
    calificacion: 5,
  },
  {
    name: "Bernadetter Reymond",
    date: "Hace un año",
    text: `Pasamos dos semanas en Perú. Jimmy fue nuestro guía. Gracias a él, descubrimos lugares hermosos y gente maravillosa. Apreciamos su constante buen humor, siempre preocupado por el bienestar de todos. Gracias a él, tenemos una visión más precisa del país, desde una perspectiva política, económica y social.
Recomendamos su agencia de viajes sin dudarlo; pueden ir con los ojos cerrados.`,
    calificacion: 5,
  },
  {
    name: "nicole PISSIDONI",
    date: "Hace un año",
    text: `Viaje a Perú en abril de 2022. Jimmy Ortiz es un guía excelente y amable, cercano a sus viajeros, con un profundo conocimiento de su país y de su francés. Muy competente en su trabajo. Recomiendo a Jimmy; tengo excelentes recuerdos de este viaje.`,
    calificacion: 5,
  },
  {
    name: `Nicole d'Auriol`,
    date: "Hace un año",
    text: `Tuvimos un viaje de ensueño a Perú con nuestro guía Jimmy Ortiz. Recorrimos el interior del país con una interacción extraordinaria con la gente local. Los destinos fueron bien elegidos y el ritmo fue perfecto. Planeamos hacer otro viaje con él.`,
    calificacion: 5,
  },
  {
    name: "Jean-Luc BOYER",
    date: "Hace un año",
    text: `Estuve muy satisfecho con el servicio, la atención fue perfecta y pude descubrir Perú excepcionalmente bien. Jean-Luc`,
    calificacion: 5,
  },
  {
    name: "Manon Caudron",
    date: "Hace un año",
    text: `¡Jimmy es el mejor! Súper amable, siempre dispuesto a ayudar. Su pasión por la historia local es contagiosa y sabe compartirla con mucho cariño. ¡Lo recomiendo al 100%, una verdadera joya!`,
    calificacion: 5,
  },
  {
    name: "Odile Ruissias",
    date: "Hace un año",
    text: `¡Viaje inolvidable con un gran apoyo!  El país es magnífico y lo disfruté aún más en compañía de Jimmy, nuestro guía súper profesional, competente, ingenioso con todas nuestras solicitudes y... ¡súper amable!`,
    calificacion: 5,
  },
  {
    name: "Line LUBIN",
    date: "Hace un año",
    text: `Muy linda estancia, grandes encuentros, una estancia inolvidable que recomiendo a todos. Muy buena guía que te hace amar el Perú, atento y muy amable, un grande 👍🏼 para Jimmy…`,
    calificacion: 5,
  },
  {
    name: "Chantal Durand",
    date: "Hace un año",
    text: `Un viaje inolvidable; paisajes impresionantes; compartiendo con la población en pueblos muy acogedores.`,
    calificacion: 5,
  },
  {
    name: "Laure Moulin",
    date: "Hace un año",
    text: `De très bons moments partagés avec notre guide jimmy : ponctuel, cultivé ,à  l écoute de nos envies .
Je vous le recommande`,
    calificacion: 5,
  },
  {
    name: "Denis Chatain",
    date: "Hace un año",
    text: `Guide très sympathique. Explications intéressantes et bien documentées. Bonne organisation de la logistique. Je recommande chaudement`,
    calificacion: 5,
  },
  {
    name: "Nicole Gianni",
    date: "Hace un año",
    text: `Jimmy est tres professionnel, avec beaucoup de gentillesse et d empathie`,
    calificacion: 5,
  },
  {
    name: "Janine Marty",
    date: "Hace un año",
    text: `Un pays magnifique et un guide au top🙏
Tout et réuni pour un excellent voyage…`,
    calificacion: 5,
  },
  {
    name: "Guillemette N.",
    date: "Hace un año",
    text: `Agence de voyage sérieuse. Guides super, j'ai adoré l'itinéraire merci pour tout !!`,
    calificacion: 5,
  },
  {
    name: "Edith NONNAFOUX",
    date: "Hace un año",
    text: `Très beau voyage qui restera inoubliable avec un guide au top.`,
    calificacion: 5,
  },
  {
    name: "Liz Wendy Fernández Truyenque",
    date: "Hace un año",
    text: `EExtraordinário`,
    calificacion: 5,
  },
  {
    name: "breton bergot",
    date: "Hace un 4 semanas",
    text: `Agence de voyage sérieuse. Guides super, j'ai adoré l'itinéraire merci pour tout !!`,
    calificacion: 5,
  },
];

const ComentarioGoogle = ({ dict }) => {
  const [stopScroll, setStopScroll] = useState(false);
  return (
    <>
      <style>{`
                .marquee-left {
                    animation: izquierdaScroll linear infinite;
                }

                @keyframes izquierdaScroll {
                    0% {
                        transform: translateX(-50%);
                    }

                    100% {
                        transform: translateX(0%);
                    }
                }
            `}</style>
      <section className="pt-5 pb-10 px-4 md:px-8 lg:px-16 justify-items-center">
        <Image
          src="/google-reviews.png"
          width={350}
          height={80}
          alt="Trip Advisor logo"
        />
        <button className="flex gap-2 mb-3 px-10 py-2 bg-[#A30923] text-white hover:bg-yellow-500 rounded-lg font-semibold text-sm shadow">
          <ComentarioIcon /> {dict.verMas}
        </button>
        <div
          className="overflow-hidden w-full relative max-w-full md:max-w-10/12 mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-5 md:w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div
            className="marquee-left w-fit flex"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: testimonials.length * 6000 + "ms",
            }}
          >
            <div className="flex gap-5">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="block w-80 md:w-96  bg-[#F6E2CF] rounded-lg p-3 border-4 h-50 border-l-blue-800 border-t-red-800 border-r-amber-400 border-b-green-700  drop-shadow-xl drop-shadow-gray-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                      {/* Si tienes avatar real, usa <Image/> o <img src={item.avatar} /> */}
                      <GoogleIcon size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-900 leading-tight">
                          {item.name}
                        </h4>

                        {/* Check verificado */}
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                          >
                            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.4z" />
                          </svg>
                        </span>
                      </div>

                      <p className="text-xs text-gray-500">{item.date}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(item.calificacion)].map((_, i) => (
                          <StarIcon key={i} color="#F4B400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Texto */}
                  <p className="mt-3 text-sm text-gray-800 leading-relaxed line-clamp-3">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-5 md:w-20 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
        </div>
      </section>
    </>
  );
};

export default ComentarioGoogle;

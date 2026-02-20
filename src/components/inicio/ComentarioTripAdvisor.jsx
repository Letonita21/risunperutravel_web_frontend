"use client";
import { StarIcon, ComentarioIcon } from "@/icons";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "albert t",
    date: "ago. de 2025",
    titulo: "La mejor experiencia",
    text: "Excelente atención desde el primer momento. El equipo de TERRESDESINCAS se encargó de cada detalle y mi viaje fue perfecto. Muy recomendados por su profesionalismo, amabilidad y capacidad de resolver cualquier duda. ¡Sin duda volveré a viajar con ustedes!",
    calificacion: 5,
  },
  {
    name: "remmeryf",
    date: "jul. de 2019 • Solitario",
    titulo: "Une découverte du Pérou au top avec Jimmy",
    text: `J’ai passé 15 jours en la compagnie de Jimmy et de 9 autres voyageurs sur sur parcours mêlant trekking et visites des sites incontournables de ce magnifique pays.
Jimmy a été un excellant guide dans toutes les situations : à l'écoute des envies / capacités / limites du groupe sur la rando, Intarissable d’explications et de détails sur les sites visités et un parfait animateur / fédérateur du groupe.
Mieux qu’un guide, un parfait compagnon d’aventure... Merci encore Jimmy!!!
Fabien`,
    calificacion: 5,
  },
  {
    name: "Zouf B",
    date: "jul. de 2019 • Solitario",
    titulo: "Excellent !!",
    text: `Un voyage plein de surprises, un guide captivant avec lequel nous avons parcouru l'histoire (Et les chemins) Incas. Il connaît les bonnes adresses, les sentiers détournés à l'écart des touristes et les subtilités de ce beau pays. A faire !! :-)`,
    calificacion: 5,
  },
  {
    name: "Companion287461",
    date: "jul. de 2019 • Solitario",
    titulo: "Voyage de Rêve au Pérou",
    text: `Nous avons eu l’occasion de faire un voyage de rêve au Pérou grâce l’agence Terre des Incas. Il s’agissait d’un circuit d’aventure avec différents aspects :
- sportif avec des marches en altitude,
-ethnologique avec immersion dans la culture péruvienne,
-historique avec la découverte de la civilisation Inca.
Notre Guide Jimmy était exceptionnel, passionné de civilisation Inca avec un niveau étendu de connaissances, possédant une excellente maîtrise de la langue française et une très bonne approche des problèmes liés à l’altitude et à la préparation et adaptation des participants, toujours attentif aux besoins, problèmes et limites de chacun.`,
    calificacion: 5,
  },
  {
    name: "jlbaric",
    date: "jul. de 2019 • Solitario",
    titulo: "Voyage de Rêve au Pérou",
    text: `Nous avons eu l’occasion de faire un voyage de rêve au Pérou grâce l’agence Terre des Incas. Il s’agissait d’un circuit d’aventure avec différents aspects :
- sportif avec des marches en altitude,
-ethnologique avec immersion dans la culture péruvienne,
-historique avec la découverte de la civilisation Inca.
Notre Guide Jimmy était exceptionnel, passionné de civilisation Inca avec un niveau étendu de connaissances, possédant une excellente maîtrise de la langue française et une très bonne approche des problèmes liés à l’altitude et à la préparation et adaptation des participants, toujours attentif aux besoins, problèmes et limites de chacun.`,
    calificacion: 5,
  },
  {
    name: "Marianne S",
    date: "may. de 2019 • Amigos",
    titulo: "Mon voyage au Pérou est inoubliable",
    text: `Ce voyage s'est très bien passé car notre guide Jimmy a su parfaitement bien préparer tout le monde à l'altitude. Tout était bien géré et nous avons fait de belles rencontres.
Grâce à ses compétences , sa maitrise parfaite du français et son enthousiasme, nous avons découvert cette époustouflante civilisation inca.`,
    calificacion: 5,
  },
  {
    name: "Yves",
    date: "ago. de 2018 • Familia",
    titulo: "Mon voyage au Pérou est inoubliable",
    text: `J’ai eu l’occasion d’effectuer un trek avec mon fils de 18 ans dans la région du Lares au Pérou. C’était tout simplement magnifique. Notre guide, Jimmy, était génial. Serviable, attentif et compétent, il a su nous transmettre sa passion pour son pays et ses habitants. Merci !
Ps : voyage effectué en avril 2017 et non en août 2018`,
    calificacion: 5,
  },
  {
    name: "aude o",
    date: "ago. de 2018 • Familia",
    titulo: "Mon voyage au Pérou est inoubliable",
    text: `Une équipe dynamique et professionnelle. L'organisation est sans faille. Ajoutez un accompagnateur qui parle couramment français : tout y est pour passer de merveilleux moments
Nous avons fait du raft et une sortie à cheval en toute confiance.
A recommander`,
    calificacion: 5,
  },
];

const ComentarioTripAdvisor = ({ dict }) => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
      <section
        id="opiniones"
        className="pt-5 pb-5 px-4 md:px-8 lg:px-16 justify-items-center"
      >
        <h2 className="text-2xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
          OPINIONES
        </h2>
        <h3 className="text-3xl font-bold text-black-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
          {dict.tripAdvisorComentarios}
        </h3>
        <div className="w-44 h-1 bg-[#a30923] mt-3 mb-8 rounded-full" />

        <Image
          src="/trip-advisor-log.png"
          width={350}
          height={80}
          alt="Trip Advisor logo"
        />
        <a
          href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d32896514-Reviews-Risun_Peru_Travel-Cusco_Cusco_Region.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 mb-3 px-10 py-2 bg-green-700 text-white hover:bg-[#ffbf00] rounded-lg font-semibold text-sm shadow transition-all duration-300"
        >
          <ComentarioIcon /> {dict.verMas}
        </a>
        <div
          className="overflow-hidden w-full relative max-w-full md:max-w-10/12 mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-5 md:w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div
            className="marquee-inner w-fit flex"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: testimonials.length * 6000 + "ms",
            }}
          >
            {/*  carrusel */}
            {/* Carrusel de testimonios */}
            <div className="flex gap-8 overflow-x-auto py-8 px-2 scrollbar-hide">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div key={index} className="shrink-0">
                  {/* Card burbuja */}
                  <div
                    className="
          relative
          w-80 md:w-96
          bg-white
          rounded-3xl
          px-6 pt-6 pb-10
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        "
                  >
                    {/* Comillas */}
                    <div className="absolute -top-4 left-6 text-6xl text-gray-300 leading-none">
                      “
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="/tripadvisor.svg"
                        alt="Tripadvisor"
                        className="w-10 h-10 rounded-full bg-green-300 p-1"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.titulo}</p>
                        <p className="text-sm text-gray-500">
                          <strong>{item.date}</strong>
                        </p>
                      </div>
                    </div>

                    {/* Estrellas */}
                    <div className="flex items-center gap-2 my-2">
                      {/* Círculos verdes (rating) */}
                      {[...Array(item.calificacion)].map((_, i) => (
                        <span
                          key={i}
                          className="
        w-4 h-4
        rounded-full
        border-2 border-emerald-500
        flex items-center justify-center
      "
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </span>
                      ))}

                      {/* Check azul verificado */}
                      <span
                        className="
      w-4 h-4
      rounded-full
      bg-sky-500
      flex items-center justify-center
      drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]
    "
                      >
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

                    {/* Texto */}
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                      {item.text}
                    </p>

                    {/* Cola de la burbuja */}
                    <div
                      className="
            absolute -bottom-4 left-10
            w-0 h-0
            border-l-[14px] border-l-transparent
            border-r-[14px] border-r-transparent
            border-t-[16px] border-t-white
            drop-shadow-[0_6px_6px_rgba(0,0,0,0.15)]
          "
                    />
                    {/* Avatar flotante */}
                    <div className="absolute -right-4 -bottom-4">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <img
                          src="/tripadvisor.svg"
                          alt="Tripadvisor"
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>
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

export default ComentarioTripAdvisor;

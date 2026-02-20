"use client";
import Link from "next/link";
import { ClockIcon, HandRightIcon, ShoeIcon, MountainIcon } from "@/icons";

const colorMap = {
  // Color corporativo
  brandRed: {
    badge: "bg-[#A30923]",
    btn: "bg-[#A30923] hover:bg-[#7F071C]",
  },
};

const Card = ({
  image,
  price,
  duration,
  title,
  masDetalles,
  picos,
  zapatos,
  color = "red",
  lang,
  slug,
  tipo,
}) => {
  const c = colorMap[color] ?? colorMap.brandRed;

  return (
    <div className="w-[320px]">
      {/* Círculo */}
      <div
        className="
    relative w-[320px] h-[320px]
    rounded-full overflow-hidden
    shadow-[0_15px_35px_rgba(0,0,0,0.35)]
    hover:shadow-[0_25px_55px_rgba(0,0,0,0.55)]
    transition-shadow duration-500
    group cursor-pointer
  "
      >
        {/* Imagen */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            w-full h-full object-cover rounded-full
            group-hover:scale-110 transition duration-500
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Precio */}
        <div
          className={`absolute top-6 left-1/2 -translate-x-1/2 ${c.badge} text-white
          px-4 py-1 rounded-full text-sm font-semibold shadow`}
        >
          {price}
        </div>

        {/* Info centrada */}
        <div className="absolute bottom-12 w-full px-4 text-center text-white  space-y-2">
          <div className="flex justify-center items-center gap-3 text-sm font-medium ">
            <span className="flex items-center gap-1 ">
              <ShoeIcon className="w-5 h-5" /> {zapatos}
            </span>
            <span className="opacity-70">•</span>
            <span className="flex items-center gap-1">
              <MountainIcon className="w-5 h-5" /> {picos}
            </span>
          </div>

          <div className="flex justify-center items-center gap-1 text-sm font-medium">
            <ClockIcon className="w-5 h-5" />
            {duration}
          </div>
        </div>
        {/* Botón centrado pequeño (mismo vibe que info) */}
        <div
          className="
            absolute bottom-5 left-1/2 -translate-x-1/2
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
          "
        >
          <Link
            href={`/${lang}/${tipo}/${slug}`}
            className={`
              inline-flex items-center gap-2
              ${c.btn} text-white
              px-3 py-1.5 rounded-full
              text-xs font-semibold shadow
            `}
          >
            <HandRightIcon className="w-4 h-4" />
            {masDetalles}
          </Link>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-green-600 mt-6 drop-shadow-xs drop-shadow-gray-950 text-center">
        {title}
      </h3>
      <div className="w-44 h-1 bg-[#a30923] mt-3 mb-8 rounded-full mx-auto" />
    </div>
  );
};

export default Card;

"use client";
import { useState } from "react";
import Link from "next/link";
import { ClockIcon, HandRightIcon, ShoeIcon, MountainIcon } from "@/icons";

const Cardrisun = ({
  image,
  price,
  duration,
  title,
  description,
  masDetalles,
  picos,
  zapatos,
  color,
  id,
  lang,
  slug,
  tipo,
}) => {
  return (
    <div
      className="
      w-full max-w-sm
      bg-white
      rounded-3xl
      border border-gray-100
      hover:shadow-2xl hover:-translate-y-1
      transition-all duration-300
      shadow-[0_20px_60px_rgba(97,37,5,0.35)]
    "
    >
      {/* Imagen con padding */}
      <div className="p-3">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-2xl hover:scale-105 transition duration-500"
          />

          {/* Badge */}
          <span className="absolute bottom-3 left-3 bg-[#A30923] text-white px-3 py-1 text-xs rounded-full font-semibold shadow">
            {title}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="px-5 pb-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 text-center">
          {title}
        </h3>

        <div className="flex justify-center items-center gap-4 text-sm text-black">
          <p className="flex gap-1 text-lg items-center font-bold opacity-90 drop-shadow-sm drop-shadow-gray-800 text-center">
            {zapatos} <ShoeIcon /> | {picos} <MountainIcon /> |
          </p>
          <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800">
            <ClockIcon /> {duration}
          </p>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-2xl font-bold text-gray-900">{price}</p>
          </div>

          <Link
            href={`/${lang}/${tipo}/${slug}`}
            className="
              bg-[#A30923]
              hover:bg-red-800
              text-white
              px-4 py-2
              rounded-full
              font-semibold
              text-sm
              shadow-md
              transition
            "
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardrisun;

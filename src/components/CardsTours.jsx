"use client";
import React, { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { ClockIcon, HandRightIcon, LugarIcon, ShoeIcon, MountainIcon } from '@/icons';

const CardsTours = ({ tours, dict }) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (tours.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tours.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [tours]);

  const url = process.env.NEXT_PUBLIC_URL;

  return (
    <div className="hidden md:grid w-full mb-5">
      <section className="pl-3 relative w-full h-[450px] overflow-hidden flex items-center justify-center">
        <div className="relative w-full  h-full">
          {tours.map((tour, index) => (
            <Transition
              as="div"
              key={index}
              show={index === current}
              enter="transition transform duration-2000"
              enterFrom="translate-y-full opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition transform duration-2000"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-full opacity-0"
              className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row">

              <div
                className="relative w-full max-w-sm h-[410px] overflow-hidden shadow-lg group rounded-xl drop-shadow-md drop-shadow-gray-500"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <img
                  src={`${url}${tour.imagen_portada}`}
                  alt={tour.nombre}
                  title={tour.nombre}
                  loading='lazy'
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute top-5 left-2 bg-orange-500 text-white font-semibold px-5 py-0.5 rounded-md text-md shadow-md shadow-gray-800">
                  {dict.desde}: <p className='text-2xl font-bold drop-shadow-md -mt-2 drop-shadow-gray-600'>${tour.precio_enganche}</p>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div
                  className={`absolute left-0 w-full p-4 text-white z-10 transition-all duration-500 ${hovered ? "bottom-20" : "bottom-0"
                    }`}>
                  <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800">{tour.dificultad} <ShoeIcon /> / {tour.picos} <MountainIcon /></p>
                  <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800"><ClockIcon /> {tour.duracion} {tour.duracion > "1" ? dict.dias : dict.dia}</p>
                  <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800"><LugarIcon /> {tour.departamento}</p>
                  <h2 className="text-xl font-bold drop-shadow-sm drop-shadow-gray-800">{tour.nombre}</h2>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full p-4 text-white transform transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}>
                  <Link
                    className="cursor-pointer flex gap-2 mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-sm shadow"
                    href={`/${tour.idioma}/${tour.tipo}/${tour.slug}`}>
                    <HandRightIcon />{dict.masDetalles}
                  </Link>
                </div>
              </div>
            </Transition>
          ))}
        </div>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-3">
          {tours.map((_, index) => (
            <button
              key={index}
              aria-label={`boton cardTours ir a tarjeta${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${current === index
                ? "bg-orange-400 border-orange-400 scale-110"
                : "bg-white border-gray-400 hover:bg-gray-300"
                }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CardsTours
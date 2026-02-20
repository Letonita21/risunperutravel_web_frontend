"use client";

import React, { useEffect, useState } from "react";
import { ClockIcon, HandRightIcon, LugarIcon, ShoeIcon, MountainIcon } from "@/icons";
import { Transition } from "@headlessui/react";
import Link from "next/link";


const CarruselTours = ({ tours, dict }) => {
    const [visibleCount, setVisibleCount] = useState(1);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1280) setVisibleCount(3);
            else if (width >= 768) setVisibleCount(2);
            else setVisibleCount(1);
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);
    useEffect(() => {
        if (tours.length <= visibleCount) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + visibleCount) % tours.length);
        }, 15000);
        return () => clearInterval(interval);
    }, [tours, visibleCount]);
    const visibleTours = tours.slice(current, current + visibleCount);
    const url = process.env.NEXT_PUBLIC_URL;
    return (
        <div className="w-full flex justify-center mb-12">
            <section className="relative w-full px-4">
                <Transition
                    key={current}
                    show={true}
                    appear
                    enter="transition ease-out duration-700 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-500 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <div className="flex justify-center gap-6 ">
                        {visibleTours.map((tour, index) => (
                            <div
                                key={index}
                                className="relative w-full max-w-sm h-[410px] overflow-hidden shadow-lg group rounded-xl drop-shadow-md drop-shadow-gray-500 shrink-0">
                                <img
                                    src={`${url}${tour.imagen_portada}`}
                                    loading="lazy"
                                    alt={tour.nombre}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-10 left-2 bg-red-600 text-white font-semibold px-5 py-2 rounded-md text-md shadow-md shadow-gray-800">
                                    {dict.desde} ${tour.precio_enganche}
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="absolute left-0 w-full p-4 text-white z-10 sm:bottom-0 transition-all duration-500 bottom-10 group-hover:bottom-10">
                                    <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800">
                                        {tour.dificultad} <ShoeIcon /> / {tour.picos} <MountainIcon />
                                    </p>
                                    <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800">
                                        <ClockIcon /> {tour.duracion} {tour.duracion > "1" ? dict.dias : dict.dia}
                                    </p>
                                    <p className="flex gap-1 text-lg items-center font-semibold opacity-90 drop-shadow-sm drop-shadow-gray-800">
                                        <LugarIcon /> {tour.departamento}
                                    </p>
                                    <h3 className="text-xl font-bold drop-shadow-sm drop-shadow-gray-800">
                                        {tour.nombre}
                                    </h3>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 text-white transform transition-all duration-500 opacity-100 sm:opacity-0 group-hover:opacity-100 translate-0 group-hover:translate-y-0 sm:translate-y-5">
                                    <Link className="flex gap-2 mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-sm shadow"
                                        href={`/${tour.idioma}/${tour.tipo}/${tour.slug}`}>
                                        <HandRightIcon />{dict.masDetalles}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Transition>
                <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {Array.from({ length: Math.ceil(tours.length / visibleCount) }).map((_, index) => (
                        <button
                            key={index}
                            aria-label={`ir a pantalla ${index}`}
                            onClick={() => setCurrent(index * visibleCount)}
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${current === index * visibleCount
                                ? "bg-red-900 border-red-800 scale-110"
                                : "bg-white border-gray-400 hover:bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CarruselTours;
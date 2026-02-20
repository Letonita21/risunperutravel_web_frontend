'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { DolarIcon, GroupIcon, LugarIcon, ClockIcon, MountainIcon, ShoeIcon } from '@/icons';

const InformacionFlotante = ({ allPrecios, departamento, duracion, picos, dificultad, dict }) => {

    const [precios, setPrecios] = useState([]);
    const [precio, setPrecio] = useState("--");
    const [altura, setAltura] = useState({});
    const [intensidad, setIntensidad] = useState({});

    useEffect(() => {
        if (allPrecios != null) {
            const aux = JSON.parse(allPrecios);
            setPrecios(aux);
            setPrecio(aux[3].precio);
        }
        calcularAltura(picos);
        calcularDificultad(dificultad);
    }, [allPrecios]);

    const RANGOS_ALTURA_BARRA = {
        1: { rango: "0 - 1,500 m", nivel: "Baja", porcentaje: "20%", colorBarra: "bg-green-800", textoColor: "text-green-800" },
        2: { rango: "1,500 - 3,000 m", nivel: "Moderada", porcentaje: "40%", colorBarra: "bg-yellow-800", textoColor: "text-yellow-800" },
        3: { rango: "3,000 - 4,500 m", nivel: "Alta", porcentaje: "60%", colorBarra: "bg-orange-800", textoColor: "text-orange-800" },
        4: { rango: "4,500 - 6,000 m", nivel: "Muy Alta", porcentaje: "80%", colorBarra: "bg-red-800", textoColor: "text-red-800" },
        5: { rango: "> 6,000 m", nivel: "Extrema", porcentaje: "100%", colorBarra: "bg-orange-950", textoColor: "text-orange-950" },
        default: { rango: "Sin especificar", nivel: "---", porcentaje: "0%", colorBarra: "bg-gray-300", textoColor: "text-gray-500" }
    };

    const RANGOS_DIFICULTAD = {
        1: { nivel: dict.muyFacil, desc: "Apto para todos", porcentaje: "20%", colorBarra: "bg-teal-400", textoColor: "text-teal-800" },
        2: { nivel: dict.facil, desc: "Caminata suave", porcentaje: "40%", colorBarra: "bg-green-500", textoColor: "text-green-800" },
        3: { nivel: dict.moderado, desc: "Requiere esfuerzo", porcentaje: "60%", colorBarra: "bg-yellow-500", textoColor: "text-yellow-800" },
        4: { nivel: dict.difcil, desc: "Terreno exigente", porcentaje: "80%", colorBarra: "bg-orange-500", textoColor: "text-orange-800" },
        5: { nivel: dict.extremo, desc: "Solo expertos", porcentaje: "100%", colorBarra: "bg-red-600", textoColor: "text-red-800" },
        default: { nivel: "---", desc: "Sin especificar", porcentaje: "0%", colorBarra: "bg-gray-300", textoColor: "text-gray-500" }
    };


    const calcularAltura = (rango) => {
        setAltura(RANGOS_ALTURA_BARRA[rango])
    }

    const calcularDificultad = (rango) => {
        setIntensidad(RANGOS_DIFICULTAD[rango])
    }


    return (
        <div className="relative z-20 flex justify-center w-5/6">
            <div className="-mt-25 md:-mt-20 lg:-mt-24 w-full rounded-br-2xl rounded-tl-2xl bg-white/40 shadow-lg backdrop-blur-lg ring-1 ring-black/80">
                <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:items-center divide-y sm:divide-y-0 md:divide-x divide-gray-300">
                    <div className="flex items-center gap-1 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <DolarIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.precio}(pp):</p>
                            <p className="text-base sm:text-lg md:text-3xl drop-shadow-xs drop-shadow-green-400 font-bold uppercase tracking-wide text-black">
                                ${precio}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <GroupIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <label htmlFor="Headline">
                                <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.grupo}</p>
                                <select
                                    name="Headline"
                                    id="Headline"
                                    value={precio}
                                    className="mt-0.5 w-14 sm:w-16 font-bold rounded border-gray-300 shadow-sm text-base sm:text-lg md:text-2xl"
                                    onChange={(e) => setPrecio(e.target.value)}
                                >
                                    {precios.map((p, i) => (
                                        <option key={i} value={p.precio}>
                                            {p.cantidad}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <LugarIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.ubicacion}</p>
                            <p className="text-sm sm:text-base md:text-2xl font-bold uppercase tracking-wide text-gray-900">
                                {departamento}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <ClockIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.duracion}</p>
                            <p className="text-base sm:text-lg md:text-2xl font-bold tracking-wide text-gray-900">
                                {duracion} {duracion > "1" ? dict.dias : dict.dia}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <MountainIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.altura}({picos})</p>
                            <p className={`text-[14px] sm:text-md md:text-lg font-bold tracking-wide ${altura.textoColor}`}>
                                {altura.rango}
                            </p>
                            <div className="relative w-full">
                                <div className="w-24 sm:w-28 xl:w-34 h-2.5 bg-gray-300 rounded-full overflow-hidden inner-shadow">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${altura.colorBarra}`}
                                        style={{ width: altura.porcentaje }}>
                                        <div className="w-full h-full opacity-20 bg-white animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-700 mt-1 font-medium px-1">
                                    <span>0m</span>
                                    <span>3000m</span>
                                    <span>+6000m</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-3">
                        <span className="inline-flex items-center justify-center rounded-lg">
                            <ShoeIcon size={38} color={"#B04F00"} className="drop-shadow-xs drop-shadow-white" />
                        </span>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 -mb-1">{dict.dificultad}({dificultad})</p>
                            <p className={`text-base sm:text-lg md:text-xl font-bold tracking-wide ${intensidad.textoColor}`}>
                                {intensidad.nivel}
                            </p>
                            <div className="relative w-full group">
                                <div className="w-24 md:w-30 h-2.5 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-1 ${intensidad.colorBarra}`}
                                        style={{ width: intensidad.porcentaje }}
                                    >
                                        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
                                    </div>
                                </div>

                                {/* Escala visual abajo */}
                                <div className="flex justify-between text-[10px] text-gray-700 mt-1 font-medium px-1 select-none">
                                    <span>Relax</span>
                                    <span>Aventura</span>
                                    <span>Reto</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformacionFlotante
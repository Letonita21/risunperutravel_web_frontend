"use client";
import React from 'react'
import { DolarIcon, GroupIcon, LugarIcon, ClockIcon, MountainIcon, ShoeIcon, HandRightIcon } from '@/icons';
import Link from 'next/link';

const CardsBuscar = ({ data, dict, lang }) => {

    const url = process.env.NEXT_PUBLIC_URL;
    return (
        <div className="grid gap-4 sm:gap-6">
            {data.map((obj, i) => (
                <article
                    key={i}
                    className="flex flex-col sm:flex-row bg-white transition hover:shadow-xl border-b-4 border-b-gray-300 rounded-lg overflow-hidden">
                    <div className="hidden sm:flex sm:w-45 sm:h-full">
                        <img
                            alt={obj.nombre}
                            src={`${url}/${obj.imagen_portada}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="p-2 sm:p-1">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">
                                {obj.nombre}
                            </h3>
                            <div className="mt-1 line-clamp-3 text-sm text-gray-700">
                                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: obj.descripcion }}/>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-1 pb-2 gap-3 sm:gap-0">
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <DolarIcon size={24} color="#DE7828" />
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500">{dict.desde}</p>
                                        <p className="text-sm font-bold uppercase tracking-wide text-gray-900">
                                            ${obj.precio_enganche}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LugarIcon size={24} color="#DE7828" />
                                    <p className="text-sm font-bold uppercase tracking-wide text-gray-900">
                                        {obj.departamento}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon size={24} color="#DE7828" />
                                    <p className="text-sm font-bold tracking-wide text-gray-900">
                                        {obj.duracion} {obj.duracion > '1' ? dict.dias : dict.dia}
                                    </p>
                                </div>
                            </div>
                            <Link
                                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-semibold text-sm shadow transition"
                                href={`/${lang}/${obj.tipo}/${obj.slug}`}>
                                <HandRightIcon />
                                {dict.masDetalles}
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>

    )
}

export default CardsBuscar
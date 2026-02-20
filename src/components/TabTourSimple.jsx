'use client';
import React, { useState } from 'react'
import { MapaIcon, PhotoIcon, ClipIcon, CheckIcon, FocoIcon, PreguntasIcon, XCheckIcon } from '@/icons';
import { Galeria } from './Galeria';
import { ExpandirIcon, OcultarIcon } from '@/icons';

const TabTourSimple = ({ itinerario, incluye, recomendaciones, no_incluye, galeria, mapa, dict, url, preguntas }) => {
    const [itinerarioExpandido, setItinerarioExpandido] = useState(false);
    const [recomendacionesExpandido, setRecomendacionesExpandido] = useState(false);
    const [incluyeExpandido, setIncluyeExpandido] = useState(false);
    const [noIncluyeExpandido, setNoIncluyeExpandido] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)

    const tabs = [
        { id: 'itinerario', label: dict.itinerario, icon: <ClipIcon color="#EB6200" />, estado: itinerario != null ? true : false },
        { id: 'incluye', label: dict.incluye, icon: <CheckIcon color="#EB6200" />, estado: incluye != null ? true : false },
        { id: 'recomendaciones', label: dict.recomendaciones, icon: <FocoIcon color="#EB6200" />, estado: recomendaciones != null ? true : false },
        { id: 'galeria', label: dict.galeria, icon: <PhotoIcon color="#EB6200" />, estado: galeria.length > 0 ? true : false },
        { id: 'mapa', label: dict.mapa, icon: <MapaIcon color="#EB6200" />, estado: mapa != "" ? true : false },
        { id: 'pregunta', label: dict.pregunta, icon: <PreguntasIcon color="#EB6200" />, estado: preguntas.length > 0 ? true : false },
    ];

    return (
        <div className='mt-5'>
            <div className="sticky border-3 border-orange-500 top-22 z-30 backdrop-blur-sm shadow-xl shadow-gray-300  py-1 sm:py-3 mb-4 rounded-b-xl">
                <nav className="flex justify-center flex-wrap gap-2 px-0 sm:px-2 sm:gap-3">
                    {tabs.map(({ id, label, icon: Icon, estado }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`flex items-center gap-0.5 px-1 py-1 sm:px-2 sm:py-2 rounded-full border-2 ${!estado ? "hidden" : ""} border-orange-500 bg-white text-orange-700 hover:bg-orange-200 transition-all text-xs md:text-sm font-semibold `}>
                            {Icon}{label}
                        </a>
                    ))}
                </nav>
            </div>
            <section id="itinerario" className="scroll-mt-24 mb-4">
                <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><ClipIcon color="#EB6200" /> {dict.itinerario}</h2>
                <div
                    className={`relative overflow-hidden transition-all duration-500 ${itinerarioExpandido ? 'max-h-full' : 'max-h-100'
                        }`}>
                    <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: itinerario }} />

                    {!itinerarioExpandido && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>
                <button
                    onClick={() => setItinerarioExpandido(!itinerarioExpandido)}
                    aria-label='boton ampliar'
                    className="mt-2 border-2 text-green-800 font-bold text-sm hover:underline w-full rounded-2xl justify-items-center items-center "
                >
                    {itinerarioExpandido ? <div className="flex items-center gap-2 text-lg"><OcultarIcon className={'w-10 h-10'} /> {dict.verMenos}</div> : <div className="flex items-center gap-2 text-lg"><ExpandirIcon className={'w-10 h-10'} /> {dict.verMas}</div>}

                </button>
            </section>

            <section id="incluye" className="scroll-mt-24 mb-4">
                <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><CheckIcon color="#EB6200" /> {dict.incluye}</h2>
                <div
                    className={`relative overflow-hidden transition-all duration-500 ${incluyeExpandido ? 'max-h-full' : 'max-h-100'
                        }`}
                >
                    <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: incluye }} />

                    {!incluyeExpandido && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>
                <button
                    onClick={() => setIncluyeExpandido(!incluyeExpandido)}
                    aria-label='boton ampliar'
                    className="mt-2 border-2 text-green-800 font-bold text-sm hover:underline w-full rounded-2xl justify-items-center items-center "
                >
                    {incluyeExpandido ? <div className="flex items-center gap-2 text-lg"><OcultarIcon className={'w-10 h-10'} /> {dict.verMenos}</div> : <div className="flex items-center gap-2 text-lg"><ExpandirIcon className={'w-10 h-10'} /> {dict.verMas}</div>}

                </button>


                <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><XCheckIcon color="#EB6200" size={25} /> {dict.noIncluye}</h2>
                <div
                    className={`relative overflow-hidden transition-all duration-500 ${noIncluyeExpandido ? 'max-h-full' : 'max-h-100'
                        }`}
                >
                    <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: no_incluye }} />

                    {!noIncluyeExpandido && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>
                <button
                    onClick={() => setNoIncluyeExpandido(!noIncluyeExpandido)}
                    aria-label='boton ampliar'
                    className="mt-2 border-2 text-green-800 font-bold text-sm hover:underline w-full rounded-2xl justify-items-center items-center "
                >
                    {noIncluyeExpandido ? <div className="flex items-center gap-2 text-lg"><OcultarIcon className={'w-10 h-10'} /> {dict.verMenos}</div> : <div className="flex items-center gap-2 text-lg"><ExpandirIcon className={'w-10 h-10'} /> {dict.verMas}</div>}

                </button>
            </section>
            <section id="recomendaciones" className="scroll-mt-24 mb-4">
                <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><FocoIcon color="#EB6200" /> {dict.recomendaciones}</h2>
                <div
                    className={`relative overflow-hidden transition-all duration-500 ${recomendacionesExpandido ? 'max-h-full' : 'max-h-100'
                        }`}>
                    <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: recomendaciones }} />

                    {!recomendacionesExpandido && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>
                <button
                    onClick={() => setRecomendacionesExpandido(!recomendacionesExpandido)}
                    aria-label='boton ampliar'
                    className="mt-2 border-2 text-green-800 font-bold text-sm hover:underline w-full rounded-2xl justify-items-center items-center "
                >
                    {recomendacionesExpandido ? <div className="flex items-center gap-2 text-lg"><OcultarIcon className={'w-10 h-10'} /> {dict.verMenos}</div> : <div className="flex items-center gap-2 text-lg"><ExpandirIcon className={'w-10 h-10'} /> {dict.verMas}</div>}

                </button>
            </section>
            {galeria.length > 0 ?
                <section id="galeria" className="scroll-mt-24 mb-4">
                    <h3 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><PhotoIcon color="#EB6200" /> {dict.galeria}</h3>
                    <Galeria galeria={galeria} url={url} />
                </section> : <></>}
            {mapa != "" ? <section id="mapa" className="scroll-mt-24 mb-4">
                <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><MapaIcon color="#EB6200" /> {dict.mapa}</h2>
            </section> : <></>}
            {preguntas.length > 0 ? <section id="pregunta" className="scroll-mt-24 mb-4">
                <div className='w-full flex flex-col px-3'>
                    <h2 className='text-2xl font-semibold text-orange-600 flex items-center gap-0.5'><PreguntasIcon color="#EB6200" />{dict.pregunta}</h2>
                    <div className='w-full mt-6 flex flex-col gap-4 items-start text-left'>
                        {preguntas.map((faq, index) => (
                            <div key={index} className='flex flex-col items-start w-full'>
                                <div className='flex items-center justify-between w-full cursor-pointer bg-linear-to-r from-indigo-100 to-white border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    <h3 className='text-sm text-slate-800 font-semibold'>{faq.pregunta}</h3>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                        <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className={`text-sm text-slate-800 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                    {faq.respuesta}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> : <></>}
        </div>
    )
}

export default TabTourSimple;
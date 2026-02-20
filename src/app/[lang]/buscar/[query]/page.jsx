import React from 'react';
import { getBuscar } from '@/lib/buscar';
import { getDictionary } from '@/app/dictionaries/getDictionary';
import Image from 'next/image';
import CardsTours from '@/components/CardsTours';
import CarruselTours from '@/components/CarruselTours';
import { WhatsAppIcon } from '@/icons';
import Divider from '@/components/Divider';
import { numeroWhatsapp } from '@/components/contactos/numero';
import { getCards } from '@/lib/getById';
import CardsBuscar from '@/components/CardsBuscar';

export default async function Page({ params }) {
    const { lang, query } = await params;
    const decodedQuery = decodeURIComponent(query);
    //const data = await getBuscar(decodedQuery, lang);
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/buscar?texto=${decodedQuery}&lang=${lang}`)
    const data = await res.json();
    const diccionario = await getDictionary(lang);
    const dict = diccionario.Tour;
    //const tours = await getCards(lang);
    const rest = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`)
    const tours = await rest.json();
    

    return (
        <>
            <div className="relative w-full h-48 overflow-hidden group">
                <Image
                    src={`/buscador.webp`}
                    alt="andes peruanos"
                    priority
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-10000 ease-out scale-120" />
            </div>
            <div className="w-full mt-[3vh]">
                <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
                    <div className="md:col-span-2 flex flex-col">
                        <h2 className="text-lg sm:text-xl font-semibold text-green-600 ">
                            {`${dict.encontrar} ${data.length} ${dict.resultados} ${dict.para} ${decodedQuery}`}
                        </h2>
                        <CardsBuscar data={data} dict={dict.flotanteVertical} lang={lang} />
                    </div>
                    <div className="md:col-span-1">
                        <div className="sticky top-27 z-30 flex flex-col">
                            <div className="bg-white/90 rounded-xl shadow-xl p-6 ring-1 ring-black/10 mt-5">
                                <a
                                    href={`https://wa.me/${numeroWhatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full gap-2 flex bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition justify-center">
                                    <WhatsAppIcon />
                                    {dict.flotanteVertical.whatsapp}
                                </a>
                            </div>
                            <div className='mt-5'>
                                <CardsTours tours={tours} dict={dict.flotanteVertical} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <CarruselTours tours={tours} dict={dict.flotanteVertical} />
        </>
    );
}
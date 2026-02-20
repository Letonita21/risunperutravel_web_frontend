import React from 'react'
import BotonesContactosWhatsApp from './BotonesContactosWhatsApp'

const CardPrecio = ({ titulo, tours, dict, lang, precio_enganche }) => {
    return (
        <>
            <style>{`
    @keyframes latido {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); } /* Crece un 5% */
        100% { transform: scale(1); }
    }

    .latido {
        animation: latido 2s infinite ease-in-out;
    }
    
    /* Detener animación al pasar el mouse (opcional) */
    .latido:hover {
        animation: none;
        transform: scale(1.05); /* Se queda grande al hacer hover */
    }
`}</style>
            <div className="w-full flex justify-center">
                <div className="latido relative inline-block rotate-[-4deg] drop-shadow-sm drop-shadow-gray-600">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-gray-200 rounded-sm rotate-2 shadow-md"></div>
                    <div className="bg-white border-2 border-orange-500 shadow-md p-2 text-center w-[220px]">
                        <div className="flex flex-col items-center mt-1">
                            <p className="text-orange-500 text-sm font-bold">{dict.flotanteVertical.desde}:</p>
                            <p className="font-bold text-5xl text-lime-800">
                                ${precio_enganche}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BotonesContactosWhatsApp titulo={titulo} tours={tours} dict={dict.flotanteVertical} formulario={dict.formulario} lang={lang} />
        </>
    )
}

export default CardPrecio
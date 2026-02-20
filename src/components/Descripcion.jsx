'use client';
import { useState } from 'react';
import { ExpandirIcon } from '@/icons';

const Descripcion = ({ dict, descripcion, duracion, lineas = 50 }) => {
    const [expandido, setExpandido] = useState(false);
    return (
        <div>
            <div
                className={`relative overflow-hidden transition-all duration-500 ${expandido ? 'max-h-full' : 'max-h-24' /* max-h-24 define la altura cerrada */
                    }`}
            >
                <h2 className="text-sky-700 text-2xl font-bold">{dict.cuerpo.descripcion}:</h2>
                <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: descripcion }} />
                
                {!expandido && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                )}
            </div>

            <button
                onClick={() => setExpandido(!expandido)}
                className="mt-2 text-green-900 font-bold text-sm hover:underline">
                <ExpandirIcon/>{expandido ? 'Mostrar menos' : 'Seguir leyendo...'}
            </button>
        </div>
    )
}

export default Descripcion
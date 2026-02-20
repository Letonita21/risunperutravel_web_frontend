import React from 'react'

const BotonAnimado = ({ onClick, Icono }) => {
    return (
        <>
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 80% 35%;
                    filter: blur(6px);
                    background-image: linear-gradient(#0096C4,#B5005A);
                    animation: rotate 3s linear infinite;
                }
            `}</style>
            <div className="fixed bottom-6 right-5 z-50 mb-23">
                <div className="rainbow relative z-0 overflow-hidden p-1.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                    <button onClick={onClick} className="p-4 text-sm text-white rounded-full font-medium bg-white">
                        <Icono className="text-gray-700 w-10 h-10" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default BotonAnimado
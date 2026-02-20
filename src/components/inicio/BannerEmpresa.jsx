import React from "react";
import Image from "next/image";
import { FaHiking, FaShieldAlt, FaPersonBooth, FaStar } from "react-icons/fa";

const SeccionEmpresaFotoStyle = ({ dict }) => {
  const valores = [
    {
      icon: (
        <FaHiking className="text-[#a30923] w-10 h-10 mb-4" />
      ) /* guias expertos */,
      title: dict.valores1,
      description: dict.valoresDescripcioin1,
    },
    {
      icon: (
        <FaShieldAlt className="text-[#a30923] w-10 h-10 mb-4" />
      ) /* seguridad y confianza */,
      title: dict.valores2,
      description: dict.valoresDescripcioin2,
    },
    {
      icon: (
        <FaPersonBooth className="text-[#a30923] w-10 h-10 mb-4" />
      ) /* flexivilidad de resrvas*/,
      title: dict.valores3,
      description: dict.valoresDescripcioin3,
    },
    {
      icon: (
        <FaStar className="text-[#a30923] w-10 h-10 mb-4" />
      ) /* itinerarios exclusivos */,
      title: dict.valores4,
      description: dict.valoresDescripcioin4,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-5">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Text */}
          <div>
            <p className="text-sm font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
              NOSOTROS SOMOS
            </p>
            <h1 className="text-3xl font-bold text-green-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
              RISUN PERU TRAVEL
            </h1>

            <div className="w-44 h-1 bg-[#a30923] mt-3 mb-8 rounded-full" />

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <div
                className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: dict.risunDescripcion }}
              />
            </div>
          </div>

          {/* card de instagram */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(97,37,5,0.35)]">
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 pt-5">
                <div className="w-15 h-15 rounded-full bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/risun_logo2.png"
                    alt="Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-gray-800">
                    Risun Peru Travel
                  </p>
                  <p className="text-xs text-gray-500">"Agencia de Viajes"</p>
                </div>
              </div>

              {/* Card image */}
              <div className="mt-2 p-[10px] border-[10px] border-white rounded-2xl">
                <div className="relative w-full h-[380px] overflow-hidden rounded-xl">
                  <Image
                    src="/foto_risun.jpg"
                    alt="Card image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card footer */}
              <div className="px-5 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 text-xl">❤</span>
                  <p className="text-sm font-semibold text-gray-700">
                    10,597
                    <span className="font-normal text-gray-600">
                      People like this
                    </span>
                  </p>
                </div>

                <p className="text-xs text-gray-500">
                  #RisunPeruTravel #Adventure #Cusco #MachuPicchu #Travel
                  #Photography
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl p-2 items-center shadow-md shadow-gray-400"
              >
                {valor.icon}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {valor.title}
                </h3>
                <p className="text-sm text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default SeccionEmpresaFotoStyle;

import React from "react";

const CardEquipo = ({ nombre, rol, imagen }) => {
  const imagenFinal = imagen && imagen !== "" ? imagen : "/equipo/avatares.png";
  return (
    <div className="group relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition overflow-hidden">
      {/* decoraciones */}
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#A30923]/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-yellow-700/10 blur-2xl" />

      <div className="relative p-8 flex flex-col items-center text-center">
        {/* imagen */}
        <div className="relative">
          <img
            src={imagenFinal}
            alt={nombre}
            loading="lazy"
            className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-white group-hover:ring-[#047B3E]/40 transition"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-black/10" />
        </div>

        {/* nombre */}
        <h4 className="mt-6 text-xl font-bold text-gray-900">{nombre}</h4>

        {/* rol */}
        <span className="mt-3 inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-4 py-1 text-sm font-semibold">
          {rol}
        </span>

        {/* linea */}
        <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#A30923] to-transparent opacity-80" />
      </div>
    </div>
  );
};

export default CardEquipo;

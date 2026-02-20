import Image from "next/image";
import React from "react";

const Diagrama = ({ lang, titulo, tour, contenido }) => {
  return (
    <div style={{ width: "100%" }}>
      <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-0.5 mb-2">
        {titulo}
      </h2>
      <p className="text-gray-700 text-lg mb-4">{contenido}</p>
      <Image
        src={`/responsable/${lang}.webp`}
        alt="turismo responsable"
        priority
        width={1200}
        height={800}
        style={{
          width: "100%",
          height: "auto",
        }}
        className="rounded-lg drop-shadow-lg drop-shadow-gray-600"
        sizes="100vw"
      />
    </div>
  );
};

export default Diagrama;

"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { numeroWhatsapp } from "./numero";
const WidgetWhatsapp = () => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");
  const [idioma, setIdioma] = useState("");
  useEffect(() => {
    const lang = pathname.split("/")[1] || "es";
    setIdioma(lang);
    setPageTitle(document.title);
  }, [pathname]);

  const changeWhatsapp = async () => {
    const form = {
      tour: pageTitle,
      idioma: idioma,
    };
    console.log("form", form);
    try {
      const response = await fetch("/api/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (error) {
      /*  console.log("error", error); */
    }
  };
  return (
    <div>
      <a
        className="fixed z-30 flex items-center justify-center text-white bg-green-400 rounded-full drop-shadow-md drop-shadow-gray-800 right-6 bottom-10 md:botton-20 w-18 h-18 focus:outline-none ease"
        href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent('¡Hola! Vengo de la página: "Risun Peru Travel" y quiero más información de los paquetes y tours')}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp the Risun Peru Travel"
        onClick={() => changeWhatsapp()}
      >
        <FaWhatsapp size={45} />
      </a>
    </div>
  );
};
export default WidgetWhatsapp;

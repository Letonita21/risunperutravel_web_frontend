import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

const reedesSociales = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/rcperutravel",
    icono: (
      <FaFacebookF size={30} className="text-[#ffbf00] hover:text-white" />
    ),
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/risun_peru_travel/",
    icono: (
      <FaInstagram size={30} className="text-[#ffbf00] hover:text-white" />
    ),
  },
  {
    nombre: "Tripadvisor",
    enlace:
      "https://www.tripadvisor.com.pe/Attraction_Review-g294314-d32896514-Reviews-Risun_Peru_Travel-Cusco_Cusco_Region.html",
    icono: (
      <SiTripadvisor size={30} className="text-[#ffbf00] hover:text-white" />
    ),
  },
  {
    nombre: "Tiktok",
    enlace: "https://www.tiktok.com/@risunperutravel",
    icono: <FaTiktok size={30} className="text-[#ffbf00] hover:text-white" />,
  },
  {
    nombre: "Youtube",
    enlace: "https://www.youtube.com/@RISUNPERUTRAVELAGENCY",
    icono: <FaYoutube size={30} className="text-[#ffbf00] hover:text-white" />,
  },
];

const Footer = ({ dict, lang }) => {
  const servicios = [
    { nombre: "Amazonia", enlace: "" },
    { nombre: "Arequipa", enlace: "" },
    { nombre: "Cusco", enlace: "" },
    { nombre: "Lima", enlace: "" },
    { nombre: "Puno", enlace: "" },
  ];

  const terresDesIncas = [
    { nombre: dict.Nosotros, enlace: "/nosotros" },
    { nombre: dict.TerminosYCondiciones, enlace: "/terminos-y-condiciones" },
    { nombre: dict.PoliticasDePrivacidad, enlace: "/politicas-de-privacidad" },
    {
      nombre: dict.PoliticasDeCancelacion,
      enlace: "/politicas-de-cancelacion",
    },
    {
      nombre: dict.PoliticaIntegradaDeCalidad,
      enlace: "/politica-integrada-de-calidad",
    },
    { nombre: dict.CodigoEsnna, enlace: "/esnna" },
    { nombre: dict.AyudaSocial, enlace: "/filantropia" },
  ];
  const preFooter = [
    { nombre: "gercetur", dir: "/footer/gercetur.png", ruta: "" },
    { nombre: "mincetur", dir: "/footer/mincetur.png", ruta: "" },
    { nombre: "marca-peru", dir: "/footer/peru.png", ruta: "" },
    { nombre: "esnna", dir: "/footer/esnna.webp", ruta: "/esnna" },
    { nombre: "trip-advisor", dir: "/footer/tripadvisor.png", ruta: "" },
    { nombre: "get-your-guide", dir: "/footer/getyourguide.svg", ruta: "" },
    { nombre: "petetite-fute", dir: "/footer/petetite-fute.webp", ruta: "" },
    { nombre: "le-routard", dir: "/footer/le-routard.webp", ruta: "" },
  ];

  const pagos = [
    { nombre: "american expres", dir: "/pagos/american.png" },
    { nombre: "aple pay", dir: "/pagos/aple.png" },
    { nombre: "diners club", dir: "/pagos/diners.png" },
    { nombre: "google pay", dir: "/pagos/gogle.png" },
    { nombre: "master card", dir: "/pagos/mastercard.png" },
    { nombre: "plin", dir: "/pagos/plin.png" },
    { nombre: "visa", dir: "/pagos/visa.png" },
    { nombre: "yape", dir: "/pagos/yape.png" },
    { nombre: "ya", dir: "/pagos/ya.png" },
  ];
  const contactos = [
    { email: "reservas@terresdesincas.com" },
    { email: "ventas@terresdesincas.com" },
    { email: "info@terresdesincas.com" },
  ];
  return (
    <footer>
      {/* carrusel */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-6">
        {preFooter.map((item, i) => (
          <Link href={item.ruta ? `/${lang}${item.ruta}` : "#"} key={i}>
            <div className="w-12 h-12 sm:w-25 sm:h-20 flex items-center justify-center">
              <img
                src={item.dir}
                alt={item.nombre}
                title={item.nombre}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* frase con imagen */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px] px-6 md:px-16">
        {/* IZQUIERDA – TEXTO CENTRADO */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-3xl font-bold text-[#a30923] mb-2 drop-shadow-xs drop-shadow-gray-950">
            ¡Descubre la magia de Perú con nosotros!
          </p>

          <h1 className="text-5xl font-bold text-green-600 mb-4 drop-shadow-xs drop-shadow-gray-950">
            RISUN PERU TRAVEL
          </h1>
        </div>
        {/* DERECHA – IMAGEN GRANDE PEGADA */}
        <div className="flex justify-end">
          <Image
            src="/footer_risun.png"
            alt="Imagen descriptiva"
            width={900}
            height={600}
            priority
            className="w-[90%] md:w-full max-w-none object-contain"
          />
        </div>
      </div>
      <div className="w-full h-6 bg-yellow-400"></div>
      {/* seccion de contactos */}
      {/* SECCIÓN DE CONTACTOS (4 DIVISIONES) */}
      <section className="bg-[#047B3E] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* GRID 4 COLUMNAS EN DESKTOP */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* 1) BRAND / DESCRIPCIÓN / REDES */}
            <div className="space-y-4">
              <Link href={`/${lang}`} className="inline-block">
                <Image
                  src="/risun_logo2.png"
                  width={220}
                  height={80}
                  className="brightness-0 invert"
                  loading="lazy"
                  alt="Risun Peru Travel"
                  title="Risun Peru Travel"
                />
              </Link>

              <p className="text-xl text-[#ffbf00] font-bold">
                RUC: 20613703170
              </p>

              <p className="text-gray-200 leading-relaxed">
                {dict.descripcion}
              </p>

              <ul className="flex gap-6 pt-2">
                {reedesSociales.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.enlace}
                      target="_blank"
                      rel="noopener"
                      aria-label={item.nombre}
                      className="transition hover:opacity-80"
                    >
                      {item.icono}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2) SERVICIOS */}
            <div>
              <p className="text-2xl text-[#ffbf00] font-bold">
                {dict.Servicios}
              </p>
              <ul className="mt-4 space-y-2 text-lg">
                {servicios.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${lang}${item.enlace}`}
                      className="text-gray-200 transition hover:text-orange-400 hover:opacity-90"
                    >
                      {item.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3) RISUN PERU TRAVEL (LINKS) */}
            <div>
              <p className="text-2xl text-[#ffbf00] font-bold">
                Risun Peru Travel
              </p>
              <ul className="mt-4 space-y-2 text-lg">
                {terresDesIncas.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${lang}${item.enlace}`}
                      className="text-gray-200 transition hover:text-orange-400 hover:opacity-90"
                    >
                      {item.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4) PAGOS + CONTACTOS */}
            <div className="space-y-8">
              {/* Pagos */}
              <div>
                <p className="text-2xl text-[#ffbf00] font-bold">
                  {dict.pagos}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {pagos.map((item, i) => (
                    <div
                      className="w-10 h-8 flex items-center justify-center"
                      key={i}
                    >
                      <img
                        src={item.dir}
                        alt={item.nombre}
                        title={item.nombre}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contactos */}
              <div>
                <p className="text-2xl text-[#ffbf00] font-bold">
                  {dict.contactos}
                </p>
                <ul className="mt-4 space-y-2 text-lg">
                  {contactos.map((item, i) => (
                    <li key={i}>
                      <a
                        className="text-gray-200 transition hover:text-[#A30923]"
                        href={`mailto:${item.email}`}
                        target="_blank"
                        rel="noopener"
                      >
                        {item.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* LÍNEA + COPY */}
          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="text-center text-sm text-gray-100/90">
              Copy@ 2026 Risun Peru Travel, {dict.derechos}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

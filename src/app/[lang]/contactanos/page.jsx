import { getDictionary } from "@/app/dictionaries/getDictionary";
import Image from "next/image";
import React from "react";
import { numeroWhatsapp } from "@/components/contactos/numero";
import CardsTours from "@/components/CardsTours";
import { EyesIcon, WhatsAppIcon, ShipIcon } from "@/icons";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";
const page = async ({ params }) => {
  const { lang } = await params;
  const diccionario = await getDictionary(lang);
  const dict = diccionario.Contactanos;
  //const tours = await getCards(lang);
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/dataTour/cards.php?lang=${lang}`,
  );
  const tours = await rest.json();
  const dictTour = diccionario.Tour;
  const urlImagenes = process.env.NEXT_PUBLIC_BASE_URL;

  const equipoOperacionesVentas = [
    {
      nombre: "Ubaldina Sinchi",
      rol: "Área de ventas",
      imagen: "/equipo/equipo1.jpg",
    },
    {
      nombre: "Lourdes Ccoycosi",
      rol: "Ejecutiva en Ventas",
      imagen: "/equipo/equipo2.jpg",
    },
    {
      nombre: "Abraham Sinchi",
      rol: "Operaciones y reservas",
      imagen: "/equipo/equipo3.jpg",
    },
  ];
  const equipoGuias = [
    {
      nombre: "Carlos Quispe",
      rol: "Guía",
      imagen: "",
    },
    {
      nombre: "María Huamán",
      rol: "Guía de Aventura",
      imagen: "",
    },
    {
      nombre: "José Condori",
      rol: "Guía",
      imagen: "",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/inicio/contactanos_risun.jpeg"
          alt="Inca Trail"
          priority
          fill
          className="object-cover"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Texto centrado */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            {dict.titulo}
          </h1>
        </div>
      </div>
      {/* contactenos */}
      <div className="w-full mt-2">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <div className="md:col-span-2 flex flex-col mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              {dict.titulo}
            </h1>
            <div className="grid gap-5">
              <h2 className="text-xl font-bold text-[#a30923]  drop-shadow-xs drop-shadow-gray-950">
                {dict.titulo2}
              </h2>
              <div
                className="prose max-w-none text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: dict.contactenosCont }}
              />
            </div>
            {/*  redes y logo */}
            <div className="mb-2">
              <h3 className="text-xl font-bold text-[#a30923]  drop-shadow-xs drop-shadow-gray-950">
                {dict.redesTitulo}
              </h3>

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/rcperutravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#a30923] text-white flex items-center justify-center shadow-md hover:brightness-110 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF
                    size={22}
                    className="text-white hover:text-[#F4320B]"
                  />
                </a>

                <a
                  href="https://www.instagram.com/risun_peru_travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#a30923] text-white flex items-center justify-center shadow-md hover:brightness-110 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={22}
                    className="text-white hover:text-[#F4320B]"
                  />
                </a>

                <a
                  href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d32896514-Reviews-Risun_Peru_Travel-Cusco_Cusco_Region.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#a30923] text-white flex items-center justify-center shadow-md hover:brightness-110 transition"
                  aria-label="Tripadvisor"
                >
                  <SiTripadvisor
                    size={22}
                    className="text-white hover:text-[#F4320B]"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@risunperutravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#a30923] text-white flex items-center justify-center shadow-md hover:brightness-110 transition"
                  aria-label="TikTok"
                >
                  <FaTiktok
                    size={22}
                    className="text-white hover:text-[#F4320B]"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@risunperutravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#a30923] text-white flex items-center justify-center shadow-md hover:brightness-110 transition"
                  aria-label="Visiter notre chanel Youtube"
                >
                  <FaYoutube
                    size={22}
                    className="text-white hover:text-[#F4320B]"
                  />
                </a>
              </div>

              {/* Logo */}
              <div className="mt-10 flex justify-center md:justify-start">
                <img
                  src="/risun_logo2.png"
                  alt="RISUN PERU TRAVEL"
                  className="w-100 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* formulario */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="w-full rounded-2xl bg-white shadow-xl ring-1 ring-black/10 p-5">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                    {dict.formTitulo ?? "Escríbenos"}
                  </h3>

                  <form className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="text-left">
                        <span className="text-xs font-bold text-gray-800">
                          Nombre <span className="text-[#a30923]">*</span>
                        </span>
                        <input
                          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#a30923]"
                          placeholder="Nombre"
                          required
                        />
                      </label>

                      <label className="text-left">
                        <span className="text-xs font-bold text-gray-800">
                          Email <span className="text-[#a30923]">*</span>
                        </span>
                        <input
                          type="email"
                          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#a30923]"
                          placeholder="Email"
                          required
                        />
                      </label>
                    </div>

                    <label className="text-left block">
                      <span className="text-xs font-bold text-gray-800">
                        Teléfono <span className="text-[#a30923]">*</span>
                      </span>
                      <input
                        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#a30923]"
                        placeholder="+51 999 999 999"
                        required
                      />
                    </label>

                    <label className="text-left block">
                      <span className="text-xs font-bold text-gray-800">
                        Asunto (opcional)
                      </span>
                      <input
                        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#a30923]"
                        placeholder="Lugar deseado y fecha"
                      />
                    </label>

                    <label className="text-left block">
                      <span className="text-xs font-bold text-gray-800">
                        Mensaje <span className="text-[#a30923]">*</span>
                      </span>
                      <textarea
                        rows={4}
                        className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#a30923]"
                        placeholder="Escriba su mensaje"
                        required
                      />
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#a30923] py-2.5 text-white font-extrabold shadow-md hover:brightness-110 active:scale-[0.99]"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* INFO de Contactanos */}
            <section className="mt-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Col 1 */}
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                  <h4 className="text-lg font-extrabold text-gray-900">
                    {dict.contacTitulo2}
                  </h4>
                  <div className="mt-2 h-1 w-16 rounded-full bg-[#A30923]" />

                  <div className="mt-5 space-y-3 text-sm text-gray-700">
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo3}
                      </span>{" "}
                      {dict.contacTitulo4}
                    </p>
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo5}
                      </span>{" "}
                      {dict.contacTitulo6}
                    </p>

                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo7}
                      </span>{" "}
                    </p>
                    <p>
                      <span className="font-bold text-gray-900"></span>{" "}
                    </p>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                  <h4 className="text-lg font-extrabold text-gray-900">
                    {dict.contacTitulo8}
                  </h4>
                  <div className="mt-2 h-1 w-16 rounded-full bg-[#A30923]" />

                  <div className="mt-5 space-y-3 text-sm text-gray-700">
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo9}
                      </span>{" "}
                      {dict.contacTitulo10}
                    </p>

                    <div className="pt-2">
                      <a
                        href="mailto:rcperutravel@gmail.com"
                        className="inline-flex items-center justify-center rounded-full bg-[#A30923] px-4 py-2 text-xs font-extrabold text-white shadow hover:brightness-110"
                      >
                        Enviar correo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                  <h4 className="text-lg font-extrabold text-gray-900">
                    {dict.contacTitulo11}
                  </h4>
                  <div className="mt-2 h-1 w-16 rounded-full bg-[#A30923]" />

                  <div className="mt-5 space-y-3 text-sm text-gray-700">
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo12}
                      </span>{" "}
                      <a
                        className="hover:text-[#A30923]"
                        href="tel:+51955790495"
                      >
                        {dict.contacTitulo13}
                      </a>
                    </p>
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo14}
                      </span>{" "}
                      <a
                        className="hover:text-[#A30923]"
                        href="tel:+51921164809"
                      >
                        {dict.contacTitulo15}
                      </a>
                    </p>
                    <p>
                      <span className="font-bold text-gray-900">
                        {dict.contacTitulo16}
                      </span>{" "}
                      <a
                        className="hover:text-[#A30923]"
                        href="https://wa.me/51921164809"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {dict.contacTitulo17}
                      </a>
                    </p>

                    <div className="pt-2">
                      <a
                        href="https://wa.me/51921164809"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-xs font-extrabold text-white shadow hover:brightness-110"
                      >
                        WhatsApp ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* UBÍCANOS */}
            <section className="mt-14">
              {/* Título */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Ubícanos
                  </h2>
                  <span className="absolute left-1/2 -bottom-2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#A30923]" />
                </div>
              </div>

              {/* Mapa */}
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
                  <iframe
                    title="RISUN PERU TRAVEL - Google Maps"
                    src="https://www.google.com/maps?q=RISUN+PERU+TRAVEL,+Jr.+Libertad+1848-B,+Cusco&output=embed"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                </div>

                {/* Botón Google Maps */}
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=RISUN+PERU+TRAVEL+Jr+Libertad+1848-B+Cusco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#A30923] px-6 py-2.5 text-sm font-extrabold text-white shadow-md hover:brightness-110 active:scale-[0.98]"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-27 z-30 flex flex-col">
              <a
                href={`https://wa.me/${numeroWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gap-2 flex bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition justify-center"
              >
                <WhatsAppIcon />
                {dictTour.flotanteVertical.whatsapp}
              </a>
              <div className="mt-5">
                <CardsTours tours={tours} dict={dictTour.flotanteVertical} />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaTiktok, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiTripadvisor } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";
import { numeroWhatsapp } from "../contactos/numero";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IdiomaIcon } from "@/icons";
import { categoriesDict } from "@/app/dictionaries/categories";
import { UpIcon, DownIcon } from "@/icons";
import { HomeIcon } from "@/icons";
import BotonNavbar from "./BotonNavbar";
import { BuscarIcon } from "@/icons";

const MenuDinamico = ({ dict, lang, menu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubMenuMobile, setOpenSubMenuMobile] = useState(null);
  const pathname = usePathname();
  const ruta = pathname.split("/");
  const [query, setQuery] = useState("");
  const navRef = useRef(null);
  const idioma = [
    { nombre: "es", img: "/banderas/es.png" },
    { nombre: "en", img: "/banderas/en.png" },
  ];
  const auxIdioma = idioma.find((i) => i.nombre === lang) || idioma[0];
  const bandera = auxIdioma.img;

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const idiomaChange = (e) => {
    const newLang = e.target.value;
    router.push(`/${newLang}`);
  };

  const traducirNombre = (nombre, lang) => {
    const clave = nombre.trim().toLowerCase().replace(/\s+/g, "-");
    return categoriesDict[lang]?.[clave] || nombre;
  };

  const toggleMenu = (nombre) => {
    setOpenMenu(openMenu === nombre ? null : nombre);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (departamento) => {
    setOpenSubMenu(openSubMenu === departamento ? null : departamento);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenuMobile = (departamento) => {
    setOpenSubMenuMobile(
      openSubMenuMobile === departamento ? null : departamento,
    );
  };

  const CerrarMenus = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length < 3) {
      return;
    }
    const encoded = encodeURIComponent(trimmed);
    router.push(`/${lang}/buscar/${encoded}`);
    setQuery("");
  };

  return (
    <div className="fixed top-0 w-full z-60">
      <div className="w-full bg-[#047B3E]">
        <div className="container mx-auto flex justify-center sm:justify-between items-center py-2 px-4">
          <div className="gap-2 hidden sm:flex">
            <Link
              className="no-underline flex items-center text-white font-poppins hover:text-[#ffbf00]"
              href={`mailto:rcperutravel@gmail.com`}
              target="_blank"
              rel="noopener"
            >
              <IoIosMail size={22} />
              <span>rcperutravel@gmail.com</span>
            </Link>
            <Link
              className="no-underline flex items-center text-white font-poppins hover:text-[#ffbf00]"
              href={`https://wa.me/${numeroWhatsapp}`}
              target="_blank"
              rel="noopener"
            >
              <FaWhatsapp size={22} />
              <span>{numeroWhatsapp}</span>
            </Link>

            <Link
              className="no-underline flex items-center text-white font-poppins hover:text-[#ffbf00]"
              href="https://maps.google.com/?q=JR LIBERTAD 1848 B Cusco Peru"
              target="_blank"
              rel="noopener"
            >
              <FaMapMarkerAlt size={20} />
              <span className="ml-2">JR. LIBERTAD 1848 - B</span>
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/rcperutravel"
              target="_blank"
              rel="noopener"
              aria-label="Visiter notre page Facebook"
            >
              <FaFacebookF
                size={22}
                className="text-white hover:text-[#ffbf00]"
              />
            </a>
            <a
              href="https://www.instagram.com/risun_peru_travel/"
              target="_blank"
              rel="noopener"
              aria-label="Visiter notre page Instagram"
            >
              <FaInstagram
                size={22}
                className="text-white hover:text-[#ffbf00]"
              />
            </a>
            <a
              href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d32896514-Reviews-Risun_Peru_Travel-Cusco_Cusco_Region.html"
              target="_blank"
              rel="noopener"
              aria-label="Visiter notre page TripAdvisor"
            >
              <SiTripadvisor
                size={22}
                className="text-white hover:text-[#ffbf00]"
              />
            </a>
            <a
              href="https://www.tiktok.com/@risunperutravel"
              target="_blank"
              rel="noopener"
              aria-label="Visiter notre page tiktok"
            >
              <FaTiktok size={22} className="text-white hover:text-[#ffbf00]" />
            </a>
            <a
              href="https://www.youtube.com/@RISUNPERUTRAVELAGENCY"
              target="_blank"
              rel="noopener"
              aria-label="Visiter notre chanel Youtube"
            >
              <FaYoutube
                size={22}
                className="text-white hover:text-[#ffbf00]"
              />
            </a>
          </div>
        </div>
      </div>
      {!scrolled && (
        <>
          <div className="h-25 container relative flex flex-wrap items-center justify-center py-3 mx-auto lg:justify-between px-3 gap-3">
            <div className="hidden lg:flex gap-3">
              <Link href={`/${lang}/contactanos`}>
                <button className="cursor-pointer group relative h-8 items-center justify-center overflow-hidden rounded-md border border-[#047B3E] px-3 font-bold text-white bg-[#047B3E] transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px]">
                  {dict.contactenos}
                </button>
              </Link>

              <button className="cursor-pointer group relative h-8 items-center justify-center overflow-hidden rounded-md border border-[#047B3E] px-3 font-bold text-white bg-[#047B3E] transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px]">
                {dict.blog}
              </button>
            </div>

            <form onSubmit={handleBuscar} className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={dict.buscar}
                className="
    px-4 py-2 rounded-xl
    border-2 border-[#A30923]
    bg-[#A30923]/5
    text-[#A30923] font-semibold
    placeholder:text-[#A30923]/60

    focus:outline-none
    focus:ring-2 focus:ring-[#A30923]
    focus:bg-white
    focus:shadow-md focus:shadow-[#A30923]/40

    transition-all duration-200
  "
              />
              <button
                type="submit"
                aria-label="boton buscar"
                className="cursor-pointer group relative h-8 items-center justify-center overflow-hidden
               rounded-md border border-[#A30923] px-3 font-bold text-white bg-[#A30923]
               transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)]
               active:translate-x-[3px] active:translate-y-[3px]"
              >
                <BuscarIcon size={20} />
              </button>
            </form>

            <div className="hidden sm:flex gap-3">
              <Link
                href="tel:+51927466911"
                aria-label="Llamar a Risun Peru Travel"
                className="
    cursor-pointer group relative h-8 w-8 flex items-center justify-center
    overflow-hidden rounded-md
    border border-[#A30923]
    bg-[#A30923] text-white
    transition-all duration-100
    [box-shadow:5px_5px_rgb(82_82_82)]
    active:translate-x-[3px] active:translate-y-[3px]
  "
              >
                <HiPhone size={18} />
              </Link>
              <Link
                className="
    cursor-pointer group relative h-8 w-8 flex items-center justify-center
    overflow-hidden rounded-md
    border border-[#A30923]
    bg-[#A30923] text-white
    transition-all duration-100
    [box-shadow:5px_5px_rgb(82_82_82)]
    active:translate-x-[3px] active:translate-y-[3px]
  "
                href={`https://wa.me/${numeroWhatsapp}`}
                target="_blank"
                rel="noopener"
                aria-label="Envoyer un whatsapp à Risun Peru Travel"
              >
                <FaWhatsapp size={25} />
              </Link>
              <Link
                className="
    cursor-pointer group relative h-8 w-8 flex items-center justify-center
    overflow-hidden rounded-md
    border border-[#A30923]
    bg-[#A30923] text-white
    transition-all duration-100
    [box-shadow:5px_5px_rgb(82_82_82)]
    active:translate-x-[3px] active:translate-y-[3px]
  "
                href={`mailto:rcperutravel@gmail.com`}
                target="_blank"
                rel="noopener"
                aria-label="Envoyer un e-mail à Risun Peru Travel"
              >
                <MdMailOutline size={28} />
              </Link>
              <button
                className="cursor-pointer group relative h-8 items-center justify-center overflow-hidden rounded-md border border-[#047B3E] px-3 font-bold text-white bg-[#047B3E] transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px]"
                onClick={() =>
                  (window.location.href = `https://wa.me/${numeroWhatsapp}`)
                }
              >
                {dict.consulta}
              </button>
            </div>
          </div>
        </>
      )}

      <Disclosure>
        {({ open, close }) => (
          <>
            <div
              className={`
    mx-auto px-2 sm:px-6 lg:px-8 flex py-1.5 items-center justify-between
    transition-all duration-300
    ${
      scrolled
        ? "bg-white shadow-[0_6px_12px_-4px_rgba(0,0,0,0.35)]"
        : "bg-transparent border-b-2 border-[#A30923]"
    }
  `}
            >
              <div className="left-0 flex items-center lg:hidden gap-3">
                <DisclosureButton
                  className="group relative inline-flex items-center justify-center rounded-md text-white hover:bg-white/5 hover:text-yellow drop-shadow-xs drop-shadow-[#A30923]"
                  aria-label="buton menu"
                >
                  <IoMdMenu
                    aria-hidden="true"
                    className="block size-10 group-data-open:hidden"
                  />
                  <IoCloseSharp
                    aria-hidden="true"
                    className="hidden size-10 group-data-open:block"
                  />
                </DisclosureButton>
                <Link
                  href={`/${lang}`}
                  onClick={() => close()}
                  className="drop-shadow-sm drop-shadow-yellow-900 mr-3"
                  aria-label="home mobil"
                >
                  <HomeIcon size={35} />
                </Link>
              </div>
              <div className="flex w-full" ref={navRef}>
                <div className="hidden sm:ml-6 lg:flex justify-center w-full space-x-2">
                  <Link
                    href={`/${lang}`}
                    className="drop-shadow-sm drop-shadow-yellow-900 mr-3"
                    aria-label="buton Home"
                  >
                    <HomeIcon size={35} />
                  </Link>
                  <Link
                    href={`/${lang}/nosotros`}
                    className={`flex items-center font-medium justify-between px-1 py-1 text-md rounded-md ${
                      scrolled
                        ? "text-[#A30923]  border hover:bg-gray-400 hover:text-white"
                        : "border border-[#A30923]  text-[#A30923] hover:bg-orange-700 hover:text-white"
                    } ${ruta[2] == "nosotros" ? "bg-orange-500 text-white" : "bg-white"}`}
                  >
                    {dict.nosotros}
                  </Link>
                  {menu.map((cat) => (
                    <div key={cat.nombre} className="relative">
                      <button
                        onClick={() => toggleMenu(cat.nombre)}
                        className={`cursor-pointer flex items-center justify-between w-full px-1 py-1 text-md font-medium rounded-md ${
                          scrolled
                            ? "text-[#A30923] border hover:bg-gray-500 hover:text-white"
                            : "border border-[#A30923]  hover:bg-orange-700 hover:text-white"
                        } ${cat.ruta === `/${ruta[2]}` ? "bg-orange-500 text-white" : "bg-white text-[#A30923]"}`}
                      >
                        {cat.nombre}
                        {cat.items && cat.items.length > 0 && (
                          <span className="ml-1">
                            {openMenu === cat.nombre ? (
                              <UpIcon color={"text-orange-700"} size={13} />
                            ) : (
                              <DownIcon color={"text-orange-700"} size={13} />
                            )}
                          </span>
                        )}
                      </button>

                      {Array.isArray(cat.items) &&
                        cat.items.length > 0 &&
                        openMenu === cat.nombre && (
                          <ul className="absolute left-0 mt-1 w-xs xl:w-md rounded-md drop-shadow-lg drop-shadow-gray-500 bg-white ring-1 ring-black/5 z-20">
                            {cat.submenu === 1
                              ? cat.items.map((grupo, j) => (
                                  <li key={j} className="relative">
                                    <button
                                      onClick={() =>
                                        toggleSubMenu(grupo.departamento)
                                      }
                                      className="cursor-pointer flex items-center font-medium text-sm justify-between w-full px-2 py-1 text-gray-600 hover:bg-orange-300 rounded-md"
                                    >
                                      {grupo.departamento}
                                      {grupo.items &&
                                        grupo.items.length > 0 && (
                                          <span className="ml-2">
                                            {openSubMenu ===
                                            grupo.departamento ? (
                                              <UpIcon
                                                color="#876943"
                                                size={13}
                                              />
                                            ) : (
                                              <DownIcon
                                                color="#876943"
                                                size={13}
                                              />
                                            )}
                                          </span>
                                        )}
                                    </button>

                                    {openSubMenu === grupo.departamento && (
                                      <ul className="ml-4 bg-gray-200 rounded-l-md mb-1 drop-shadow-sm drop-shadow-gray-500 ">
                                        {grupo.items.map((item) => (
                                          <li key={item.id}>
                                            <Link
                                              href={`/${lang}/${item.tipo}${item.url}`}
                                              onClick={() => CerrarMenus()}
                                              className="cursor-pointer block px-2 py-1 font-medium text-sm text-gray-600 hover:bg-orange-300 hover:text-yellow-950 rounded-md"
                                            >
                                              {item.nombre}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))
                              : cat.items.map((item) => (
                                  <li key={item.id}>
                                    <Link
                                      href={`/${lang}/${item.tipo}${item.url}`}
                                      onClick={() => CerrarMenus()}
                                      className={`${item.url === `/${ruta[3]}` ? "bg-orange-200 text-[#A30923]" : ""} cursor-pointer block px-2 py-1 font-medium text-sm text-gray-600 hover:bg-orange-300 hover:text-yellow-950 rounded-md`}
                                    >
                                      {item.nombre}
                                    </Link>
                                  </li>
                                ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <img
                  src={bandera}
                  className="w-8 h-7 drop-shadow-xs drop-shadow-white"
                  alt="bandera-seleccionada"
                />
                <select
                  name="idioma"
                  id="idioma"
                  aria-label="Lang"
                  value={lang}
                  onChange={idiomaChange}
                  className="w-10 mr-7 sm:mr-2 cursor-pointer drop-shadow-xs drop-shadow-[#A30923] font-semibold text-white rounded  shadow-sm sm:text-sm"
                >
                  {idioma.map((ido, i) => (
                    <option key={i} value={ido.nombre} className="text-black">
                      {ido.nombre.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <DisclosurePanel className="lg:hidden top-0 bg-white">
              <ul className="space-y-0.5 p-1">
                {menu.map((cat, l) => (
                  <li key={l}>
                    <Disclosure>
                      {({ open: catOpen }) => (
                        <div>
                          <DisclosureButton
                            onClick={() => setOpenSubMenuMobile(null)}
                            className="flex justify-between w-full px-2 py-1 text-left font-semibold bg-gray-200 rounded-md hover:bg-gray-400"
                          >
                            {traducirNombre(cat.nombre, lang)}
                            {cat.items && cat.items.length > 0 && (
                              <span>
                                {catOpen ? (
                                  <UpIcon size={15} color="#BA9A09" />
                                ) : (
                                  <DownIcon size={15} color="#BA9A09" />
                                )}
                              </span>
                            )}
                          </DisclosureButton>
                          {cat.items && cat.items.length > 0 && (
                            <DisclosurePanel className="pl-4 mt-1 ">
                              <ul className="max-h-48 overflow-y-scroll">
                                {cat.submenu === 1
                                  ? cat.items.map((grupo, k) => (
                                      <li key={k}>
                                        <button
                                          onClick={() =>
                                            toggleSubMenuMobile(
                                              grupo.departamento,
                                            )
                                          }
                                          className="cursor-pointer flex font-semibold text-sm  justify-between w-full px-2 py-1 text-left rounded-md hover:bg-gray-300"
                                        >
                                          {grupo.departamento}
                                          {grupo.items &&
                                            grupo.items.length > 0 && (
                                              <span>
                                                {openSubMenuMobile ===
                                                grupo.departamento ? (
                                                  <UpIcon
                                                    size={15}
                                                    color="#BA9A09"
                                                  />
                                                ) : (
                                                  <DownIcon
                                                    size={15}
                                                    color="#BA9A09"
                                                  />
                                                )}
                                              </span>
                                            )}
                                        </button>
                                        {openSubMenuMobile ===
                                          grupo.departamento && (
                                          <ul className="pl-4 mt-1 bg-gray-200 rounded-l-md">
                                            {grupo.items.map((item, m) => (
                                              <li key={m}>
                                                <Link
                                                  href={`/${lang}/${item.tipo}${item.url}`}
                                                  onClick={() => close()}
                                                  className={`${item.url === `/${ruta[3]}` ? "bg-orange-200" : "bg-white text-[#A30923]"} cursor-pointer font-semibold text-sm block px-2 py-1 rounded-md hover:bg-gray-400`}
                                                >
                                                  {item.nombre}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))
                                  : cat.items.map((item, m) => (
                                      <li key={m}>
                                        <Link
                                          href={`/${lang}/${item.tipo}${item.url}`}
                                          onClick={() => close()}
                                          className={`${item.url === `/${ruta[3]}` ? "bg-orange-200" : "bg-white text-[#A30923]"} cursor-pointer font-semibold text-sm block px-2 py-1 rounded-md hover:bg-gray-400`}
                                        >
                                          {item.nombre}
                                        </Link>
                                      </li>
                                    ))}
                              </ul>
                            </DisclosurePanel>
                          )}
                        </div>
                      )}
                    </Disclosure>
                  </li>
                ))}
                <Link
                  href={`/${lang}/nosotros`}
                  className={`flex w-full px-3 py-2 text-left font-semibold bg-gray-200 rounded-md hover:bg-gray-400`}
                >
                  {dict.nosotros}
                </Link>
              </ul>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MenuDinamico;

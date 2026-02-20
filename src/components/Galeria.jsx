"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import { CerrarIcon, IzquierdaIcon, DerechaIcon, FocoIcon } from "@/icons";

export const Galeria = ({ galeria, url }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % galeria.length);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev - 1 + galeria.length) % galeria.length);

  return (
    <div className="flex flex-col gap-4 w-full">
      <style>{`
                .button-wrapper::before {
                    animation: spin-gradient 4s linear infinite;
                }
            
                @keyframes spin-gradient {
                    from {
                        transform: rotate(0deg);
                    }
            
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
      {/* 1. VISTA PREVIA (En la página normal) */}
      <div className="flex justify-center items-center">
        <div
          className="relative flex center w-5/6 aspect-6/5 bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-zoom-in"
          onClick={openModal}
        >
          <Image
            src={`${url}/${galeria[selectedIndex].url}`}
            alt={galeria[selectedIndex].nombre}
            title={galeria[selectedIndex].nombre}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      {/* 2. MINIATURAS (Debajo de la foto) */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {galeria.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`w-14 h-14 relative shrink-0 border rounded ${selectedIndex === idx ? "border-blue-600 opacity-100" : "border-gray-200 opacity-50"}`}
          >
            <Image
              src={`${url}/${img.url}`}
              alt={galeria[selectedIndex].nombre}
              fill
              className="object-cover p-1"
              sizes="height-14 width-14"
            />
          </button>
        ))}
      </div>

      {/* 3. MODAL (PANTALLA COMPLETA) */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-0 sm:p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* Panel del Modal: Flex-col en móvil (foto arriba, texto abajo) / Flex-row en PC */}
                <DialogPanel className="w-full max-w-5xl transform overflow-hidden  align-middle shadow-xl transition-all flex flex-col sm:rounded-2xl h-auto">
                  {/* Botón Cerrar */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-gray-800 shadow-lg"
                  >
                    <CerrarIcon />
                  </button>

                  {/* LADO A: FOTO (Fondo Gris) */}
                  <h3 className="text-xl font-bold text-yellow-200 md:mb-3 md:text-2xl">
                    {galeria[selectedIndex].nombre}
                  </h3>
                  <div className="w-full  flex items-center justify-center relative h-[50vh] sm:h-[600px]">
                    {/* Flechas de Navegación */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 z-10 p-0.5 bg-white rounded-full shadow-md  hover:bg-orange-700"
                    >
                      <IzquierdaIcon color="#000" size={25} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 z-10 p-0.5 bg-white rounded-full shadow-md hover:bg-orange-700"
                    >
                      <DerechaIcon color="#000" size={25} />
                    </button>

                    <div className="relative w-full h-full p-6">
                      <Image
                        src={`${url}/${galeria[selectedIndex].url}`}
                        alt={galeria[selectedIndex].nombre}
                        fill
                        className="object-contain" // CLAVE: Evita que se recorte en móviles
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="w-full px-5 flex flex-col overflow-y-auto h-auto pt-3">
                    <div className="mt-auto border-t">
                      <p className="text-xs md:text-lg text-blue-200  mb-2 uppercase font-bold">
                        Galería de Imagenes
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {galeria.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`w-14 h-14 relative shrink-0 border rounded ${selectedIndex === idx ? "border-blue-600 opacity-100" : "border-gray-200 opacity-50"}`}
                          >
                            <Image
                              src={`${url}/${img.url}`}
                              alt=""
                              fill
                              className="object-cover p-1"
                              sizes="height-14 width-14"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

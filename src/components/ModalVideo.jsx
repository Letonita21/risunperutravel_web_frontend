"use client"
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition, TransitionChild, DialogTitle, DialogPanel } from "@headlessui/react";
import { WhatsAppIcon, CerrarIcon } from '@/icons';
import BotonAnimado from "./BotonAnimado";
import { RxVideo } from "react-icons/rx";
import { PDFIcon } from "@/icons";


import { numeroWhatsapp } from './contactos/numero'

const ModalVideo = ({ video, titulo, dict, lang, documento }) => {
    const [openModal, setOpenMoldal] = useState(false);
    const form = {
        tour: titulo,
        idioma: lang
    };

    useEffect(() => {
        if (openModal) {
            const script = document.createElement("script");
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, [openModal]);

    const changeWhatsapp = async (e) => {
        try {
            const response = await fetch('/api/consulta', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
        } catch (error) {

        }
    }

    return (
        <>
            <div className={documento === null ? "hidden" : "flex"}>
                <a
                    href={`/documentos/${documento}`}
                    download={`${titulo}.pdf`}
                    className={`fixed bottom-6 right-5 z-50 ${video === ""? "mb-24":"mb-47"} inline-flex items-center p-5 bg-white border border-red-800 font-semibold rounded-full transition-all shadow-lg hover:shadow-orange-500/30`}
                >
                    {/* Icono de descarga */}
                    <PDFIcon color="#C72300" size={32}/>
                </a>
            </div>
            <div className={video === "" ? "hidden" : "flex"}>
                <BotonAnimado onClick={() => setOpenMoldal(true)} Icono={RxVideo} />
                <Transition show={openModal} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-50 overflow-y-auto"
                        onClose={() => setOpenMoldal(false)}
                    >
                        <div className="flex h-full items-center bg-black/80 justify-center text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="transform transition ease-out duration-300"
                                enterFrom="translate-y-full opacity-0"
                                enterTo="translate-y-0 opacity-100"
                                leave="transform transition ease-in duration-200"
                                leaveFrom="translate-y-0 opacity-100"
                                leaveTo="translate-y-full opacity-0"
                            >
                                <DialogPanel className=" bg-transparent rounded-xl">
                                    <div className="w-full max-w-4xl mx-auto rounded-2xl">
                                        <div dangerouslySetInnerHTML={{ __html: video }} />
                                    </div>

                                    <div className="flex -my-5">
                                        <button
                                            onClick={() => setOpenMoldal(false)}
                                            className="bg-red-600 text-white px-4 py-2"
                                        >
                                            <CerrarIcon size={25} />
                                        </button>
                                        <a
                                            href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(`${dict.mensaje}: ${titulo}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => changeWhatsapp()}
                                            className="w-full gap-2 flex bg-green-600 text-white py-2 px-4 hover:bg-green-800 transition justify-center">
                                            <WhatsAppIcon size={25} />
                                            {dict.whatsapp}
                                        </a>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}

export default ModalVideo
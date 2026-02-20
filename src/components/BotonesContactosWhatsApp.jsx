'use client';
import React, { useState } from 'react';
import { CalendarioIcon, WhatsAppIcon } from '@/icons';
import { numeroWhatsapp } from '@/components/contactos/numero';
import { Dialog, DialogPanel } from '@headlessui/react';
import FormularioEmail from './FormularioEmail';
import CardsTours from './CardsTours';

const BotonesContactosWhatsApp = ({ titulo, tours, dict, formulario, lang }) => {
    const [modal, setModal] = useState(false);
    const form={
        tour: titulo,
        idioma: lang   
    };
    const CloseModal = () => {
        setModal(false);
    }
    const changeWhatsapp = async(e)=> {
        try {
            const response = await fetch('/api/consulta',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
        } catch (error) {
            
        }
    }
    return (
        <div>
            <div className="bg-white/90 rounded-xl shadow-xl p-6 ring-1 ring-black/10 mt-5">
                <button
                    onClick={() => setModal(true)}
                    className="w-full gap-2 flex bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition justify-center">
                    <CalendarioIcon />
                    {dict.reserva}
                </button>
                <a
                    href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(`${dict.mensaje}: ${titulo}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={()=>changeWhatsapp()}
                    className="w-full gap-2 flex bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition justify-center">
                    <WhatsAppIcon />
                    {dict.whatsapp}
                </a>
            </div>
            <div className='mt-5'>
                <CardsTours tours={tours} dict={dict}/>
            </div>
            <Dialog open={modal} onClose={CloseModal} className="relative z-50">
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded-lg">
                        <FormularioEmail
                            onClose={CloseModal}
                            titulo={titulo}
                            isOpen={modal} 
                            form={formulario}
                            lang={lang}/>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default BotonesContactosWhatsApp
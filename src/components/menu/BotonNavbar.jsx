import React from 'react'

const BotonNavbar = ({texto}) => {
    return (
        <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-amber-800 transition-colors duration-300 ease-out border-2 border-amber-800 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-1 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-amber-800 group-hover:-rotate-180 ease"></span>
                <span className="relative">{texto}</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-8 -mb-0.5 -mr-0.5 transition-all duration-200 ease-linear bg-amber-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
    )
}

export default BotonNavbar
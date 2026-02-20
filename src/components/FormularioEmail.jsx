'use client';

import { useState, useRef } from 'react';
import { EnviarIcon } from '@/icons';
import ReCAPTCHA from 'react-google-recaptcha';

const paises = [
    { nombre: 'Afganistan', prefijo: '+93', abreviatura: 'AF' },
    { nombre: 'Albania', prefijo: '+355', abreviatura: 'AL' },
    { nombre: 'Alemania', prefijo: '+49', abreviatura: 'DE' },
    { nombre: 'Andorra', prefijo: '+376', abreviatura: 'AD' },
    { nombre: 'Angola', prefijo: '+244', abreviatura: 'AO' },
    { nombre: 'Antigua y Barbuda', prefijo: '+1-268', abreviatura: 'AG' },
    { nombre: 'Arabia Saudita', prefijo: '+966', abreviatura: 'SA' },
    { nombre: 'Argelia', prefijo: '+213', abreviatura: 'DZ' },
    { nombre: 'Argentina', prefijo: '+54', abreviatura: 'AR' },
    { nombre: 'Armenia', prefijo: '+374', abreviatura: 'AM' },
    { nombre: 'Australia', prefijo: '+61', abreviatura: 'AU' },
    { nombre: 'Austria', prefijo: '+43', abreviatura: 'AT' },
    { nombre: 'Azerbaiyan', prefijo: '+994', abreviatura: 'AZ' },
    { nombre: 'Bahamas', prefijo: '+1-242', abreviatura: 'BS' },
    { nombre: 'Banglades', prefijo: '+880', abreviatura: 'BD' },
    { nombre: 'Barbados', prefijo: '+1-246', abreviatura: 'BB' },
    { nombre: 'Barein', prefijo: '+973', abreviatura: 'BH' },
    { nombre: 'Belgica', prefijo: '+32', abreviatura: 'BE' },
    { nombre: 'Belice', prefijo: '+501', abreviatura: 'BZ' },
    { nombre: 'Benin', prefijo: '+229', abreviatura: 'BJ' },
    { nombre: 'Bielorrusia', prefijo: '+375', abreviatura: 'BY' },
    { nombre: 'Birmania', prefijo: '+95', abreviatura: 'MM' },
    { nombre: 'Bolivia', prefijo: '+591', abreviatura: 'BO' },
    { nombre: 'Bosnia y Herzegovina', prefijo: '+387', abreviatura: 'BA' },
    { nombre: 'Botsuana', prefijo: '+267', abreviatura: 'BW' },
    { nombre: 'Brasil', prefijo: '+55', abreviatura: 'BR' },
    { nombre: 'Brunei', prefijo: '+673', abreviatura: 'BN' },
    { nombre: 'Bulgaria', prefijo: '+359', abreviatura: 'BG' },
    { nombre: 'Burkina Faso', prefijo: '+226', abreviatura: 'BF' },
    { nombre: 'Burundi', prefijo: '+257', abreviatura: 'BI' },
    { nombre: 'Butan', prefijo: '+975', abreviatura: 'BT' },
    { nombre: 'Cabo Verde', prefijo: '+238', abreviatura: 'CV' },
    { nombre: 'Camboya', prefijo: '+855', abreviatura: 'KH' },
    { nombre: 'Camerun', prefijo: '+237', abreviatura: 'CM' },
    { nombre: 'Canada', prefijo: '+1', abreviatura: 'CA' },
    { nombre: 'Catar', prefijo: '+974', abreviatura: 'QA' },
    { nombre: 'Chad', prefijo: '+235', abreviatura: 'TD' },
    { nombre: 'Chile', prefijo: '+56', abreviatura: 'CL' },
    { nombre: 'China', prefijo: '+86', abreviatura: 'CN' },
    { nombre: 'Chipre', prefijo: '+357', abreviatura: 'CY' },
    { nombre: 'Colombia', prefijo: '+57', abreviatura: 'CO' },
    { nombre: 'Comoras', prefijo: '+269', abreviatura: 'KM' },
    { nombre: 'Congo', prefijo: '+242', abreviatura: 'CG' },
    { nombre: 'Corea del Norte', prefijo: '+850', abreviatura: 'KP' },
    { nombre: 'Corea del Sur', prefijo: '+82', abreviatura: 'KR' },
    { nombre: 'Costa de Marfil', prefijo: '+225', abreviatura: 'CI' },
    { nombre: 'Costa Rica', prefijo: '+506', abreviatura: 'CR' },
    { nombre: 'Croacia', prefijo: '+385', abreviatura: 'HR' },
    { nombre: 'Cuba', prefijo: '+53', abreviatura: 'CU' },
    { nombre: 'Dinamarca', prefijo: '+45', abreviatura: 'DK' },
    { nombre: 'Dominica', prefijo: '+1-767', abreviatura: 'DM' },
    { nombre: 'Ecuador', prefijo: '+593', abreviatura: 'EC' },
    { nombre: 'Egipto', prefijo: '+20', abreviatura: 'EG' },
    { nombre: 'El Salvador', prefijo: '+503', abreviatura: 'SV' },
    { nombre: 'Emiratos Arabes Unidos', prefijo: '+971', abreviatura: 'AE' },
    { nombre: 'Eritrea', prefijo: '+291', abreviatura: 'ER' },
    { nombre: 'Eslovaquia', prefijo: '+421', abreviatura: 'SK' },
    { nombre: 'Eslovenia', prefijo: '+386', abreviatura: 'SI' },
    { nombre: 'España', prefijo: '+34', abreviatura: 'ES' },
    { nombre: 'Estados Unidos', prefijo: '+1', abreviatura: 'US' },
    { nombre: 'Estonia', prefijo: '+372', abreviatura: 'EE' },
    { nombre: 'Esuatini', prefijo: '+268', abreviatura: 'SZ' },
    { nombre: 'Etiopia', prefijo: '+251', abreviatura: 'ET' },
    { nombre: 'Filipinas', prefijo: '+63', abreviatura: 'PH' },
    { nombre: 'Finlandia', prefijo: '+358', abreviatura: 'FI' },
    { nombre: 'Fiyi', prefijo: '+679', abreviatura: 'FJ' },
    { nombre: 'Francia', prefijo: '+33', abreviatura: 'FR' },
    { nombre: 'Gabon', prefijo: '+241', abreviatura: 'GA' },
    { nombre: 'Gambia', prefijo: '+220', abreviatura: 'GM' },
    { nombre: 'Georgia', prefijo: '+995', abreviatura: 'GE' },
    { nombre: 'Ghana', prefijo: '+233', abreviatura: 'GH' },
    { nombre: 'Granada', prefijo: '+1-473', abreviatura: 'GD' },
    { nombre: 'Grecia', prefijo: '+30', abreviatura: 'GR' },
    { nombre: 'Guatemala', prefijo: '+502', abreviatura: 'GT' },
    { nombre: 'Guinea', prefijo: '+224', abreviatura: 'GN' },
    { nombre: 'Guinea-Bisau', prefijo: '+245', abreviatura: 'GW' },
    { nombre: 'Guinea Ecuatorial', prefijo: '+240', abreviatura: 'GQ' },
    { nombre: 'Guyana', prefijo: '+592', abreviatura: 'GY' },
    { nombre: 'Haiti', prefijo: '+509', abreviatura: 'HT' },
    { nombre: 'Honduras', prefijo: '+504', abreviatura: 'HN' },
    { nombre: 'Hungria', prefijo: '+36', abreviatura: 'HU' },
    { nombre: 'India', prefijo: '+91', abreviatura: 'IN' },
    { nombre: 'Indonesia', prefijo: '+62', abreviatura: 'ID' },
    { nombre: 'Irak', prefijo: '+964', abreviatura: 'IQ' },
    { nombre: 'Iran', prefijo: '+98', abreviatura: 'IR' },
    { nombre: 'Irlanda', prefijo: '+353', abreviatura: 'IE' },
    { nombre: 'Islandia', prefijo: '+354', abreviatura: 'IS' },
    { nombre: 'Islas Marshall', prefijo: '+692', abreviatura: 'MH' },
    { nombre: 'Islas Salomon', prefijo: '+677', abreviatura: 'SB' },
    { nombre: 'Israel', prefijo: '+972', abreviatura: 'IL' },
    { nombre: 'Italia', prefijo: '+39', abreviatura: 'IT' },
    { nombre: 'Jamaica', prefijo: '+1-876', abreviatura: 'JM' },
    { nombre: 'Japon', prefijo: '+81', abreviatura: 'JP' },
    { nombre: 'Jordania', prefijo: '+962', abreviatura: 'JO' },
    { nombre: 'Kazajistan', prefijo: '+7', abreviatura: 'KZ' },
    { nombre: 'Kenia', prefijo: '+254', abreviatura: 'KE' },
    { nombre: 'Kirguistan', prefijo: '+996', abreviatura: 'KG' },
    { nombre: 'Kiribati', prefijo: '+686', abreviatura: 'KI' },
    { nombre: 'Kuwait', prefijo: '+965', abreviatura: 'KW' },
    { nombre: 'Laos', prefijo: '+856', abreviatura: 'LA' },
    { nombre: 'Lesoto', prefijo: '+266', abreviatura: 'LS' },
    { nombre: 'Letonia', prefijo: '+371', abreviatura: 'LV' },
    { nombre: 'Libano', prefijo: '+961', abreviatura: 'LB' },
    { nombre: 'Liberia', prefijo: '+231', abreviatura: 'LR' },
    { nombre: 'Libia', prefijo: '+218', abreviatura: 'LY' },
    { nombre: 'Liechtenstein', prefijo: '+423', abreviatura: 'LI' },
    { nombre: 'Lituania', prefijo: '+370', abreviatura: 'LT' },
    { nombre: 'Luxemburgo', prefijo: '+352', abreviatura: 'LU' },
    { nombre: 'Madagascar', prefijo: '+261', abreviatura: 'MG' },
    { nombre: 'Malasia', prefijo: '+60', abreviatura: 'MY' },
    { nombre: 'Malaui', prefijo: '+265', abreviatura: 'MW' },
    { nombre: 'Maldivas', prefijo: '+960', abreviatura: 'MV' },
    { nombre: 'Mali', prefijo: '+223', abreviatura: 'ML' },
    { nombre: 'Malta', prefijo: '+356', abreviatura: 'MT' },
    { nombre: 'Marruecos', prefijo: '+212', abreviatura: 'MA' },
    { nombre: 'Mauricio', prefijo: '+230', abreviatura: 'MU' },
    { nombre: 'Mauritania', prefijo: '+222', abreviatura: 'MR' },
    { nombre: 'Mexico', prefijo: '+52', abreviatura: 'MX' },
    { nombre: 'Micronesia', prefijo: '+691', abreviatura: 'FM' },
    { nombre: 'Moldavia', prefijo: '+373', abreviatura: 'MD' },
    { nombre: 'Monaco', prefijo: '+377', abreviatura: 'MC' },
    { nombre: 'Mongolia', prefijo: '+976', abreviatura: 'MN' },
    { nombre: 'Montenegro', prefijo: '+382', abreviatura: 'ME' },
    { nombre: 'Mozambique', prefijo: '+258', abreviatura: 'MZ' },
    { nombre: 'Namibia', prefijo: '+264', abreviatura: 'NA' },
    { nombre: 'Nauru', prefijo: '+674', abreviatura: 'NR' },
    { nombre: 'Nepal', prefijo: '+977', abreviatura: 'NP' },
    { nombre: 'Nicaragua', prefijo: '+505', abreviatura: 'NI' },
    { nombre: 'Niger', prefijo: '+227', abreviatura: 'NE' },
    { nombre: 'Nigeria', prefijo: '+234', abreviatura: 'NG' },
    { nombre: 'Noruega', prefijo: '+47', abreviatura: 'NO' },
    { nombre: 'Nueva Zelanda', prefijo: '+64', abreviatura: 'NZ' },
    { nombre: 'Oman', prefijo: '+968', abreviatura: 'OM' },
    { nombre: 'Paises Bajos', prefijo: '+31', abreviatura: 'NL' },
    { nombre: 'Pakistan', prefijo: '+92', abreviatura: 'PK' },
    { nombre: 'Palaos', prefijo: '+680', abreviatura: 'PW' },
    { nombre: 'Palestina', prefijo: '+970', abreviatura: 'PS' },
    { nombre: 'Panama', prefijo: '+507', abreviatura: 'PA' },
    { nombre: 'Papua Nueva Guinea', prefijo: '+675', abreviatura: 'PG' },
    { nombre: 'Paraguay', prefijo: '+595', abreviatura: 'PY' },
    { nombre: 'Peru', prefijo: '+51', abreviatura: 'PE' },
    { nombre: 'Polonia', prefijo: '+48', abreviatura: 'PL' },
    { nombre: 'Portugal', prefijo: '+351', abreviatura: 'PT' },
    { nombre: 'Reino Unido', prefijo: '+44', abreviatura: 'GB' },
    { nombre: 'Republica Centroafricana', prefijo: '+236', abreviatura: 'CF' },
    { nombre: 'Republica Checa', prefijo: '+420', abreviatura: 'CZ' },
    { nombre: 'Republica del Congo', prefijo: '+242', abreviatura: 'CG' },
    { nombre: 'Republica Democratica del Congo', prefijo: '+243', abreviatura: 'CD' },
    { nombre: 'Republica Dominicana', prefijo: '+1-809', abreviatura: 'DO' },
    { nombre: 'Ruanda', prefijo: '+250', abreviatura: 'RW' },
    { nombre: 'Rumania', prefijo: '+40', abreviatura: 'RO' },
    { nombre: 'Rusia', prefijo: '+7', abreviatura: 'RU' },
    { nombre: 'Samoa', prefijo: '+685', abreviatura: 'WS' },
    { nombre: 'San Cristobal y Nieves', prefijo: '+1-869', abreviatura: 'KN' },
    { nombre: 'San Marino', prefijo: '+378', abreviatura: 'SM' },
    { nombre: 'San Vicente y las Granadinas', prefijo: '+1-784', abreviatura: 'VC' },
    { nombre: 'Santa Lucia', prefijo: '+1-758', abreviatura: 'LC' },
    { nombre: 'Santo Tome y Principe', prefijo: '+239', abreviatura: 'ST' },
    { nombre: 'Senegal', prefijo: '+221', abreviatura: 'SN' },
    { nombre: 'Serbia', prefijo: '+381', abreviatura: 'RS' },
    { nombre: 'Seychelles', prefijo: '+248', abreviatura: 'SC' },
    { nombre: 'Sierra Leona', prefijo: '+232', abreviatura: 'SL' },
    { nombre: 'Singapur', prefijo: '+65', abreviatura: 'SG' },
    { nombre: 'Siria', prefijo: '+963', abreviatura: 'SY' },
    { nombre: 'Somalia', prefijo: '+252', abreviatura: 'SO' },
    { nombre: 'Sri Lanka', prefijo: '+94', abreviatura: 'LK' },
    { nombre: 'Suazilandia', prefijo: '+268', abreviatura: 'SZ' },
    { nombre: 'Sudafrica', prefijo: '+27', abreviatura: 'ZA' },
    { nombre: 'Sudan', prefijo: '+249', abreviatura: 'SD' },
    { nombre: 'Sudan del Sur', prefijo: '+211', abreviatura: 'SS' },
    { nombre: 'Suecia', prefijo: '+46', abreviatura: 'SE' },
    { nombre: 'Suiza', prefijo: '+41', abreviatura: 'CH' },
    { nombre: 'Surinam', prefijo: '+597', abreviatura: 'SR' },
    { nombre: 'Tailandia', prefijo: '+66', abreviatura: 'TH' },
    { nombre: 'Tanzania', prefijo: '+255', abreviatura: 'TZ' },
    { nombre: 'Tayikistan', prefijo: '+992', abreviatura: 'TJ' },
    { nombre: 'Timor Oriental', prefijo: '+670', abreviatura: 'TL' },
    { nombre: 'Togo', prefijo: '+228', abreviatura: 'TG' },
    { nombre: 'Tonga', prefijo: '+676', abreviatura: 'TO' },
    { nombre: 'Trinidad y Tobago', prefijo: '+1-868', abreviatura: 'TT' },
    { nombre: 'Tunez', prefijo: '+216', abreviatura: 'TN' },
    { nombre: 'Turkmenistan', prefijo: '+993', abreviatura: 'TM' },
    { nombre: 'Turquia', prefijo: '+90', abreviatura: 'TR' },
    { nombre: 'Tuvalu', prefijo: '+688', abreviatura: 'TV' },
    { nombre: 'Ucrania', prefijo: '+380', abreviatura: 'UA' },
    { nombre: 'Uganda', prefijo: '+256', abreviatura: 'UG' },
    { nombre: 'Uruguay', prefijo: '+598', abreviatura: 'UY' },
    { nombre: 'Uzbekistan', prefijo: '+998', abreviatura: 'UZ' },
    { nombre: 'Vanuatu', prefijo: '+678', abreviatura: 'VU' },
    { nombre: 'Vaticano', prefijo: '+39-06', abreviatura: 'VA' },
    { nombre: 'Venezuela', prefijo: '+58', abreviatura: 'VE' },
    { nombre: 'Vietnam', prefijo: '+84', abreviatura: 'VN' },
    { nombre: 'Yemen', prefijo: '+967', abreviatura: 'YE' },
    { nombre: 'Yibuti', prefijo: '+253', abreviatura: 'DJ' },
    { nombre: 'Zambia', prefijo: '+260', abreviatura: 'ZM' },
    { nombre: 'Zimbabue', prefijo: '+263', abreviatura: 'ZW' }
];

const FormularioEmail = ({ onClose, titulo, lang, isOpen, form }) => {

    const [codPais, setCodPais] = useState('+51');
    const recaptchaRef = useRef(null);

    const [formData, setFormData] = useState({
        nombre: '',
        pais: 'Peru',
        idioma: lang,
        email: '',
        numero: '',
        fecha_llegada: '',
        numero_pasajeros: 1,
        tour: titulo,
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = recaptchaRef.current.getValue();
        recaptchaRef.current.reset();
        //const token ="";
        if (!token) {
            alert("Por favor, completa el reCAPTCHA.");
            return;
        }

        const res = await fetch('/api/contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, token, titulo }),
        });

        if (res.ok) {
            alert('Correo enviado correctamente');
            onClose();
        }
        else alert('Error al enviar');
    };

    const handlePais = (e) => {
        const nombreSeleccionado = e.target.value;
        const paisSeleccionado = paises.find(p => p.nombre === nombreSeleccionado);

        setFormData(prev => ({
            ...prev,
            pais: paisSeleccionado.nombre || null,
        }));
        setCodPais(paisSeleccionado.prefijo);
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-4 rounded-xl drop-shadow-xl drop-shadow-sky-700 space-y-2">
            <h2 className="text-2xl font-bold text-sky-900">{form.titulo}</h2>
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">{form.nombres}*</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1 px-1 block w-full border rounded-md border-gray-600 shadow-sm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    {form.pais}*
                </label>

                <select
                    value={formData.pais || ''}
                    onChange={handlePais}
                    className="block w-full px-2 border border-gray-600 rounded-lg">
                    <option value="">Seleccionar</option>
                    {paises.map((pais, i) => (
                        <option key={i} value={pais.nombre}>
                            {pais.nombre}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{form.correo}*</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-1 rounded-md border border-gray-600 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
            </div>
            <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                    {form.numero}*
                </label>

                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-sky-600 text-white font-semibold text-sm">
                        {codPais || '+00'}
                    </span>
                    <input
                        type="tel"
                        name="numero"
                        id="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        required
                        className="flex-1 block w-full px-2 rounded-r-md border border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                    />
                </div>
            </div>


            <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">{form.fecha}*</label>
                <input
                    type="date"
                    name="fecha_llegada"
                    id="fecha_llegada"
                    value={formData.fecha_llegada}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-1 rounded-md border border-gray-600 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
            </div>

            <div>
                <label htmlFor="pasajeros" className="block text-sm font-medium text-gray-700">{form.cantidad}*</label>
                <input
                    type="number"
                    name="numero_pasajeros"
                    id="numero_pasajeros"
                    min={1}
                    value={formData.numero_pasajeros}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-1 rounded-md border border-gray-600 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
            </div>

            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">{form.adicional}</label>
                <textarea
                    name="mensaje"
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder={form.mensaje}
                    className="mt-1 block w-full px-1 rounded-md border border-gray-600 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
            </div>
            <div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
            </div>
            <button
                type="submit"
                className="w-full font-semibold bg-sky-700 flex text-white py-2 px-4 rounded-md hover:bg-sky-900 transition items-center justify-center gap-1">
                <EnviarIcon size={25} />{form.enviar}
            </button>
        </form>

    )
}

export default FormularioEmail
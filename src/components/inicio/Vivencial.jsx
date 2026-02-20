
import { getVivencial } from "@/lib/infoPortada";
import CardVivencial from "./CardVivencial";

const Vivencial = async ({ dict, lang }) => {

    const ids = [
        dict.vivencial.idPatabamba,
        dict.vivencial.idPatacancha,
        dict.vivencial.idLlachon,
        dict.vivencial.idAmantani
    ]

    //const dataVivencial = await getVivencial(ids);
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/portada/vivencial.php?ids=${ids.join(",")}`);
    const dataVivencial = await res.json();
    const dataInit = [
        {
            id: dict.vivencial.idPatabamba,
            title:"",
            lugar: "Cusco, Urubamba, Ollantaytambo, Patacancha",
            ubicacion: "https://maps.app.goo.gl/em6ARWcZcPaGLqhH8",
            actividades: dict.actividadesPatacancha,
            descripcion: dict.descripcionPatacancha,
            duracion: dict.duracionPatacancha,
            image: "/vivencial/patabamba.webp",
            url: "",
        },
        {
            id: dict.vivencial.idPatacancha,
            title:"",
            lugar: "Cusco, Cusco, San Sebastian, Corao, Patabamba",
            ubicacion: "https://maps.app.goo.gl/qLrsnR9MR9nSd3FK7",
            actividades: dict.actividadesPatabamba,
            descripcion: dict.descripcionPatabamba,
            duracion: dict.duracionPatabamba,
            image: "/vivencial/patacancha.webp",
            url: "",
        },
        {
            id: dict.vivencial.idLlachon,
            title:"",
            lugar: "Puno, Puno, Capachita, Llachon",
            ubicacion: "https://maps.app.goo.gl/A2sttr35K8kGzbcc8",
            actividades: dict.actividadesLlachon,
            descripcion: dict.descripcionLlachon,
            duracion: dict.duracionLlachon,
            image: "/vivencial/llachon.webp",
            url: "",
        },
        {
            id: dict.vivencial.idAmantani,
            title:"",
            lugar: "Puno, Amantani, Amantani",
            ubicacion: "https://maps.app.goo.gl/Q6LqWYmFZ7WXzwPk6",
            actividades: dict.actividadesAmantani,
            descripcion: dict.descripcionAmantani,
            duracion: dict.duracionAmantani,
            image: "/vivencial/amantani.webp",
            url: "",
        }
    ];

    const slides = dataInit.map(data => {
        const match = dataVivencial.find(item => item.id === data.id);
        return match
            ? {
                ...data,
                title: match.nombre || '',
                slug: match.slug || '',
                tipo: match.tipo || ''
            }
            : data;
    });
    return (
        <>
            <CardVivencial slides={slides} lang={lang} dict={dict}/>
        </>
    )
}

export default Vivencial
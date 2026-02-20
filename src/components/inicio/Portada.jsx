
import CarruselPortada from "./CarruselPortada";
import { getPortada } from "@/lib/infoPortada";

export const Portada = async ({ dict, lang }) => {
  const ids = [
    dict.portada.id1.id,
    dict.portada.id2.id,
    dict.portada.id3.id,
    dict.portada.id4.id
  ];

  //const dataPortada = await getPortada(ids);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/portada/portada.php?ids=${ids.join(",")}`
  );

  const dataPortada = await res.json();

  const portadaHome = [
    { id: dict.portada.id1.id, nombre: "", ruta: "/inicio/machupicchu-terresdesinca.jpg", slug: "", tipo: "" },
    { id: dict.portada.id2.id, nombre: "", ruta: "/inicio/laguna_sirenachayoc-terresdes.webp", slug: "", tipo: "" },
    { id: dict.portada.id3.id, nombre: "", ruta: "/inicio/palcoyo-terresdesincas.webp", slug: "", tipo: "" },
    { id: dict.portada.id4.id, nombre: "", ruta: "/inicio/salkantay_trek-terresdesincas.webp", slug: "", tipo: "" },
  ];

  const cards = portadaHome.map(data => {
    const match = dataPortada.find(item => item.id === data.id);
    return match
      ? {
        ...data,
        nombre: match.nombre,
        slug: match.slug,
        tipo: match.tipo,
        ruta: match.imagen_portada
      }
      : data;
  });

  return (
    <div>
      <CarruselPortada portadaHome={cards} dict={dict} lang={lang} />
    </div>
  );
};
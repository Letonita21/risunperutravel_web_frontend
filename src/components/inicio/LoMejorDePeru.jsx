import React from "react";
import { getMejorPeru } from "@/lib/infoPortada";
import CardMosaico from "./CardMosaico";

const LoMejorDePeru = async ({ dict, lang }) => {
  const ids = [
    dict.mejorPeru.idMuseoLarco,
    dict.mejorPeru.idParqueAguas,
    dict.mejorPeru.idEncantoDecierto,
    dict.mejorPeru.idColca,
    dict.mejorPeru.idSillar,
    dict.mejorPeru.idTiticaca,
    dict.mejorPeru.idSillustani,
    dict.mejorPeru.idSandoval,
    dict.mejorPeru.idTaricaya,
  ];

  //const dataMejorPeru = await getMejorPeru(ids);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/portada/mejorperu.php?ids=${ids.join(",")}`,
  );
  const dataMejorPeru = await res.json();

  const dataInit = [
    {
      id: dict.mejorPeru.idMuseoLarco,
      title: "",
      src: "/mejorPeru/museolarco.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idParqueAguas,
      title: "",
      src: "/mejorPeru/parque-aguas.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idEncantoDecierto,
      title: "",
      src: "/mejorPeru/huacachina.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idColca,
      title: "",
      src: "/mejorPeru/canion-colca.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idSillar,
      title: "",
      src: "/mejorPeru/ruta-sillar.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idTiticaca,
      title: "",
      src: "/mejorPeru/uros-puno.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idSillustani,
      title: "",
      src: "/mejorPeru/chullpas-de-sullistani.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idSandoval,
      title: "",
      src: "/mejorPeru/lago-sandoval-manu.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
    {
      id: dict.mejorPeru.idTaricaya,
      title: "",
      src: "/mejorPeru/tambopata.webp",
      departamento: "",
      duracion: 0,
      slug: "",
    },
  ];

  const images = dataInit.map((data) => {
    const match = dataMejorPeru.find((item) => item.id === data.id);
    return match
      ? {
          ...data,
          title: match.nombre || "",
          departamento: match.departamento || "",
          slug: match.slug || "",
          duracion: match.duracion || "",
          tipo: match.tipo || "",
        }
      : data;
  });

  return (
    <>
      <CardMosaico dict={dict} images={images} lang={lang} />
    </>
  );
};

export default LoMejorDePeru;

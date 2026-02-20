import { getConnection } from "./db";

export async function getTour(slug) {
  const conn = await getConnection();
  const [rows] = await conn.execute(
    `SELECT 
       t.*, 
       g.id AS galeria_id, 
       g.nombre as imagen_galeria, 
       g.url 
     FROM tours t
     LEFT JOIN tours_galeria g ON t.id = g.tour_id
     WHERE t.slug = ?`,
    [slug]
  );
  await conn.end();

  if (rows.length === 0) return null;
  const {
    galeria_id, imagen_galeria, url, ...tourData
  } = rows[0];
  const galeria = rows
    .filter(row => row.galeria_id !== null)
    .map(row => ({
      id: row.galeria_id,
      nombre: row.imagen_galeria,
      url: row.url
    }));
  return {
    ...tourData,
    galeria
  };
}

export async function getMetadata(slug) {
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute(
      `SELECT id, nombre, slug, idioma, tipo, frase_seo, imagen_portada
       FROM tours
       WHERE slug = ?`,
      [slug]
    );
    await conn.end();
    return rows[0];
  } catch (error) {
    console.error("Error al obtener la metadescripción:", error);
    return null;
  }
}

export async function getCards(lang) {
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute(
      `SELECT id, nombre, slug, idioma, tipo, precio_enganche, imagen_portada, picos, dificultad, duracion, departamento
       FROM tours
       WHERE idioma = ?
       ORDER BY RAND()
       LIMIT 12`,
      [lang]
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener los tours:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
}

export async function getPaquete(id) {
  const conn = await getConnection();
  const [data] = await conn.execute("SELECT * FROM tours WHERE id = ?", [id])
  await conn.end();
  return data[0] || null;
}
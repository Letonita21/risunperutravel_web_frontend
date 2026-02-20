import { getConnection } from './db';

export async function getBuscar(texto, lang) {
  try {
    const conn = await getConnection();
    const likeTexto = `%${texto}%`;

    const query = `
      SELECT 
        id,
        nombre,
        precio_enganche,
        descripcion,
        imagen_portada,
        duracion,
        departamento,
        slug,
        tipo
      FROM tours
      WHERE idioma = ?
        AND (
          nombre LIKE ?
          OR descripcion LIKE ?
          OR itinerario LIKE ?
        )
      ORDER BY nombre ASC
    `;

    const [rows] = await conn.execute(query, [lang, likeTexto, likeTexto, likeTexto]);
    await conn.end();

    return rows;
  } catch (error) {
    console.error('Error al buscar tours:', error);
    return [];
  }
}
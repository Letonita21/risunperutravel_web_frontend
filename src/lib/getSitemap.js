import { getConnection } from "./db";

export async function getItemsSitemap() {
  try {
    const conn = await getConnection();
    const [data] = await conn.query(
      "SELECT id, idioma, tipo, slug FROM tours ORDER BY id ASC"
    );
    return data;
  } catch (error) {
    console.error("❌ Error al obtener los items del sitemap:", error);
    return [];
  }
}

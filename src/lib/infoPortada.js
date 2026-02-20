import { getConnection } from "./db";

/* const generarSlug = (nombre) => {
            return nombre
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
        }; */

export async function getImperdibles(ids) {
  const conn = await getConnection();
  if (!ids || ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `
    SELECT id, nombre, slug, tipo, duracion, picos, dificultad, precio_enganche
    FROM tours
    WHERE id IN (${placeholders})
  `;
  const [data] = await conn.execute(query, [...ids]);
  await conn.end();
  return data;
}
export async function getCaminatas(ids) {
  const conn = await getConnection();
  if (!ids || ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `
    SELECT id, nombre, slug, tipo, duracion, picos, dificultad, precio_enganche
    FROM tours
    WHERE id IN (${placeholders})
  `;
  const [data] = await conn.execute(query, [...ids]);
  await conn.end();
  return data;
}
export async function getMejorPeru(ids) {
  const conn = await getConnection();
  if (!ids || ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `
    SELECT id, nombre, slug, tipo, duracion, departamento
    FROM tours
    WHERE id IN (${placeholders})
  `;
  const [data] = await conn.execute(query, [...ids]);
  await conn.end();
  return data;
}
export async function getVivencial(ids) {
  const conn = await getConnection();
  if (!ids || ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `
    SELECT id, nombre, slug, tipo 
    FROM tours
    WHERE id IN (${placeholders})
  `;
  const [data] = await conn.execute(query, [...ids]);
  await conn.end();
  return data;
}
export async function getPortada(ids) {
  const conn = await getConnection();
  if (!ids || ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `
    SELECT id, nombre, slug, tipo 
    FROM tours
    WHERE id IN (${placeholders})
  `;
  const [data] = await conn.execute(query, [...ids]);
  await conn.end();
  return data;
}
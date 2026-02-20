import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { tour, idioma } = await req.json();
    const conn = await getConnection();
    const nombre = "Consulta por whatsapp";

    await conn.execute(
      `INSERT INTO reservas (nombre, tour, idioma, fecha_registro, estado) 
       VALUES (?, ?, ?, NOW(), "atendido")`,
      [nombre, tour, idioma]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al procesar la reserva:", error);
    return NextResponse.json(
      { error: "No se pudo procesar la reserva" },
      { status: 500 }
    );
  }
}
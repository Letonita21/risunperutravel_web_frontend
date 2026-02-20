import { getConnection } from "@/lib/db";

export async function getItemsMenu(lang) {
    try {
        const conn = await getConnection();
        const [data] = await conn.execute(
            "SELECT id, slug, nombre, tipo, departamento FROM tours WHERE idioma = ? ORDER BY id ASC",
            [lang]);

        const agrupadoRaw = data.reduce((acc, item) => {
            const tipo = item.tipo.trim().toLowerCase();
            const departamento = item.departamento.trim();

            const nuevoItem = {
                id: item.id,
                nombre: item.nombre,
                departamento,
                tipo: item.tipo,
                url: `/${item.slug}`
            };

            if (tipo === 'tours') {
                if (!acc[tipo]) acc[tipo] = [];
                let grupo = acc[tipo].find((g) => g.departamento === departamento);
                if (!grupo) {
                    grupo = { departamento, items: [] };
                    acc[tipo].push(grupo);
                }
                grupo.items.push(nuevoItem);
            } else {
                if (!acc[tipo]) acc[tipo] = [];
                acc[tipo].push(nuevoItem);
            }

            return acc;
        }, {});

        const agrupadoFinal = Object.entries(agrupadoRaw).map(([tipo, items]) => ({
            nombre: tipo,
            ruta: `/${tipo}`,
            items
        }));
        return new Response(JSON.stringify(agrupadoFinal), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log("error menu", error);
    }
}
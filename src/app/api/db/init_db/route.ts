import { sql } from "@vercel/postgres";

export async function GET() {
    const { rows } = await sql`CREATE TABLE IF NOT EXISTS libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    fecha_publicacion DATE,
    genero VARCHAR(100),
    precio NUMERIC(10, 2)
);`;
    return Response.json({ message: "DB Inicializada con exito" });
}

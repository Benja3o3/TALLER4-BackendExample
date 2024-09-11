import { sql } from "@vercel/postgres";

export async function GET() {
    return Response.json({ message: "DB Working" });
}

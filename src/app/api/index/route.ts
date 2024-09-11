// import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
    // console.log("Body", await request.json());
    //separate the query parameters
    // const params = new URLSearchParams(request.url.split("?")[1]);
    // const name = params.get("name");
    // console.log("GET request", name);
    // const { rows } = await sql`SELECT * FROM example_docs`;
    // return Response.json(rows);
    return Response.json({ message: "GET INDEX ROUTE" });
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log("POST request", body);
    return Response.json({ message: "POST" });
}

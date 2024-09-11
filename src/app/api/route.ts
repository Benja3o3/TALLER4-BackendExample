export async function GET() {
    const users = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Doe", age: 35 },
    ];
    return Response.json({ users: users });
}

export async function POST(request: Request) {
    return Response.json({ message: "POST" });
}

export async function PUT(request: Request) {
    return Response.json({ message: "PUT" });
}

export async function DELETE(request: Request) {
    return Response.json({ message: "DELETE" });
}

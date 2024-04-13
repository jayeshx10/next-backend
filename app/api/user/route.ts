import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log("BODY ===>", body)

    return Response.json({ message: "Coming from backend"})
}
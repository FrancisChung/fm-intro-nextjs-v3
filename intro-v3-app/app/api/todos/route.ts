import {NextResponse} from "next/server";

export const GET = async (request: Request) => {
    return NextResponse.json({message: 'hello GET matey'})
}

export const POST = async (request: Request) => {
    const data = await request.body;
    return NextResponse.json({message: 'hello POST matey {data}'})
}
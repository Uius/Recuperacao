import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({aluno : "William Felixs Rodrigues" });
};
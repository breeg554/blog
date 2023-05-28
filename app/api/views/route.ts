import { NextResponse } from 'next/server';
import { prisma } from '@lib/PrismaClient';

export async function POST() {
  const existingRecord = await prisma.views.findMany();
  console.log(existingRecord);
  return NextResponse.json(existingRecord);
}

export async function GET() {
  try {
    const posts = await prisma.views.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return new Response(`Something went wrong: ${JSON.stringify(err)}`, { status: 500 });
  }
}

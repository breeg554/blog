import { NextResponse } from 'next/server';
import { prisma } from '@lib/PrismaClient';

export async function POST(req: Request) {
  const body = await req.json();

  if (!body || !('slug' in body))
    return NextResponse.json({ message: `Slug is missing` }, { status: 400 });

  try {
    const view = await prisma.views.upsert({
      where: { slug: body.slug as string },
      update: { views: { increment: 1 } },
      create: { slug: body.slug as string, views: 1 },
    });

    return NextResponse.json(view);
  } catch (err) {
    return NextResponse.json({ message: `Something went wrong`, err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.views.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: `Something went wrong`, err }, { status: 500 });
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

import prisma from 'prisma/client';

export async function GET(_request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: { name: 'asc' },
  });

  return NextResponse.json(users);
}

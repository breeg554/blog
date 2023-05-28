import { PrismaClient as OPrismaClient } from '@prisma/client';

class PrismaClient {
  private readonly instance: OPrismaClient;

  constructor() {
    this.instance = new OPrismaClient();
  }

  get prisma() {
    return this.instance;
  }
}

const prismaInstance = new PrismaClient();

export const prisma = prismaInstance.prisma;

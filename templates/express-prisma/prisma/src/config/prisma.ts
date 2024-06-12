import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log("Connection to database successful.");
  } catch (error) {
    console.error("Error connecting to db.", error);
  }
};

export const disconnectPrisma = async () => {
  try {
    await prisma.$disconnect();
    console.log("Disconnected.");
  } catch (error) {
    console.error("Failed to disconnect database", error);
  }
};

import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectPrisma } from "./config/prisma";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect prisma db
connectPrisma();

app.use(errorMiddleware);

export default app;

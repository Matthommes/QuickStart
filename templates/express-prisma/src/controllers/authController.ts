import { Request, Response } from "express";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { asyncHandler } from "../utils/asyncHandler";

// Initialize client to find Apple's JWKS
const client = jwksClient({
  jwksUri: "https://appleid.apple.com/auth/keys",
});

// Fetch public key to verify apple's jwt.

const getKeys = (headers: any, callback: any) => {
  client.getSigningKey(headers.kid, (err, key) => {
    if (err) {
      callback(err, null);
      return;
    }
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
};

export const registerUser = asyncHandler(async (req: Request, res: Response) => {});

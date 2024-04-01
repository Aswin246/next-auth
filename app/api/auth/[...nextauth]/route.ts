import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/app/db/index";
import { nextAuth } from "@/app/lib/auth";

const handler = NextAuth(nextAuth);

export { handler as GET, handler as POST };

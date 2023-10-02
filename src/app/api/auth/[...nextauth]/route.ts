import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/auth-options";

const runtime = "edge";

// @ts-ignore
const handler = NextAuth(authOptions);

export { runtime, handler as GET, handler as POST };

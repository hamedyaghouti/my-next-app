import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/auth-options";

// export const runtime = "edge";

// @ts-ignore
const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

export const GET = handler.handlers.GET;
export const POST = handler.handlers.POST;

export const runtime = "edge";

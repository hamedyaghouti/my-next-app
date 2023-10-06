import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/auth-options";

const runtime = "edge";

// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, runtime };

// export const GET = handler.handlers.GET;
// export const POST = handler.handlers.POST;

// export const runtime = "edge";

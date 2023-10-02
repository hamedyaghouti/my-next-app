import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import prisma from "@/app/libs/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "John Smith",
    //     },
    //   },
    //   async authorize(credentials) {
    //     const user = { id: 1, name: "Brett", email: "brett@gmail.com" };
    //     return user;
    //   },
    // }),
  ],
  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  // debug: process.env.NODE_ENV === "development",
};

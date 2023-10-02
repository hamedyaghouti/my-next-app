// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import NextAuth from "next-auth/next";
// import { type GetServerSidePropsContext } from "next";
// import {
//   getServerSession,
//   type DefaultSession,
//   type NextAuthOptions,
// } from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";

// // import { env } from "@/env.mjs";
// import prisma from "@/app/libs/prismadb";

// /**
//  * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
//  * object and keep type safety.
//  *
//  * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
//  */
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: DefaultSession["user"] & {
//       id: string;
//       // ...other properties
//       // role: UserRole;
//     };
//   }

//   // interface User {
//   //   // ...other properties
//   //   // role: UserRole;
//   // }
// }

// /**
//  * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
//  *
//  * @see https://next-auth.js.org/configuration/options
//  */

// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     DiscordProvider({
//       clientId: process.env.DISCORD_CLIENT_ID as string,
//       clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// };

// /**
//  * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
//  *
//  * @see https://next-auth.js.org/configuration/nextjs
//  */
// export const getServerAuthSession = (ctx: {
//   req: GetServerSidePropsContext["req"];
//   res: GetServerSidePropsContext["res"];
// }) => {
//   return getServerSession(ctx.req, ctx.res, authOptions);
// };

// // import NextAuth from "next-auth"
// // import GithubProvider from "next-auth/providers/github"
// // export const authOptions = {
// //   // Configure one or more authentication providers
// //   providers: [
// //     GithubProvider({
// //       clientId: process.env.GITHUB_ID,
// //       clientSecret: process.env.GITHUB_SECRET,
// //     }),
// //     // ...add more providers here
// //   ],
// // }

// // export default NextAuth(authOptions)

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import prisma from "@/app/libs/prismadb";

// export const runtime = "edge";
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
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

// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

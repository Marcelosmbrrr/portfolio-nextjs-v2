// @ts-nocheck

import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./services/database/database"
import authConfig from "./auth.config"
import { getUserById } from "./actions/user"

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token }) {

      if (!token.sub) {
        return token;
      }

      return token;

    },
    async session({ session, token }) {

      // Extra data to session
      if (token.sub && session.user) {
        
        const user = await getUserById(token.sub);

        session.user.id = token.sub;
        session.user.whatsapp = user?.whatsapp;
        session.user.username = user?.username

      }

      return session;

    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
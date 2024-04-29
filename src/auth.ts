import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./services/database/database"
import authConfig from "./auth.config"
import { getUserById } from "./actions/user"
import { Role } from "@prisma/client"

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token }) {

      if (!token.sub) {
        return token;
      }

      const user = await getUserById(token.sub);

      if (!user) {
        return token;
      }

      token.role = user.Role;

      return token;
    },
    async session({ session, token }) {

      // Put user id into session object
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      return session;

    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
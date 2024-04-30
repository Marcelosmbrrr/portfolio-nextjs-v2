import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import { User } from "@prisma/client";

// https://next-auth.js.org/getting-started/typescript#main-module

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: User
    }
}
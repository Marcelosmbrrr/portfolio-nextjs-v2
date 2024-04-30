import type { NextAuthConfig } from 'next-auth';
import bcrypt from 'bcryptjs'
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from './schemas/schemas';
import { getUserByUsername } from './actions/user';

export default {
    providers: [
        Credentials({
            async authorize(credentials) {

                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {

                    const { username, password } = validatedFields.data;

                    const user = await getUserByUsername(username);

                    if (!user) {
                        return null;
                    }

                    // refact
                    const passwords_match = await bcrypt.compare(password, user.password);

                    if (passwords_match) {
                        return user
                    }

                }

                return null;

            },
        }),
    ]
} satisfies NextAuthConfig
"use server"

import * as z from "zod"
import { LoginSchema } from "@/schemas/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(form: z.infer<typeof LoginSchema>) {

    const validated_form = LoginSchema.safeParse(form);

    if (!validated_form.success) {
        return { error: "Invalid fields" }
    }

    const { username, password } = validated_form.data;

    try {
        await signIn("credentials", {
            username,
            password,
            redirectTo: "/projects"
        })
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" }
                default:
                    return { error: "Server Error" }
            }
        }
        throw e;
    }
}
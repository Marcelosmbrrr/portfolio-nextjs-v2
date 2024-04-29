import { db } from "@/services/database/database";

export async function getUserByUsername(username: string) {
    try {
        const user = await db.user.findUnique({
            where: {
                username: username
            }
        })

        return user;
    } catch (e) {
        return null;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await db.user.findUnique({
            where: {
                id: id
            },
            include: {
                Role: true
            }
        })

        return user;
    } catch (e) {
        return null;
    }
}
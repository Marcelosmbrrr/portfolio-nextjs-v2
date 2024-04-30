import { db } from "@/services/database/database";

export async function getTechs() {
    try {

        const techs = await db.tech.findMany();

        return {
            techs,
            error: ''
        }

    } catch (e) {
        return null;
    }
}
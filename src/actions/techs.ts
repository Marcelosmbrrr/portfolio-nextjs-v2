import { db } from "@/services/database/database";

export async function paginateTechs(page: number = 1, limit: number = 10, search: string = "") {
    try {

        const techs = await db.tech.findMany({
            take: Number(limit),
            skip: Number((page - 1) * limit)
        });

        const totalCount = await db.tech.count();
        const totalPages = Math.ceil(totalCount / limit);

        return {
            techs: techs.length > 0 ? techs : [],
            totalPages: totalPages,
            error: techs.length > 0 ? '' : 'Nenhuma tecnologia encontrada'
        };

    } catch (e: any) {
        return {
            techs: [],
            totalPages: 1,
            error: 'Erro ao buscar as tecnologias: ' + e.message
        };
    }
}

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
import { db } from "@/services/database/database";

export async function paginateProjects(page: number = 1, limit: number = 10, search: string = "") {
    try {

        const projects = await db.project.findMany({
            take: Number(limit),
            skip: Number((page - 1) * limit)
        });

        const totalCount = await db.project.count();
        const totalPages = Math.ceil(totalCount / limit);

        return {
            projects: projects.length > 0 ? projects : [],
            totalPages: totalPages,
            error: projects.length > 0 ? '' : 'Nenhum projeto encontrado'
        };

    } catch (e: any) {
        return {
            projects: [],
            totalPages: 1,
            error: 'Erro ao buscar os projetos: ' + e.message
        };
    }
}

export async function getProjects() {
    try {

        const projects = await db.project.findMany();

        return {
            projects,
            error: ''
        }

    } catch (e) {
        return null;
    }
}
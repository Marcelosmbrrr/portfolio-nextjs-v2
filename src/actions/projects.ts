import { db } from "@/services/database/database";

export async function paginateProjects() {
    try {
        return {
            posts: [],
            totalPages: 1,
            error: ''
        }
    } catch (e) {
        return null;
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
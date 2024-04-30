import { db } from "@/services/database/database";

export async function paginatePosts(page: number, limit: number, search: string) {
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

export async function getPosts() {
    try {

        const posts = await db.post.findMany();

        return {
            posts,
            error: ''
        }

    } catch (e) {
        return null;
    }
}

export async function getPostById(id: number) {
    try {
        return {
            post: [],
            error: ''
        }
    } catch (e) {
        return null;
    }
}


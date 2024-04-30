import { Header } from "@/components/layouts/visitor/Header";
import { Hero } from "@/components/layouts/visitor/Hero";
import { TechList } from "@/components/layouts/visitor/TechList";
import { ProjectList } from "@/components/layouts/visitor/ProjectList";
import { PostList } from "@/components/layouts/visitor/PostList";
import { Footer } from "@/components/layouts/visitor/Footer";

export default async function Page() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="grow bg-white dark:bg-gray-900">
                <Hero />
                <TechList />
                <ProjectList />
                <PostList />
            </main>
            <Footer />
        </div>
    )
}
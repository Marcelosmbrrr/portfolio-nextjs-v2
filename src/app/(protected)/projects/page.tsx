import * as React from 'react';
import { auth } from '@/auth';
import Link from 'next/link';
import { PaginationControl } from '@/components/table/PaginationControl';
import { LimitControl } from '@/components/table/LimitControl';
import { paginateProjects } from '@/actions/projects';
import { Search } from '@/components/inputs/search';

interface Project {
    id: number;
    cuid: string;
    name: string;
    published: boolean;
    stage: string;
    technologies: string;
    description: string;
    image: string;
    created_at: Date;
    updated_at: Date;
}


type Data = {
    projects: Project[],
    totalPages: number,
    error: string
}

async function getData(page: number, limit: number, search: string) {
    return await paginateProjects(page, limit, search);
}

export default async function Page({ searchParams: { limit, page, search } }: {
    searchParams: {
        limit: number;
        page: number;
        search: string;
    };
}) {

    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    const { projects, totalPages, error } = await getData(page, limit, search) as Data;

    return (
        <div className="mt-14">

            <div className="flex flex-col min-h-36 p-3 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <div className="grow">
                    <nav className="grow flex">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </span>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projetos</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="grow">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Projetos</h1>
                </div>
                <div className="w-full grid grid-cols-2">
                    <Search placeholder='Procurar projetos' />
                    <div className="flex space-x-2 justify-end">
                        <Link href="/projects/create" className="inline-flex w-fit justify-center gap-x-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Criar Projeto</Link>
                        <LimitControl />
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Stage
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Techs
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created at
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Updated at
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {projects.length > 0 && !error && projects.map((project: Project) =>
                            <tr className="border-b dark:border-gray-700">
                                <td className="px-4 py-3">
                                    <div className="w-fit bg-emerald-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                        {project.stage}
                                    </div>
                                </td>
                                <td className="px-4 py-3">{project.name}</td>
                                <td className="px-4 py-3">{project.description}</td>
                                <td className="px-4 py-3">{project.technologies}</td>
                                <td className="px-4 py-3">{project.created_at.toLocaleDateString('pt-BR')}</td>
                                <td className="px-4 py-3">{project.updated_at.toLocaleDateString('pt-BR')}</td>
                                <td className="flex items-center px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Delete</a>
                                </td>
                            </tr>
                        )}

                        {error &&
                            <tr className="border-b dark:border-gray-700">
                                <td colSpan={8} className="px-4 py-3 text-center">{error}</td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
            <PaginationControl totalPages={totalPages} />
        </div >
    )
}
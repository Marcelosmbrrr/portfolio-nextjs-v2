"use client"

import * as React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Props {
    totalPages: number;
}

export function PaginationControl(props: Props) {

    const [page, setPage] = React.useState<number>(1);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function changePage(page: number) {
        setPage(page);
        const params = new URLSearchParams(searchParams);
        params.set('page', String(page));
        replace(`${pathname}?${params.toString()}`);
    }

    function renderPageList() {

        for (let i = 0; i < props.totalPages; i++) {

            let actual_page = i + 1;

            let classname = '';
            if (actual_page != page) {
                classname = "bg-white dark:bg-gray-800";
            } else {
                classname = "bg-gray-100 dark:bg-gray-700";
            }

            return (
                <li>
                    <span onClick={() => changePage(actual_page)} className={"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " + classname}>
                        {actual_page}
                    </span>
                </li>
            )
        }

    }

    return (
        <nav className='text-right m-2'>
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Anterior</a>
                </li>
                {renderPageList()}
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Próxima</a>
                </li>
            </ul>
        </nav>
    )
}
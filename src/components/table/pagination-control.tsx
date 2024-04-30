"use client"

import * as React from 'react';

interface Props {
    totalPages: number;
}

export function PaginationControl(props: Props) {

    const [page, setPage] = React.useState<number>(1);

    function nextPage() {
        if (page < props.totalPages) {
            const new_value = page + 1;
            setPage(new_value);
        }
    }

    function previousPage() {
        if (page > 1) {
            const new_value = page - 1;
            setPage(new_value);
        }
    }

    return (
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
            <ul className="inline-flex items-stretch -space-x-px">
                <li onClick={previousPage}
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 cursor-pointer text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd" />
                    </svg>
                </li>
                <li onClick={nextPage}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight cursor-pointer text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd" />
                    </svg>
                </li>
            </ul >
        </nav >
    )
}
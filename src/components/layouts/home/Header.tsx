"use client"

import { useTheme } from "@/context/ThemeContext"

export function Header() {

    const { ThemeButton } = useTheme();

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-emerald-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                            </svg>
                            <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap">smbr</span>
                        </div>
                    </div>
                    {ThemeButton()}
                </div>
            </div>
        </nav>
    )
}
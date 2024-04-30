"use client"

import Link from "next/link";
import { ThemeButton } from "@/components/theme-button/ThemeButton";

export function Header() {

    return (
        <header>
            <nav className="border-gray-200 p-5 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-emerald-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                        </svg>
                        <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap">smbr</span>
                    </div>
                    <div className="flex justify-between items-center w-auto order-1">
                        <ul className="flex items-center font-medium space-x-8">
                            <li>
                                <a href="https://github.com/Marcelosmbrrr" target="_blank"
                                    className="block py-2 text-gray-800 dark:text-white rounded lg:p-0 hover:text-emerald-500 dark:hover:text-emerald-500 cursor-pointer">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/marcelosmbr/" target="_blank"
                                    className="flex py-2 text-gray-800 dark:text-white rounded lg:p-0 hover:text-emerald-500 dark:hover:text-emerald-500 cursor-pointer">
                                    Linkedin
                                </a>
                            </li>
                            <li className="flex items-center text-gray-800 dark:text-white rounded lg:p-0 dark:hover:text-emerald-500 cursor-pointer">
                                <Link href="login" className="flex py-2 text-gray-800 dark:text-white rounded lg:p-0 hover:text-emerald-500 dark:hover:text-emerald-500 cursor-pointer">
                                    Login
                                </Link>
                            </li>
                            <li className="flex items-center text-gray-800 dark:text-white rounded lg:p-0 hover:text-emerald-500 cursor-pointer">
                                <ThemeButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    )
}
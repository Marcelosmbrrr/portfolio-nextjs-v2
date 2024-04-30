"use client"

import { ThemeButton } from "@/components/theme-button/ThemeButton";
import { TagIcon } from "@/components/icons/TagIcon";

export function Header() {

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <div className="flex items-center">
                            <span className="text-emerald-500 mr-2">
                                <TagIcon />
                            </span>
                            <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap">smbr</span>
                        </div>
                    </div>
                    {<ThemeButton />}
                </div>
            </div >
        </nav >
    )
}
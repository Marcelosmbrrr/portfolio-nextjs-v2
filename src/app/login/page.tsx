import * as React from 'react';
import { ThemeButton } from '@/components/theme-button/ThemeButton';
import { LoginForm } from '../../components/forms/login/login-form';

export default function Page() {

    return (
        <section className="bg-white dark:bg-gray-950">
            <div className="absolute top-5 right-5">
                <div className="text-gray-800 dark:text-white dark:hover:text-emerald-500 cursor-pointer">
                    <ThemeButton />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex items-center mb-5">
                    <svg className="w-6 h-6 text-emerald-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd" />
                    </svg>
                    <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap">NextAuth</span>
                </div>
                <div
                    className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Authentication
                        </h1>
                        <LoginForm />
                    </div>
                </div >
            </div >
        </section >
    )
}
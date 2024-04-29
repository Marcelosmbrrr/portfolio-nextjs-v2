"use client"

import * as React from 'react';
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { LoginSchema } from '@/schemas/schemas';
import { login } from '../action';

export function LoginForm() {

    const [pending, setPending] = React.useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const { register, handleSubmit, formState: { errors } } = form;

    async function onSubmit(data: z.infer<typeof LoginSchema>) {
        try {
            setPending(true);
            await login(data);
        } catch (e: any) {
            console.log(e)
            enqueueSnackbar("Server Error", { variant: "error" });
        } finally {
            setPending(false);
        }

    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Username</label>
                <input type="text" id="username" {...register('username')}
                    placeholder="Type username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" />
                <span className='text-red-600 text-sm'>{errors.username?.message}</span>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">Password</label>
                <input type="password" id="password" {...register('password')}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" />
                <span className='text-red-600 text-sm'>{errors.password?.message}</span>
            </div>
            <button type="submit" disabled={pending} className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                {pending ? 'Loading ...' : 'Login'}
            </button>
        </form>
    )
}
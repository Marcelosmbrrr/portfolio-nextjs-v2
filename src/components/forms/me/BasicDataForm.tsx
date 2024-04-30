"use client"

import * as React from 'react';
import * as z from "zod"
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiClient } from '@/services/api/api';

const Schema = z.object({
    name: z.string().min(1, 'name is required'),
    username: z.string().min(1, 'username is required'),
    email: z.string().email().min(1, 'e-mail is required'),
    whatsapp: z.string().min(1, 'whatsapp is required')
})

export function BasicDataForm() {

    const [pending, setPending] = React.useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setPending(true);
            const response = await apiClient.get("api/admin/me");
            setValue('name', response.data.user.name);
            setValue('email', response.data.user.email);
            setValue('username', response.data.user.username);
            setValue('whatsapp', response.data.user.whatsapp);
        } catch (e: any) {
            console.log(e);
        } finally {
            setPending(false);
        }
    }

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema)
    });

    const { register, handleSubmit, formState: { errors }, setValue } = form;

    async function onSubmit(data: z.infer<typeof Schema>) {
        try {
            await apiClient.patch("api/admin/me", data);
            enqueueSnackbar("Updated data!", { variant: "success" });
        } catch (e: any) {
            console.log(e);
        }
    }

    return (
        <div className="max-w-screen-xl px-4 mb-5">
            <h3 className="font-semibold mb-5 dark:text-white">Personal Data</h3>
            <form className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Name </label>
                    <input {...register('name')} type="text" id="name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                </div>
                <div>
                    <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Username </label>
                    <input {...register('username')} type="text" id="username" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> E-mail </label>
                    <input {...register('email')} type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                </div>
                <div>
                    <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Whatsapp </label>
                    <input {...register('whatsapp')} type="text" id="whatsapp" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                </div>
                <div>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {pending ? "Saving ..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    )
}
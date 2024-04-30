"use client"

import * as React from 'react';
import * as z from "zod"
import { auth } from '@/auth';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiClient } from '@/services/api/api';

const Schema = z.object({
    password: z.string().min(1, 'password is required'),
    password_confirmation: z.string().min(1, 'password confirmation is required'),
})

export function ChangePasswordForm() {

    const [pending, setPending] = React.useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            password: '',
            password_confirmation: ''
        }
    });

    const { register, handleSubmit, formState: { errors } } = form;

    async function onSubmit(data: z.infer<typeof Schema>) {
        try {
            setPending(true);
            await apiClient.patch("api/admin/me", data);
            enqueueSnackbar("Updated password!", { variant: "success" });
        } catch (e: any) {
            console.log(e);
        } finally {
            setPending(false);
        }
    }

    return (
        <div className="max-w-screen-xl p-4">
            <h3 className="font-semibold mb-5 dark:text-white">Change Password</h3>
            <form className="grid grid-cols-1 gap-4 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Actual Password </label>
                    <input {...register('password')} type="password" id="password" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                </div>
                <div>
                    <label htmlFor="new-password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> New Password </label>
                    <input {...register('password_confirmation')} type="password" id="new-password" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
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
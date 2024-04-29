import * as React from 'react';
import { auth } from '@/auth';

export default async function Page() {

    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex flex-col items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div className='dark:text-white'>
                        {session.user.role.name}
                    </div>
                    <div className='dark:text-white'>
                        {JSON.stringify(session)}
                    </div>
                </div>
            </div>
        </div>
    )
}
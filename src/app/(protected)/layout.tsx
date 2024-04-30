import { Header } from '@/components/layouts/home/Header';
import { Sidebar } from '@/components/layouts/home/Sidebar';
import { auth } from '@/auth';

export default async function ProtectedLayout({
    children, 
}: {
    children: React.ReactNode
}) {

    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <div className='bg-white dark:bg-gray-800'>
            <Header />
            <Sidebar />
            <div className="sm:ml-64 min-h-screen">
                {children}
            </div>
        </div>
    )
}
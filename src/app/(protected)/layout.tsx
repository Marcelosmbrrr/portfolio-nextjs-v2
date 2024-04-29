import { auth, signOut } from '@/auth';

export default async function ProtectedLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <section>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="flex items-center p-2">
                            <svg viewBox="0 0 128 128" height={"30"} width={"30"}>
                                <circle cx="64" cy="64" r="64"></circle><path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs>
                            </svg>
                            <span className="text-xl ms-3">NextAuth</span>
                        </li>

                        <li className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                            <form
                                action={async () => {
                                    "use server"
                                    await signOut()
                                }}
                            >
                                <button type="submit" className='w-full'>
                                    <span className="whitespace-nowrap">Sign Out</span>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </aside >
            {children}
        </section>
    )
}
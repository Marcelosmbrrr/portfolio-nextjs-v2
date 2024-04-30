import { Post } from "@prisma/client";
import { getPosts } from "@/actions/posts";

type Data = { posts: Post[], error: string };

async function getData() {
    const res = await getPosts();

    if (!res) {
        return {
            posts: [],
            error: 'Nenhum posts encontrado'
        }
    }

    return res;
}

export async function PostList() {

    const { posts, error }: Data = await getData();

    function postImage(image_url: string) {
        if (image_url.includes("no-image")) {
            return (
                <div className="h-56 w-full flex justify-center items-center">
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        }
        return (
            <img className="rounded-t-lg h-full w-full" src={image_url} alt="post image" />
        )
    }

    return (
        <div className="max-w-7xl px-5 md:px-0 mx-auto mt-10">
            <div className="flex items-center gap-2">
                <div className="text-emerald-400">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white"><span className="text-emerald-400">Postagens</span> recentes</h1>
            </div>

            <div className="flex justify-start flex-wrap pb-3 mt-5 gap-3 cursor-pointer rounded-l-lg">

                {posts.length > 0 && posts.map((post: Post) =>
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] dark:bg-gray-800 dark:border-gray-700">
                        <div className='relative h-56 w-full overflow-y-hidden'>
                            {postImage(post.image)}
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="text-2xl mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{post.name}</h5>
                                <div className="bg-emerald-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                    {post.created_at.getDate()}
                                </div>
                            </div>
                            <div className="h-20 text-gray-800 dark:text-white break-words text-justify mt-2">
                                {post.description}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {post.tags.split(",").map((tag: string) =>
                                    <div className="min-w-fit text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded border border-gray-700 inline-flex items-center justify-center">
                                        {tag}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {posts.length === 0 &&
                    <div>
                        <span className="text-gray-800 dark:text-white">Nenhum post encontrado</span>
                    </div>
                }

            </div >
        </div >
    )
}
import Image from "next/image"

export function Hero() {
    return (
        <section className="grid max-w-screen-xl mt-10 px-4 mx-auto lg:gap-8 xl:gap-0 py-20 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1
                    className="max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-6xl xl:text-7xl dark:text-white">
                    Marcelo<span className="text-red-400">SMBR</span></h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-xl lg:text-3xl dark:text-gray-400">
                    Desenvolvedor Fullstack.
                </p>
                <a href="#"
                    className="inline-flex mr-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Contato
                </a>
                <a href='assets/documents/cv.pdf' target='_blank'
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Currículo
                </a>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/assets/images/hero-logo/praise.png"
                    className="hover:scale-105 transition duration-500 ease-in-out transform" alt="hero-draw" />
            </div>
        </section>
    )
}
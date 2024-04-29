import * as React from 'react';

interface ITech {
    id: string;
    name: string;
    description: string;
    icon: string[];
}

type data = { techs: ITech[], message: string };

async function getData() {
    return { techs: [], message: "" }
}

export async function TechList() {

    const { techs, message }: data = await getData();

    function getIconCdn(icon: string) {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
    }

    return (
        <div className="max-w-7xl px-5 lg:px-0 mx-auto">
            <div className="flex items-center gap-2">
                <div className="text-emerald-400">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white"><span className="text-emerald-400">Tecnologias</span> utilizadas</h1>
            </div>
            <div className='flex flex-wrap gap-8 mt-6'>

                {techs.length > 0 && techs.map((tech: ITech) =>
                    <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                        <div className='h-auto flex gap-2'>
                            {tech.icon.map((icon) =>
                                <img src={getIconCdn(icon)} className="h-10 w-10" alt={`${icon} icon`} />
                            )}
                        </div>
                        <div className='h-auto'>
                            <span className='font-semibold dark:text-white'>{tech.name}</span>
                        </div>
                        <div className='h-full w-full text-justify'>
                            <p className='text-sm dark:text-white'>{tech.description}</p>
                        </div>
                    </div>
                )}

                {techs.length === 0 &&
                    <div>
                        <span className="text-gray-800 dark:text-white">Nenhuma tecnologia encontrada</span>
                    </div>
                }

            </div>
        </div>
    )
}
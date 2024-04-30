import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function main() {

    await db.user.create({
        data: {
            name: 'Marcelo Moreira',
            username: 'marcelosmbr',
            email: 'development.smbr@gmail.com',
            password: await bcrypt.hash('admin12345', 10),
            whatsapp: '53991082653'
        }
    })

    await db.project.createMany({
        data: [
            {
                name: 'Portfolio v1',
                published: true,
                technologies: 'NextJS 13,Tailwind CSS,Auth0,PlanetScale,Vercel',
                description: 'Primeira versão da aplicação de portfolio.',
                image: '/projects/fe58602a-158b-4d3d-bd8a-8aae1833fee9&3.png',
                stage: "finalizado"
            },
            {
                name: 'Portfolio v2',
                published: true,
                technologies: 'NextJS 14,Tailwind CSS,NextAuth,Supabase,Vercel',
                description: 'Segunda e atual versão da aplicação de portfolio.',
                image: '/projects/1cc4eb0e-2a39-4e2b-8fbd-ecb97276db58.png',
                stage: "finalizado"
            }
        ]
    });

    await db.tech.createMany({
        data: [
            {
                name: "Frontend Essencial",
                description: "Tríade HTML, CSS e JavaScript, além de conhecimentos em Typescript",
                icon: ["html5/html5-original", "css3/css3-original", "javascript/javascript-original", "typescript/typescript-original"]
            },
            {
                name: "Frameworks Frontend e SSR",
                description: "React, Nextjs, Vuejs, Nuxtjs e o básico de Angular",
                icon: ["react/react-original", "nextjs/nextjs-original", "vuejs/vuejs-original", "nuxtjs/nuxtjs-original", "angularjs/angularjs-original"]
            },
            {
                name: "PHP",
                description: "Desenvolvimento backend com PHP e Laravel",
                icon: ["php/php-original", "laravel/laravel-original"]
            },
            {
                name: "NodeJS",
                description: "Ambiente NodeJS e desenvolvimento de apis com Express, NestJS e AdonisJs",
                icon: ["nodejs/nodejs-original", "express/express-original", "nestjs/nestjs-original", "adonisjs/adonisjs-original"]
            },
            {
                name: "Banco de Dados",
                description: "Bancos de dados relacionais MySQL e PostgreSQL",
                icon: ["mysql/mysql-original", "postgresql/postgresql-original"]
            },
            {
                name: "DevOps",
                description: "Docker, CI/CD com Github Actions e Cloud Hosting com AWS e Digital Ocean",
                icon: ["docker/docker-original", "amazonwebservices/amazonwebservices-plain-wordmark", "digitalocean/digitalocean-original"]
            },
            {
                name: "CMS",
                description: "Conhecimento em Wordpress",
                icon: ["wordpress/wordpress-plain"]
            },
        ]
    })

}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })
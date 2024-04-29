import { PrismaClient } from '@prisma/client'

const db = new PrismaClient();

async function main() {

    await db.role.createMany({
        data: [
            {
                name: 'admin',
                read: true,
                write: true
            },
            {
                name: 'user',
                read: true,
                write: false
            }
        ]
    })

    await db.user.createMany({
        data: [
            {
                name: 'Marcelo Moreira',
                roleId: 1,
                username: 'marcelosmbr',
                email: 'development.smbr@gmail.com',
                password: '123123',
            },
            {
                name: 'User Guest',
                roleId: 2,
                username: 'guest',
                email: 'guest@gmail.com',
                password: '123123',
            }
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
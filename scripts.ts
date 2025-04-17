import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'alice@gmail.com' },
        update: {}, 
        create: {
          name: 'Alice',
          email: 'alice@gmail.com',
        },
      });
      
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
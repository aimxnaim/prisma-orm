import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany(); // optional: clear all users first

  const result = await prisma.user.createMany({
    data: [
      { age: 22, name: 'Aiman', email: 'aiman1@gmail.com', password: 'pass123', role: 'BASIC' },
      { age: 24, name: 'Naim', email: 'naim2@gmail.com', password: 'pass456', role: 'ADMIN' },
      { age: 26, name: 'Sarah', email: 'sarah3@gmail.com', password: 'pass789', role: 'BASIC' },
      { age: 28, name: 'John', email: 'john4@gmail.com', password: 'johnpass', role: 'BASIC' },
      { age: 30, name: 'Jane', email: 'jane5@gmail.com', password: 'janepass', role: 'ADMIN' },
      { age: 21, name: 'Ali', email: 'ali6@gmail.com', password: 'alipass', role: 'BASIC' },
      { age: 23, name: 'Alya', email: 'alya7@gmail.com', password: 'alyapass', role: 'BASIC' },
      { age: 29, name: 'Mira', email: 'mira8@gmail.com', password: 'mirapass', role: 'ADMIN' },
      { age: 27, name: 'Zaki', email: 'zaki9@gmail.com', password: 'zakipass', role: 'BASIC' },
      { age: 31, name: 'Farah', email: 'farah10@gmail.com', password: 'farahpass', role: 'BASIC' },
      { age: 25, name: 'Danial', email: 'danial11@gmail.com', password: 'danialpass', role: 'ADMIN' },
      { age: 26, name: 'Siti', email: 'siti12@gmail.com', password: 'sitipass', role: 'BASIC' },
      { age: 24, name: 'Azhar', email: 'azhar13@gmail.com', password: 'azharpass', role: 'BASIC' },
      { age: 22, name: 'Nora', email: 'nora14@gmail.com', password: 'norapass', role: 'ADMIN' },
      { age: 30, name: 'Hakim', email: 'hakim15@gmail.com', password: 'hakimpass', role: 'BASIC' }
    ],
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await hash('123123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      name: 'Admin',
      hashedPassword: password,
    },
  });
  const markers = await prisma.marker.createMany({
    data: [
      {
        latitude: -36.848461,
        longitude: 174.763336,
        description: 'Auckland is the largest city in New Zealand.',
        user_id: user.id,
      },
      {
        latitude: -41.295216275932106,
        longitude: 174.77494459959325,
        description: 'Some marker in Wellington.',
        user_id: user.id,
      },
    ],
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from '@prisma/client'
import { createAdminUser, createEmailTemplate, createGuestUser } from './guestUser'

const prisma = new PrismaClient()

async function main () {
    await createGuestUser()
    await createAdminUser()
    await createEmailTemplate()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import db from '../../src/index'
import { createAdminUser, createGuestUser } from './fakeUsers'


async function main () {
    await createGuestUser()
    await createAdminUser()

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
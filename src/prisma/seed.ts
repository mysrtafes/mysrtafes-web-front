import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const challengerFactories = []
  for (let i = 0; i < 100; i++) {
    const challengerFactory = {
      EditUrl: Math.random().toString(32),
      TimeStamp: Math.random().toString(32),
      Name: Math.random().toString(32),
      Furigana: Math.random().toString(32),
      Department1: Math.random().toString(32),
      Game1: Math.random().toString(32),
      Goal1: Math.random().toString(32),
      TwitterId: Math.random().toString(32),
      TtYesNo: 'はい',
      MultiGamesYesNo: 'はい',
    }
    challengerFactories.push(challengerFactory)
  }

  await prisma.challenger.createMany({
    data: challengerFactories,
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

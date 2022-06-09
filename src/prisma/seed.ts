import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const departments = ['ちょっと不思議部門', 'もっと不思議部門']
const games = [
  '風来のシレン',
  '風来のシレン2',
  'アスカ見参',
  'シレン4',
  'シレン5',
  'ポケダン',
  'ドラファン',
  'ドラファンZ',
  'isaac',
  ' トルネコ2',
  '猫3',
  '青の救助隊',
  '世界樹',
  'チョコダン',
]
const main = async () => {
  const challengerFactories = []
  for (let i = 0; i < 100; i++) {
    const challengerFactory = {
      EditUrl: Math.random().toString(32).slice(-8),
      TimeStamp: Math.random().toString(32).slice(-8),
      Name: Math.random().toString(32).slice(-8),
      Furigana: Math.random().toString(32).slice(-8),
      Department1: departments[Math.floor(Math.random() * departments.length)],
      Game1: games[Math.floor(Math.random() * games.length)],
      Goal1: Math.random().toString(32).slice(-8),
      TwitterId: '@' + Math.random().toString(32).slice(-8),
      TtYesNo: 'はい',
      MultiGamesYesNo: 'はい',
      Message: Math.random().toString(32).slice(-8),
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

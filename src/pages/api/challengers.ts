import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') res.json('error')
  const prisma = new PrismaClient()
  const data = await prisma.challenger.findMany({
    select: {
      id: true,
      Name: true,
      Furigana: true,
      StreamUrl: true,
      TwitterId: true,
      Message: true,
      Game1: true,
      Department1: true,
      Goal1: true,
      Game2: true,
      Department2: true,
      Goal2: true,
      Game3: true,
      Department3: true,
      Goal3: true,
    },
  })
  res.json(data)
}

export default handleCreate

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') res.json('error')
  const prisma = new PrismaClient()
  const data = await prisma.challengeDungeon.upsert({
    where: { EditUrl: req.body.EditUrl },
    update: req.body,
    create: req.body,
  })
  res.json(data)
}

export default handleCreate

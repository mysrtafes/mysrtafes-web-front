import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') res.json('error')
  const prisma = new PrismaClient()
  const data = await prisma.challengeDungeon.findMany().catch(e => {
    console.log(e)
    return e
  })
  res.json(data)
}

export default handleCreate

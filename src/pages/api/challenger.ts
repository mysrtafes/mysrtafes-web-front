import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') res.json('error')
  if (!req.body.EditUrl) {
    res.json({
      status: 'error',
      message: 'no EditUrl',
    })
    return
  }
  const prisma = new PrismaClient()
  const data = await prisma.challenger.upsert({
    where: { EditUrl: req.body.EditUrl },
    update: req.body,
    create: req.body,
  })
  res.json({
    status: 'success',
    message: 'ok',
    data: data,
  })
}

export default handleCreate

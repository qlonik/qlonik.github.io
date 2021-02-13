// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
): void | Promise<void> => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler

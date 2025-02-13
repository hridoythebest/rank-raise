import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { slug } = req.query
    const contentPath = path.join(process.cwd(), 'app/blog', slug as string, 'content.md')
    const content = fs.readFileSync(contentPath, 'utf8')

    res.status(200).json({ content })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog content' })
  }
}

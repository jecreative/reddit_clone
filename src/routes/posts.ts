import { Router, Request, Response } from 'express'

import auth from '../middleware/auth'
import Post from '../entities/Post'
import { request } from 'http'

const createPosts = async (req: Request, res: Response) => {
  const { title, body, sub } = req.body

  const user = res.locals.user

  if (title.trim() === '') {
    return res.status(400).json({ title: 'Title must not be empty' })
  }

  try {
    // TODO: Find sub
    const post = new Post({ title, body, user, subName: sub })
    await post.save()

    return res.json(post)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

const router = Router()
router.post('/', auth, createPosts)
export default router

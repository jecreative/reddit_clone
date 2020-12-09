import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()
const PORT = process.env.PORT

import authRoutes from './routes/auth'
import postRoutes from './routes/posts'
import subRoutes from './routes/subs'

import trim from './middleware/trim'

const app = express()

//* Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(trim)
app.use(cookieParser())

app.get('/', (_, res) => res.send('Hello World'))
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/subs', subRoutes)

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`)

  try {
    await createConnection()
    console.log('Database connected!')
  } catch (error) {
    console.log(error)
  }
})

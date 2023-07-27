import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/book`, async (req, res) => {
  const { title, content, author, publicationYear, viewCount, published } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author,
      publicationYear, 
      viewCount,
      published
    },
  })
  res.json(result)
})

app.put('/book/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: req.body
    })
    res.json(post)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.delete(`/book/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/books`, async (req, res) => {
  const post = await prisma.post.findMany()
  res.json(post)
})

app.get(`/book/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)

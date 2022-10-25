import { info } from 'console'
import express from 'express'

const PORT = 5701
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  const { body, query } = req
  console.log({ body, query })
  res.sendStatus(200)
})

app.listen(PORT, () => {
  info(`Server is running on port ${PORT}`)
})

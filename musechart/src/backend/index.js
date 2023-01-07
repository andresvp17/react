import './mongodb.cjs'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.cjs'
const app = express()
const PORT = 3005

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log('User Conencted')
})

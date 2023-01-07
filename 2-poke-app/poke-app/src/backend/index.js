require('./mongodb')
require('dotenv').config()
const express = require('express')
const app = express()
const loginRoutes = require('./routes/loginRoute')
const usersRoutes = require('./routes/userRoutes')
const teamRoutes = require('./routes/teamRoutes')
const cors = require('cors')
const PORT = 8000

app.use(express.json())
app.use(cors())

app.use('/login', loginRoutes)
app.use('/users', usersRoutes)
app.use('/teams', teamRoutes)

app.listen(PORT, () => {
  console.log('User Connected')
})

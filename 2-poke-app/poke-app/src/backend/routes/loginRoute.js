const loginRoutes = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

loginRoutes.get('/', (req, res) => {
  User.find({})
    .then(users => {
      if (!users) return res.status(404).end()
      res.json(users)
    })
})

loginRoutes.post('/', async (req, res) => {
  const { body } = req
  const { user, password } = body

  const oneUser = await User.findOne({ user })
  const correctPassword = !oneUser ? false : await bcrypt.compare(password, oneUser.password)

  if (!oneUser || !correctPassword) {
    return res.status(403).end()
  }

  const forToken = {
    id: oneUser._id,
    userPassword: password,
    username: oneUser.user
  }

  const token = jwt.sign(forToken, process.env.SECRET)

  res.json({
    user: oneUser.user,
    token
  })
})

module.exports = loginRoutes

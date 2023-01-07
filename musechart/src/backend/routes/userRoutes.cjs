const User = require('../models/User.cjs')
const userRouter = require('express').Router()
const bcrypt = require('bcrypt')

userRouter.get('/', (req, res) => {
  User.find({})
    .then(user => {
      if (!user) {
        return res.status(404).json({
          error: 'User is required'
        })
      }

      return res.json(user)
    })
})

userRouter.post('/', async (req, res) => {
  const { body } = req
  const { username, password } = body
  const SALTROUNDS = 10
  const hashedPassword = await bcrypt.hash(password, SALTROUNDS)

  const newUser = new User({
    username,
    password: hashedPassword
  })

  const savedUser = await newUser.save()
  return res.status(201).json(savedUser)
})

userRouter.get('/:username', async (req, res) => {
  const { username } = req.params

  await User.findOne({ username })
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' })
      return res.json(user)
    })
})

userRouter.put('/:username', async (req, res) => {
  const { username } = req.params
  const { favorites } = req.body

  User.findOneAndUpdate({ username }, favorites, { upsert: true }, (err, doc) => {
    if (err) return res.status(500).json({ error: err })
    return res.json({ message: 'Information successfully sent' })
  })
})

userRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  await User.findByIdAndDelete(id).then(deletedUser => {
    if (!deletedUser) return
    return res.status(204).json(deletedUser)
  })
})

module.exports = userRouter

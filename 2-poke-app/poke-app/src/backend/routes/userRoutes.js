const usersRoutes = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

usersRoutes.get('/', (req, res) => {
  User.find({}).populate('teams', {
    _id: 1,
    teamName: 1,
    pokemonIDs: 1
  })
    .then(user => {
      if (!user) return
      return res.json(user)
    }).catch(err => console.error(err))
})

usersRoutes.get('/:username', (req, res) => {
  const { username } = req.params
  User.findOne({ user: username }).populate('teams', {
    _id: 1,
    teamName: 1,
    pokemonIDs: 1
  })
    .then(user => {
      if (!user) return
      return res.json(user)
    }).catch(err => console.error(err))
})

usersRoutes.post('/', async (req, res) => {
  const { body } = req
  const { user, password } = body
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new User({
    user,
    password: hashedPassword
  })

  const saved = await newUser.save()
  res.status(201).json(saved)
})

usersRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params

  await User.findByIdAndDelete(id).then(element => {
    if (!element) return
    res.json(element)
  })
})

module.exports = usersRoutes

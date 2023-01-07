const teamRoutes = require('express').Router()
const Team = require('../models/Team')
const User = require('../models/User')

teamRoutes.get('/', (req, res) => {
  Team.find({}).populate('userInfo', {
    _id: 1,
    user: 1
  })
    .then(teams => {
      if (!teams) return
      if (teams) return res.json(teams)
    }).catch(err => console.error(err))
})

teamRoutes.get('/:teamName', (req, res) => {
  const { params } = req
  const { teamName } = params
  Team.findOne({ teamName })
    .then(name => {
      if (!name) return
      res.json(name)
    }).catch(err => console.error(err))
})

teamRoutes.post('/', async (req, res) => {
  const { teamName, pokemonIDs, user } = req.body
  const oneUser = await User.findOne({ user: user })
  console.log(oneUser)

  const newTeam = new Team({
    teamName,
    pokemonIDs,
    userInfo: oneUser._id
  })

  const savedTeam = await newTeam.save()
  oneUser.teams = oneUser.teams.concat(newTeam._id)
  await oneUser.save()
  res.status(201).json(savedTeam)
})

teamRoutes.delete('/:team', (req, res) => {
  const { params } = req
  const { team } = params

  Team.findOneAndDelete({ teamName: team })
    .then(deleted => {
      if (!deleted) return
      res.json(deleted)
    }).catch(err => console.error(err))
})

module.exports = teamRoutes

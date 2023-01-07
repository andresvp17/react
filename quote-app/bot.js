const { Telegraf, Markup } = require('telegraf')
const { TAYLOR_DISCOGRAPHY } = require('./taylorDiscography.js')
const TOKEN_BOT = '5845053798:AAFWWgVt8PezuZ948tEiTowVC3QTFj10ztA'
const bot = new Telegraf(TOKEN_BOT)

bot.start((ctx) => {
  const { from } = ctx.message
  ctx.reply(`Hi! Welcome to Taylor Quotes Bot dear ${from.first_name}`)
})

bot.command('/album', async (ctx) => {
  const albums = TAYLOR_DISCOGRAPHY[0].albums.map(el => {
    return ctx.reply(Markup.button.text(el.albumName))
  })
  return Markup.keyboard(albums)
})

bot.launch()

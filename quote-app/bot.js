require('./botAlbums/Lover.js')
const { Telegraf } = require('telegraf')
const TOKEN_BOT = '5845053798:AAFWWgVt8PezuZ948tEiTowVC3QTFj10ztA'
const { TAYLOR_DISCOGRAPHY } = require('./taylorDiscography')
const bot = new Telegraf(TOKEN_BOT)

bot.start((ctx) => {
  const { from } = ctx.message
  ctx.reply(`Hi! Welcome to Taylor Quotes Bot dear ${from.first_name}`)
})

const albumsText = 'Here is the list of Taylor albums you can get a quote'

bot.command('/album', async (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, albumsText, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Taylor Swift 🪕', callback_data: 'taylor swift' },
          { text: 'Fearless 💛', callback_data: 'fearlessAlbum' }
        ],
        [
          { text: 'Speak Now 💫', callback_data: 'speak now' },
          { text: 'Red ❣', callback_data: 'redAlbum' }
        ],
        [
          { text: '1989 👓', callback_data: '1989' },
          { text: 'Reputation 🐍', callback_data: 'reputation' }
        ],
        [
          { text: 'Lover 💖', callback_data: 'loverAlbum' },
          { text: 'Folklore ♟', callback_data: 'folklore' }
        ],
        [
          { text: 'Evermore 🌾', callback_data: 'evermoreAlbum' },
          { text: 'Midnights ⏲', callback_data: 'midnights' }
        ]
      ]
    }
  })
})

bot.action('loverAlbum', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Lover Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Cruel Summer', callback_data: 'cruelSummer' },
          { text: 'Lover', callback_data: 'lover' }
        ],
        [
          { text: 'Paper Rings', callback_data: 'paperRings' },
          { text: 'Cornelia Street', callback_data: 'corneliaStreet' }
        ],
        [
          { text: 'Death By A Thousand Cuts', callback_data: 'dbtc' },
          { text: 'Daylight', callback_data: 'daylight' }
        ],
        [
          { text: 'Afterglow', callback_data: 'afterglow' },
          { text: 'Youll Get Better Soon', callback_data: 'ygbs' }
        ]
      ]
    }
  })
})

bot.action('lover', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.lover
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('cruelSummer', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.cruelSummer
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('paperRings', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.paperRings
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('corneliaStreet', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.corneliaStreet
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('dbtc', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.dbtc
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('daylight', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.daylight
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('afterglow', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.afterglow
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ygbs', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[2].songs.ygbs
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('reputation', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Reputation Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Dress', callback_data: 'dress' },
          { text: 'Dont Blame Me', callback_data: 'dbm' }
        ],
        [
          { text: 'Look What You Made Me Do', callback_data: 'lwymmd' },
          { text: 'Call It What You Want', callback_data: 'ciwyw' }
        ],
        [
          { text: 'Dancing With Our Hands Tied', callback_data: 'dwoht' },
          { text: 'Gorgeous', callback_data: 'gorgeous' }
        ],
        [
          { text: 'Getaway Car', callback_data: 'getawayCar' },
          { text: 'Delicate', callback_data: 'delicate' }
        ]
      ]
    }
  })
})

bot.action('dress', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.dress
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('dbm', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.dbm
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('lwymmd', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.lwymmd
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ciwyw', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.ciwyw
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('dwoht', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.dwoht
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('gorgeous', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.gorgeous
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('getawayCar', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.getawayCar
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('delicate', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[1].songs.delicate
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('folklore', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Folklore Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'exile', callback_data: 'exile' }
        ],
        [
          { text: 'cardigan', callback_data: 'cardigan' },
          { text: 'illicit affairs', callback_data: 'ila' }
        ],
        [
          { text: 'the 1', callback_data: 'theOne' },
          { text: 'august', callback_data: 'august' }
        ],
        [
          { text: 'seven', callback_data: 'seven' },
          { text: 'invisible string', callback_data: 'invisibleString' }
        ]
      ]
    }
  })
})

bot.action('exile', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.exile
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('cardigan', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.cardigan
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ila', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.ila
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('theOne', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.theOne
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('august', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.august
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('seven', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.seven
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('invisibleString', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[0].songs.invisibleString
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('speak now', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Speak Now Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Speak Now', callback_data: 'sn' },
          { text: 'Long Live', callback_data: 'longl' }
        ],
        [
          { text: 'Enchanted', callback_data: 'enchanted' },
          { text: 'Back To December', callback_data: 'btd' }
        ],
        [
          { text: 'Mean', callback_data: 'mean' },
          { text: 'Better Than Revenge', callback_data: 'btr' }
        ]
      ]
    }
  })
})

bot.action('sn', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.sn
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('longl', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.longl
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('enchanted', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.enchanted
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('btd', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.btd
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('mean', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.mean
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('btr', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[3].songs.btr
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('fearlessAlbum', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Fearless Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'The Way I Loved You', callback_data: 'twily' },
          { text: 'Love Story', callback_data: 'ls' }
        ],
        [
          { text: 'You Belong With Me', callback_data: 'ybwm' },
          { text: 'Youre Not Sorry', callback_data: 'yns' }
        ],
        [
          { text: 'Forever And Always', callback_data: 'faa' },
          { text: 'Fearless', callback_data: 'fearless' }
        ]
      ]
    }
  })
})

bot.action('twily', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.twily
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ls', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.ls
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ybwm', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.ybwm
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('yns', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.yns
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('faa', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.faa
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('fearless', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[4].songs.fearless
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('redAlbum', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Red Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Everything Has Changed', callback_data: 'ehc' },
          { text: 'Red', callback_data: 'red' }
        ],
        [
          { text: 'Stay Stay Stay', callback_data: 'stay' },
          { text: 'I Knew You Were Trouble', callback_data: 'ikywt' }
        ],
        [
          { text: 'All Too Well', callback_data: 'atw' },
          { text: 'Begin Again', callback_data: 'ba' }
        ]
      ]
    }
  })
})

bot.action('ehc', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.ehc
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('red', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.red
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('stay', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.stay
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ikywt', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.ikywt
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('atw', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.atw
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ba', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[5].songs.ba
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('taylor swift', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Taylor Swift (Album) Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Picture To Burn', callback_data: 'ptb' },
          { text: 'Shouldve Said No', callback_data: 'ssn' }
        ],
        [
          { text: 'Stay Beautiful', callback_data: 'stayBeautiful' },
          { text: 'Teardrops On My Guitar', callback_data: 'tomg' }
        ],
        [
          { text: 'Tim McGraw', callback_data: 'tc' },
          { text: 'Our Song', callback_data: 'ourSong' }
        ]
      ]
    }
  })
})

bot.action('ptb', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.ptb
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ssn', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.ssn
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('stayBeautiful', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.stayBeautiful
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('tomg', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.tomg
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('tc', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.tc
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ourSong', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[6].songs.ourSong
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('evermoreAlbum', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Evermore Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'willow', callback_data: 'willow' },
          { text: 'champagne problems', callback_data: 'cp' }
        ],
        [
          { text: 'gold rush', callback_data: 'gr' },
          { text: 'tolerate it', callback_data: 'tolerateIt' }
        ],
        [
          { text: 'happiness', callback_data: 'happiness' },
          { text: 'evermore', callback_data: 'evermore' }
        ]
      ]
    }
  })
})

bot.action('willow', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.willow
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('cp', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.cp
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('gr', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.gr
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('tolerateIt', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.tolerateIt
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('happiness', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.happiness
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('evermore', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[7].songs.evermore
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('1989', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, '1989 Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Blank Space', callback_data: 'bs' },
          { text: 'Wildest Dreams', callback_data: 'wd' }
        ],
        [
          { text: 'Out of The Woods', callback_data: 'ootw' },
          { text: 'Bad Blood', callback_data: 'bb' }
        ],
        [
          { text: 'I Wish You Would', callback_data: 'iwyw' },
          { text: 'Clean', callback_data: 'clean' }
        ]
      ]
    }
  })
})

bot.action('bs', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.bs
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('wd', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.wd
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('ootw', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.ootw
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('bb', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.bb
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('iwyw', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.iwyw
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('clean', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[8].songs.clean
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('midnights', ctx => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Midnights Songs: ', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Labyrinth', callback_data: 'labyrinth' },
          { text: 'Antihero ', callback_data: 'antihero' }
        ],
        [
          { text: 'Youre Own Your Own Kid', callback_data: 'yoyok' },
          { text: 'Sweet Nothing', callback_data: 'sweetNothing' }
        ],
        [
          { text: 'The Great War', callback_data: 'tgw' },
          { text: 'Bejeweled', callback_data: 'bejeweled' }
        ]
      ]
    }
  })
})

bot.action('labyrinth', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.labyrinth
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('antihero', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.antihero
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('yoyok', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.yoyok
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('sweetNothing', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.sweetNothing
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('tgw', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.tgw
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.action('bejeweled', ctx => {
  const quote = TAYLOR_DISCOGRAPHY[0].albums[9].songs.bejeweled
  bot.telegram.sendMessage(ctx.chat.id, quote)
})

bot.launch()

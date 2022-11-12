import 'dotenv/config'
import linebot from 'linebot'
import korea from './tests/korea.js'
import drama from './tests/drama.js'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === '韓國') {
      korea(event)
    }
    drama(event)
  }

  //  else if (event.message.text.startsWith('korea')) {
  // drama(event)
  // }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人動起來')
})

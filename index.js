import 'dotenv/config'
import linebot from 'linebot'
import korea from './commeands/korea.js'
import drama from './commeands/drama.js'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const countrys = ['台灣', '韓國', '中國', '美國', '日本', '英國', '泰國', '香港', '西班牙', '法國']
bot.on('message', event => {
  if (event.message.type === 'text') {
    for (let i = 0; i < countrys.length; i++) {
      // 當輸入訊息前面幾個字為國家名
      if (event.message.text.includes(countrys[i])) korea(event)
    }
    if (event.message.text.length < 20) drama(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人動茲動')
})

import 'dotenv/config'
import linebot from 'linebot'
// import express from 'express'
import dramaRank from './commeands/dramaRank.js'
import dramaInfo from './commeands/dramaInfo.js'
import dramaOtt from './commeands/dramaOtt.js'
import flexPopular from './flexs/flexPopular.js'
import flexNew from './flexs/flexNew.js'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

// const app = express()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// message = TextSendMessage(text = '要傳送的文字訊息')
const countrys = ['台灣', '韓國', '中國', '美國', '日本', '英國', '泰國', '香港', '西班牙', '法國']
bot.on('message', event => {
  if (event.message.type === 'text') {
    for (let i = 0; i < countrys.length; i++) {
      // 當輸入訊息有國家名
      if (event.message.text.includes(countrys[i])) dramaRank(event)
      else if (event.message.text === '人氣排行') event.reply(flexPopular)
      else if (event.message.text === '最新排行') event.reply(flexNew)
      else if (event.message.text === '使用說明') event.reply(flexNew)
      else if (event.message.text.includes('ott')) dramaOtt(event)

      // 當輸入內容不超過 50 字時 (排除發送劇情介紹觸發事件)
      else if (event.message.text.length < 50 &&
        event.message.text.includes(countrys[i]) === false) dramaInfo(event)
    }
  }
})

// const linebotParser = bot.parser()

// app.post('/', linebotParser)

// app.get('/', (req, res) => {
//   res.status(200).send('ok')
// })

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('動茲動呀動茲動')
})

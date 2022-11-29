import 'dotenv/config'
import linebot from 'linebot'
import express from 'express'
import dramaRank from './commeands/dramaRank.js'
import dramaInfo from './commeands/dramaInfo.js'
import dramaOtt from './commeands/dramaOtt.js'
import flexPopular from './flexs/flexPopular.js'
import flexNew from './flexs/flexNew.js'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const app = express()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// message = TextSendMessage(text = '要傳送的文字訊息')
const countrys = ['台灣', '韓國', '中國', '美國', '日本', '英國']
bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text.includes('ott')) dramaOtt(event)
    if (event.message.text === '人氣排行') event.reply(flexPopular)
    if (event.message.text === '最新排行') event.reply(flexNew)
    if (event.message.text === 'ott查詢') event.reply('請輸入 "ott+空格+影劇名"')
    if (event.message.text === '使用說明') event.reply(flexNew)
    for (let i = 0; i < countrys.length; i++) {
      // 當輸入訊息有國家名
      if (event.message.text.includes(countrys[i])) {
        dramaRank(event)
        return
        // 當輸入內容不超過 50 字時 (排除發送劇情介紹觸發事件)
      } else if (event.message.text.length < 50) {
        dramaInfo(event)
        return
      }
    }
  } else return
})

const linebotParser = bot.parser()

app.post('/', linebotParser)

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('動茲動呀動茲動')
})

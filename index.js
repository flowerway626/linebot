import 'dotenv/config'
import linebot from 'linebot'
// import express from 'express'
import dramaRank from './commands/dramaRank.js'
import dramaInfo from './commands/dramaInfo.js'
import dramaOtt from './commands/dramaOtt.js'
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
const countries = ['台灣', '韓國', '中國', '美國', '日本', '英國']
const direction = `❖ 人氣排行 ⇒ 選擇國家 
⇒ TOP12 高人氣影劇

❖ 最新排行 ⇒ 選擇國家
⇒ TOP12 新播出影劇

❖ OTT查詢 ⇒ 
影劇播出串流平台整理
△ 點選排行榜可查看該劇的詳細資訊`

bot.on('message', event => {
  if (event.message.type !== 'text') return
  if (event.message.text.includes('ott')) dramaOtt(event)
  else if (event.message.text === '人氣排行') event.reply(flexPopular)
  else if (event.message.text === '最新排行') event.reply(flexNew)
  else if (event.message.text === 'OTT查詢') event.reply('請輸入 "ott+空格+影劇名"')
  else if (event.message.text === '使用說明') event.reply(direction)
  else {
    for (let i = 0; i < countries.length; i++) {
      // 當輸入訊息有國家名
      if (event.message.text.includes(countries[i])) {
        dramaRank(event)
        console.log('rank')
        break
        // 當迴圈跑完 輸入內容不超過 50 字時 (排除發送劇情介紹觸發事件)
      } else if (i === 5 && event.message.text.length < 50) {
        dramaInfo(event)
        console.log('info')
      }
    }
  }
})

// const linebotParser = bot.parser()

// app.post('/', linebotParser)

// app.get('/', (req, res) => {
//   res.status(200).send('ok')
// })

// app.
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('動茲動呀動茲動')
})

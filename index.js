import 'dotenv/config'
import linebot from 'linebot'
import korea from './commeands/korea.js'
import drama from './commeands/drama.js'
import flexPopular from './flexs/flexPopular.js'
import flexNew from './flexs/flexNew.js'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

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
      if (event.message.text.includes(countrys[i])) korea(event)
      else if (event.message.text === '人氣排行') event.reply(flexPopular)
      else if (event.message.text === '最新排行') event.reply(flexNew)
      // else if (event.message.text === '使用說明') event.reply(flexNew)

      // 當輸入內容不超過 20 字時 (排除發送劇情介紹觸發事件)
      else if (event.message.text.length < 20) drama(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('動茲動呀動茲動')
})

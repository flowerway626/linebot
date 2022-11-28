import axios from 'axios'
import writejson from '../utils/writejson.js'
import flexOtt from '../flexs/flexOtt.js'

export default async (event) => {
  try {
    console.log(encodeURI(`https://url-detect.robin019.xyz/search?query=${event.message.text.substr(4)}`))
    const { data } = await axios.get(encodeURI(`https://url-detect.robin019.xyz/search?query=${event.message.text.substr(4)}`))
    // console.log(data[0].result[0].href)
    const otts = []
    for (let i = 0; i < data.length; i++) {
      const replyOtt = JSON.parse(JSON.stringify(flexOtt))
      replyOtt.body.contents[0].text = event.message.text.substr(4) + ' OTT 搜尋'
      replyOtt.body.contents[1].text = data[i].ott
      replyOtt.footer.contents[0].action.uri = data[i].result[0].href
      otts.push(replyOtt)
    }
    const reply3 = {
      type: 'flex',
      altText: 'OTT查詢結果',
      contents: {
        type: 'carousel',
        contents: otts
      }
    }
    event.reply(reply3)
    writejson(reply3, 'dramaOtt')
  } catch (error) {
    console.log('ott error')
    // console.error(error)
  }
}
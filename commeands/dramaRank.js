import axios from 'axios'
import * as cheerio from 'cheerio'
import writejson from '../utils/writejson.js'
import flexRank from '../flexs/flexRank.js'

export default async (event) => {
  try {
    const country = event.message.text.substr(0, 2)
    let sort = ''
    event.message.text.includes('人氣') ? sort = '&sort=popular' : sort = ''
    const url = encodeURI(`https://movies.yahoo.com.tw/category.html?region_id=${country}&type_id=1${sort}`)
    // encodeURI
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    console.log(url)
    console.log($)
    const dramas = []
    $('.category-list li').each(function (i) {
      const replyFlex = JSON.parse(JSON.stringify(flexRank))
      replyFlex.body.contents[0].url = $(this).find('.movie_foto img').attr('src')
      replyFlex.body.contents[0].action.text = $(this).find('.movielist_info h2').text().trim()
      replyFlex.body.contents[3].contents[0].contents[0].contents[0].text = $(this).find('.movielist_info h2').text().trim()
      replyFlex.body.contents[3].contents[0].contents[1].contents[0].contents[0].text = $(this).find('.movielist_info .season').text().trim()
      replyFlex.body.contents[3].contents[0].contents[1].contents[1].contents[0].contents[0].text = 'NO.' + (i + 1)
      replyFlex.body.contents[1].contents[0].contents[0].text = event.message.text
      dramas.push(replyFlex)
    })
    const reply = {
      type: 'flex',
      altText: '排行查詢結果',
      contents: {
        type: 'carousel',
        contents: dramas
      }
    }

    await event.reply(reply)
    writejson(reply, 'dramaRank')
    await event.reply('查無資料，請更換檢索條件')
    // return dramaNums
  } catch (error) {
    await event.reply('發生錯誤，請稍後再試')
    console.error(error)
  }
}

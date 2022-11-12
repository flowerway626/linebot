import axios from 'axios'
import * as cheerio from 'cheerio'
import writejson from '../utils/writejson.js'
import flex from '../flex.js'

export default async (event) => {
  const country = event.message.text
  const url = `category.html?region_id=${country}&type_id=1`
  // let dramaName = '月水金火木土'
  // includes()
  try {
    const { data } = await axios.get('https://movies.yahoo.com.tw/' + url)
    const $ = cheerio.load(data)
    const dramaNums = []
    const dramas = []
    if ($('.box_inner').find('ul').text() !== '') {
      $('.category-list li').each(function (i) {
        const replyFlex = JSON.parse(JSON.stringify(flex))
        replyFlex.hero.url = $(this).find('.movie_foto img').attr('src')
        replyFlex.hero.action.text = $(this).find('.movielist_info h2').text().trim()
        replyFlex.body.contents[0].text = $(this).find('.movielist_info h2').text().trim()
        replyFlex.body.contents[1].contents[0].contents[1].text = $(this).find('.movielist_info .season').text().trim()
        dramas.push(replyFlex)
        dramaNums.push({ name: '', num: '' })
        dramaNums[i].name = $(this).find('.movielist_info h2').text().trim()
        dramaNums[i].num = $(this).find('a').attr('href').substr(-5)
      })
      const reply = {
        type: 'flex',
        altText: '查詢結果',
        contents: {
          type: 'carousel',
          contents: dramas
        }
      }
      // console.log(dramaNums)
      event.reply(reply)
      writejson(reply, 'dramas')
    } else event.reply('查無資料，請更換檢索條件')
  } catch (error) {
    event.reply('發生錯誤，請稍後再試')
    console.error(error)
  }
}

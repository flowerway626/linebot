import axios from 'axios'
import * as cheerio from 'cheerio'
import writejson from '../utils/writejson.js'
import flex2 from '../flex2.js'
import korea from './korea.js'

export default async (event) => {
  console.log(korea.dramaNums)
  // // 抓影劇網址編號
  // const country = event.message.text
  // const indexUrl = `category.html?region_id=${country}&type_id=1`
  // // let dramaName = '月水金火木土'
  // // includes()
  // const dramaNums = []
  // try {
  //   const { data } = await axios.get('https://movies.yahoo.com.tw/' + indexUrl)
  //   const $ = cheerio.load(data)
  //   if ($('.box_inner').find('ul').text() !== '') {
  //     $('.category-list li').each(function (i) {
  //       // const replyFlex2 = JSON.parse(JSON.stringify(flex2))
  //       dramaNums.push({ name: '', num: '' })
  //       dramaNums[i].name = $(this).find('.movielist_info h2').text().trim()
  //       dramaNums[i].num = $(this).find('a').attr('href').substr(-5)
  //     })
  //     console.log(dramaNums)
  //   } else event.reply('查無資料，請更換檢索條件')
  // } catch (error) {
  //   event.reply('發生錯誤，請稍後再試')
  //   console.error(error)
  // }

  // 該部影劇詳細資訊
  // try {
  //   let Num = ''
  //   for (let i = 0; i < dramaNums.length; i++) {
  //     if (event.message.text === dramaNums[i].name) { Num = dramaNums[i].num }
  //   }
  //   const { data } = await axios.get('https://movies.yahoo.com.tw/movieinfo_main/' + Num)

  //   const $ = cheerio.load(data)
  //   const dramaMain = []
  //   const replyFlex2 = JSON.parse(JSON.stringify(flex2))
  //   replyFlex2.hero.url = $('.movie_intro_foto').find('img').attr('src')
  //   replyFlex2.body.contents[0].text = $('.movie_intro_info').find('h1').text().replace('\n').trim()
  //   replyFlex2.body.contents[1].contents[0].contents[1].text = $('.movie_intro_info_r').find('span').eq(1).text().substr(5)
  //   replyFlex2.body.contents[1].contents[1].contents[1].text = $('.movie_intro_info_r').find('span').eq(2).text().substr(4)
  //   replyFlex2.body.contents[1].contents[2].contents[1].text = $('.movie_intro_info_r').find('span').eq(3).text().substr(6).trim()
  //   replyFlex2.body.contents[1].contents[3].contents[1].text = $('.movie_intro_list').eq(0).text().substr(3).trim()
  //   dramaMain.push(replyFlex2)

  //   const reply2 = {
  //     type: 'flex',
  //     altText: '查詢結果',
  //     contents: {
  //       type: 'carousel',
  //       contents: dramaMain
  //     }
  //   }
  //   // console.log(dramaMain)
  //   event.reply(reply2)
  //   writejson(reply2, 'dramaMain')
  // } catch (error) {
  //   console.error(error)
  // }
}

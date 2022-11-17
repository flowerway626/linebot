import axios from 'axios'
import * as cheerio from 'cheerio'
import writejson from '../utils/writejson.js'
import flex2 from '../flexs/flex2.js'

export default async (event) => {
  const dramaNums = []
  try {
    // event.reply('查詢中請稍後')
    // 抓影劇網址編號
    const countrys = ['台灣', '韓國', '中國', '美國', '日本', '英國', '泰國', '香港', '西班牙', '法國']
    let url1 = ''
    let url2 = ''
    let dramaNumsEnd = 0
    for (let i = 0; i < countrys.length; i++) {
      url1 = `https://movies.yahoo.com.tw/category.html?region_id=${countrys[i]}&type_id=1`
      url2 = `https://movies.yahoo.com.tw/category.html?region_id=${countrys[i]}&type_id=1&sort=popular`
      const { data } = await axios.get(url1)
      const { data: data2 } = await axios.get(url2)
      const $ = cheerio.load(data)
      const $$ = cheerio.load(data2)
      if ($('.box_inner').find('ul').text() !== '') {
        dramaNums.push({ name: '', num: '' })
        $('.category-list li').each(function () {
          dramaNums.push({ name: '', num: '' })
          dramaNums[dramaNumsEnd].name = $(this).find('.movielist_info h2').text().trim()
          dramaNums[dramaNumsEnd].num = $(this).find('a').attr('href').substr(-5)
          dramaNumsEnd += 1
        })
        dramaNums.push({ name: '', num: '' })
        $$('.category-list li').each(function () {
          dramaNums.push({ name: '', num: '' })
          dramaNums[dramaNumsEnd].name = $$(this).find('.movielist_info h2').text().trim()
          dramaNums[dramaNumsEnd].num = $$(this).find('a').attr('href').substr(-5)
          dramaNumsEnd += 1
        })
      }
      // else event.reply('查無資料，請更換檢索條件')
    }
  } catch (error) {
    event.reply('編號查詢error')
    console.error(error)
  }
  console.log(dramaNums)

  // 該部影劇詳細資訊
  try {
    let Num = ''
    for (let i = 0; i < dramaNums.length; i++) {
      if (event.message.text === dramaNums[i].name) Num = dramaNums[i].num
    }
    console.log(Num)
    console.log('https://movies.yahoo.com.tw/movieinfo_main/' + Num)
    const { data } = await axios.get('https://movies.yahoo.com.tw/movieinfo_main/' + Num)
    const $ = cheerio.load(data)
    const dramaMain = []
    const replyFlex2 = JSON.parse(JSON.stringify(flex2))
    replyFlex2.body.contents[0].contents[0].url = $('.movie_intro_foto img').attr('src')
    // 劇名
    replyFlex2.body.contents[0].contents[1].contents[1].text = $('.movie_intro_info h1').text().replace(/[\n ]/g, '').slice(0, -6)
    // 日期
    replyFlex2.body.contents[0].contents[2].contents[1].text = $('.movie_intro_info_r span').text().includes('播出日期') === true ? $('.movie_intro_info_r span').eq(1).text().substr(5) : '-'
    // 集數
    replyFlex2.body.contents[0].contents[3].contents[1].text = $('.movie_intro_info_r span').text().includes('集數') === true ? $('.movie_intro_info_r span').eq(2).text().substr(4) : '-'
    // 分數
    replyFlex2.body.contents[0].contents[4].contents[1].text = $('.movie_intro_info_r').text().includes('IMDb') === true ? $('.movie_intro_info_r span').eq(3).text().substr(7).trim() : '-'
    // 導演
    replyFlex2.body.contents[0].contents[5].contents[1].text = $('.movie_intro_list').eq(0).text().replace(/[a-zA-Z ()\n-]/g, '').substr(3).trim()
    if ($('.movie_intro_list').length === 2) {
      // 編劇 主演
      replyFlex2.body.contents[0].contents[6].contents[1].text = '-'
      replyFlex2.body.contents[0].contents[7].contents[1].text = $('.movie_intro_list').eq(1).text().replace(/[a-zA-Z ()\n-]/g, '').substr(3).trim()
    } else {
      replyFlex2.body.contents[0].contents[6].contents[1].text = $('.movie_intro_list').eq(1).text().replace(/[a-zA-Z ()\n-]/g, '').substr(3).trim()
      replyFlex2.body.contents[0].contents[7].contents[1].text = $('.movie_intro_list').eq(2).text().replace(/[a-zA-Z ()\n-]/g, '').substr(3).trim()
    }
    // OTT
    replyFlex2.body.contents[0].contents[8].contents[1].text = $('.evaluate_txt_finish').text().trim() === '' ? '-' : $('.evaluate_txt_finish').text().trim()
    // 劇情簡介
    replyFlex2.body.contents[0].contents[9].action.text = $('#story').text().trim().length > 297 ? $('#story').text().trim().slice(0, 297) + '..' : $('#story').text().trim()
    dramaMain.push(replyFlex2)

    const reply2 = {
      type: 'flex',
      altText: '影劇查詢結果',
      contents: {
        type: 'carousel',
        contents: dramaMain
      }
    }
    event.reply(reply2)
    writejson(reply2, 'dramaMain')
    if (Num === '') event.reply('無法查詢或輸入錯誤，請重新輸入')
  } catch (error) {
    console.error(error)
  }
}

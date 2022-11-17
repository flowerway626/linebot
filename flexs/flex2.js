export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'image',
            url: 'https://movies.yahoo.com.tw/i/o/production/movies/May2022/hFGZy15DmOCba46d7qRE-400x600.jpg',
            aspectMode: 'cover',
            size: 'full',
            aspectRatio: '9:12'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'text',
                text: '金田一少年之事件簿',
                size: 'xl',
                weight: 'bold',
                color: '#ffffff'
              },
              {
                type: 'filler'
              }
            ],
            height: '40px'
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '播出日期',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '2022-06-01',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '總集數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '5集',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'IMDb分數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '-',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '導演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '丸谷俊平、木村尚史',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '編劇',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '大石哲也、川邊優子',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '主演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5,
                text: '道枝駿佑、上白石萌歌、澤村一樹'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '串流平台',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: 'Disney+',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '劇情簡介',
                align: 'center',
                size: 'md',
                color: '#E4F2ED',
                offsetTop: '3px'
              }
            ],
            height: '30px',
            borderWidth: '1px',
            borderColor: '#999999',
            action: {
              type: 'message',
              label: 'action',
              text: '金田一一是傳奇私人偵探金田一耕助的外孫，背負著眾人期待，面對市區不斷發生看似離奇的殺人案，擁有超高智商的金田一一屢屢成功破案。雖然金田一一只是一名高中生，卻能憑藉優秀的邏輯推理能力，解決其他偵探無法偵破的案件。原本只有青梅竹馬好友七瀨美雪從旁協助，但後來金田一一的能力引起東京警視廳警部的注意，此後三人攜手合作破案，將罪犯緝拿歸案。...'
            },
            offsetEnd: '0px',
            justifyContent: 'center',
            alignItems: 'center'
          }
        ],
        paddingAll: '0px'
      }
    ],
    backgroundColor: '#456173',
    paddingTop: '5px',
    paddingBottom: '10px'
  }
}

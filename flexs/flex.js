export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '8:10',
        gravity: 'center',
        action: {
          type: 'message',
          label: 'action',
          text: 'drama'
        }
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        position: 'absolute',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          endColor: '#00000000',
          startColor: '#00000099'
        },
        width: '100%',
        height: '40%',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'dramaName',
                    size: 'xl',
                    color: '#ffffff',
                    weight: 'bold'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'season',
                        color: '#a9a9a9',
                        size: 'sm',
                        flex: 0,
                        align: 'end'
                      }
                    ],
                    flex: 0,
                    spacing: 'lg'
                  }
                ]
              }
            ],
            spacing: 'xs'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '20px'
      }
    ],
    paddingAll: '0px'
  }
}

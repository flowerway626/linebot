export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'message',
      label: 'action',
      text: 'hello'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '季別',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
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
                text: '類別',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '戲劇影集',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          }
        ]
      }
    ]
  }
}

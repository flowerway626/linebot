export default {
  type: 'bubble',
  size: 'micro',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '教主的女兒',
        size: 'xs'
      },
      {
        type: 'text',
        text: 'KKTV',
        weight: 'bold',
        size: 'lg'
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'xs',
    contents: [
      {
        type: 'button',
        style: 'primary',
        height: 'sm',
        action: {
          type: 'uri',
          label: 'WEBSITE',
          uri: 'https://www.kktv.me/play/01000564'
        }
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    paddingAll: '5px'
  }
}

export default {
  type: 'text', // ①
  text: '選擇想查詢的國家分類',
  quickReply: { // ②
    items: [
      {
        type: 'action', // ③
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197557.png',
        action: {
          type: 'message',
          label: '台灣',
          text: '台灣 最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5111/5111586.png',
        action: {
          type: 'message',
          label: '韓國',
          text: '韓國 最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197604.png',
        action: {
          type: 'message',
          label: '日本',
          text: '日本 最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197375.png',
        action: {
          type: 'message',
          label: '中國',
          text: '中國 最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197484.png',
        action: {
          type: 'message',
          label: '美國',
          text: '美國 最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
        action: {
          type: 'message',
          label: '英國',
          text: '英國 最新'
        }
      }
    ]
  }
}

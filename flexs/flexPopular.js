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
          text: '台灣 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5111/5111586.png',
        action: {
          type: 'message',
          label: '韓國',
          text: '韓國 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197375.png',
        action: {
          type: 'message',
          label: '中國',
          text: '中國 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197484.png',
        action: {
          type: 'message',
          label: '美國',
          text: '美國 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197604.png',
        action: {
          type: 'message',
          label: '日本',
          text: '日本 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
        action: {
          type: 'message',
          label: '英國',
          text: '英國 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197570.png',
        action: {
          type: 'message',
          label: '香港',
          text: '香港 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197452.png',
        action: {
          type: 'message',
          label: '泰國',
          text: '泰國 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197593.png',
        action: {
          type: 'message',
          label: '西班牙',
          text: '西班牙 人氣'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197560.png',
        action: {
          type: 'message',
          label: '法國',
          text: '法國'
        }
      }
    ]
  }
}

const TelegramBot = require('node-telegram-bot-api');
const { testbutton, againbutton } = require('./option');
const token = '5701713899:AAEWx8scqqT6Ei-aHEbO2bY66EAvke7fkMA'
const BeastFngBestBot = new TelegramBot(token, {polling:true})

chats = {}

const startgame = async (chatId) => {
    await BeastFngBestBot.sendMessage(chatId, 'Выбери любое число от 0 до 10')
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber
    await BeastFngBestBot.sendMessage(chatId, 'Отгадывай', testbutton)
}

/* var options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Some button text 1', callback_data: '1' }],
        [{ text: 'Some button text 2', callback_data: '2' }],
        [{ text: 'Some button text 3', callback_data: '3' }]
      ]
    })
  }; */

BeastFngBestBot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/game', description: 'Мини-игра'}
])
BeastFngBestBot.on('message', (msg) => {
    console.log(msg.text)
})

function start() {
BeastFngBestBot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text === '/start') {
        BeastFngBestBot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/5ce/def/5cedefb6-176c-4d8e-b384-2146f86a86ca/192/3.webp')
        return BeastFngBestBot.sendMessage(chatId, `Добро пожаловать на сервер ${msg.from.first_name}`, testbutton)
    }
    if (msg.text === '/game') {
        return startgame(chatId)
    }
    return BeastFngBestBot.sendMessage(chatId, 'Я нихуя не понял!', testbutton)
    })
}

BeastFngBestBot.on('callback_query', msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === '/again') {
        return startgame(chatId)
    }
    BeastFngBestBot.sendMessage(chatId, `Вы выбрали цифру ${data}`)
    console.log(msg)
})



start()
module.exports = {
    testbutton: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{text:'1', /* url: "https://google.com", */ callback_data:1}],
        [{text:'2', /* url: "https://google.com", */ callback_data:2}],
        [{text:'3', /* url: "https://google.com", */ callback_data:3}]
        ]
    })
},
    againbutton: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
            [{text:'Играть ещё раз', callback_data: '/again'}]
        ]
        })
    }
}
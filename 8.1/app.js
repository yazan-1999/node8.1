// ставил таймера выдает ошибку TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received true пробывал разнымы спосабами  применял setTimeout ;unref,ref; в офицальной документации не написанны уловия времени . Ксожелению работает исючительно таким способом методы {.once;on;prependOnceListener;prependListener;addListener
const EventEmitter = require('events')
//setTimeout (calendar.on('Sunday', ()=>{),1000
const calendar = new EventEmitter()
calendar.on('Sunday', ()=>{//setTimeout()...
  console.log("Yey!! Sunday arrived!!!")
})
calendar.on( "Friday", () => {
  console.log("Yey!! Weekend is HERE!!!")
})

// setTimeout(calendar.emit(setTimeout("Sunday")),1000),1000)
calendar.emit("Friday")
calendar.emit("Sunday")
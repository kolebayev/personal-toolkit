// console.log('hello from Node.js')

// оставить этот файл очень компактным: только подключение
// самого приложения (файл index.js из подкаталога /app, созданного ранее)
require('./app/index')


// инициализирует движок handlebars и устанавливает каталог
// шаблонов в views/layouts. это каталог, в котором будут храниться шаблоны
// const path = require('path')
// const express = require('express')
// const exphbs = require('express-handlebars')

// const app = express()
// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',
//     layoutsDir: path.join(__dirname, 'views/layouts')
// }))
// app.set('view engine', '.hbs')
// app.set('views', path.join(__dirname, 'views'))

// app.listen(3000)
//
// app.get('/', (request, response) => {
//     response.render('home', {
//         name: 'John'
//     })
// })

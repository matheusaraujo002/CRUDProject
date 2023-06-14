const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(80, () => {
    console.log('Servidor rodando...');
    console.log('http://localhost/');
})
const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))

const fakeData = [
    {
        id: 1,
        nome: 'João da Silva',
        endereco: 'Rua Fulano 0543',
        sexo: 'Masculino',
        telefone: '5002-8922',
    },
    {
        id: 2,
        nome: 'Maria da Silva',
        endereco: 'Rua Fulano 2533',
        sexo: 'Feminino',
        telefone: '8922-5002',
    }   
]

app.get('/', (req, res) => {
    /* res.send('Hello World!'); */
    res.render('index')
})

app.get('/clientes', (req, res) => {
    res.render('cliente/cliente', {listaClientes: fakeData})
})

app.listen(80, () => {
    console.log('Servidor rodando...');
    console.log('http://localhost/');
})
const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))
app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))
app.use(express.static('assets/images'))

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

app.get('/clientes/novo', (req, res) => {
    res.render('cliente/formcliente')
})

app.post('/clientes/save', (req, res) => {

    let clienteAntigo = fakeData.find(o => o.id == req.body.id)
    
    if(clienteAntigo != undefined) {
        clienteAntigo.nome = req.body.nome
        clienteAntigo.endereco = req.body.endereco
        clienteAntigo.sexo = req.body.sexo
        clienteAntigo.telefone = req.body.telefone
    }else {
        let maiorId = Math.max(...fakeData.map(o => o.id))
        let novoCliente = {
            id: maiorId + 1,
            nome: req.body.nome,
            endereco: req.body.endereco,
            sexo: req.body.sexo,
            telefone: req.body.telefone
        }
        fakeData.push(novoCliente)
    }
    res.redirect('/clientes')
})

app.get('/clientes/alterar/:id', (req, res) => {
    let id = req.params['id']

    // Procura um cliente pelo id
    let umCliente = fakeData.find(o => o.id == id)

    res.render('cliente/formcliente', {cliente: umCliente})
})

app.get('/clientes/delete/:id', (req, res) => {
    let cliente = fakeData.find(o => o.id == req.params['id'])
    let posicaoCliente = fakeData.indexOf(cliente)
    if (posicaoCliente > -1){
        fakeData.splice(posicaoCliente,1) //remove o cliente        
    }
    res.redirect('/clientes')
})

app.listen(80, () => {
    console.log('Servidor rodando...');
    console.log('http://localhost/');
})
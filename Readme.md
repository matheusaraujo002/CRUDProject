# Projeto CRUD (Create/Read/Update/Delete) em NodeJS

## Configuração do ambiente
- npm init
- npm i express
- npm i body-parser
- npm i bootstrap
- npm i express-handlebars
- npm i jquery

## Configurando o Bootstrap
```
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))
```
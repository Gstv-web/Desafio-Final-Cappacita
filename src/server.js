/* Criar rota para acessar a API / Servir API */

// Iniciar o express (API)
const cors = require('cors')
// Iniciar o CORS (pra aceitar requisições de fora)
const express = require('express')
// Cria o APP Express (API) 
const app = express()
// Inicia conexão com os códigos a serem utilizados pelo get.app
const dataBase = require('./codebase_mysql')
// Coisa o Axios
const axios = require('axios')

// Utiliza o CORS
app.use(cors())

// Imprimir na tela de console que servidor foi iniciado
console.log('Servidor iniciado na porta 3000 http://localhost:3000')

// Define que a API retorna em json
app.use(express.json)

const { MovieDb } = require('moviedb-promise')
const api_key = '60a36549224605e6c30269b94e9eb9d5'




// ------------------------------- ROTAS -------------------------------------
const codeBase = require('./codebase_mysql')

app.get('/', async (req, res) => {
    try {
    const { data } = await MovieDb(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
    return res.json(data)
    } catch {
        console.error(error)
    }
})



app.listen(3000)
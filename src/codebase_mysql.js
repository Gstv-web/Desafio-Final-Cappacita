// Inicia conexão com o Knex
const { databaseConnection } = require('./connection.js')

async function MostrarLista(req, res) {
    const { MovieDb } = require('moviedb-promise')
    const moviedb = new MovieDb('60a36549224605e6c30269b94e9eb9d5')
    let _name = "Alien"
    const movieList = await moviedb.searchMovie({ query: _name})
    console.log("Resultado de busca por " + _name + ": " + movieList.total_results)
    res.satus(200).send(movieList.results.map(x => {return { id: x.id, nome: x.original_title }; }))
}

module.exports = { MostrarLista }
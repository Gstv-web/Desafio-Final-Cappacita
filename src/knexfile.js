/* O Knex que faz a ligação pro MySQL junto com o arquivo connection */

module.exports = {
    client: 'mysql', // banco que será usado
    connection: {
        host: 'localhost',
        user: 'root',
        password:'larevancha666',
        database:'banco_cappacita',
        port: '3306'
    },
    debug: true
}

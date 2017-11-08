var connectionFactory = require('../infra/connectionFactory');
module.exports = function (app) {
    app.get('/', function (request, response) {
        response.render('index');
    });
    app.get('/produtos', function (request, response) {
        var connection = connectionFactory();
        connection.query('select * from produtos', function (err, results) {
            response.render('produtos/tabela', {lista:results});
            // o JSON sendo enviado como resposta é para definição de variáveis.
            // no caso acima, foi exposto para a view tabela.ejs a variável lista.
        });
        connection.end();
    });
    app.get('/tabela', function (request, response) {
        response.render('produtos/lista');
    });
}


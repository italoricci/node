module.exports = function (app) {
    app.get('/produtos', function (request, response) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;
        produtosBanco.lista(connection, function (err, results) {
            response.render('produtos/tabela', {lista: results});
            // o JSON sendo enviado como resposta é para definição de variáveis.
            // no caso acima, foi exposto para a view tabela.ejs a variável lista.
        });
        connection.end();
    });
    app.get('/', function (request, response) {
        response.render('index');
    });
    app.get('/tabela', function (request, response) {
        response.render('produtos/lista');
    });
}


module.exports = function (app) {
    app.get('/', function (request, response) {
        response.render('index');
    });
    app.get('/produtos', function (request, response) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123mudar',
            database: 'casadocodigo',
        });

        connection.query('select * from produtos', function (err, results) {
            response.send(results);
        });

        connection.end();
        // response.render('produtos/lista');
    });

    app.get('/tabela', function (request, response) {
        response.render('produtos/lista');
    });
}


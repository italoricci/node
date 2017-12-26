var express = require('express');
var load = require('express-load')

module.exports = function () {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // carregando as rotas dentro da variavel app
    load('routes', {cwd: 'app'})
        .then('infra') // carregamento da infra apos os routes.
        .into(app);

    return app;
};




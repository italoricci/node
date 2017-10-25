var app = require('./config/express')();
var rotasProdutos = require('./app/routes/routes')(app);

app.listen(3000, function () {
    console.log('Servidor Up!');
});
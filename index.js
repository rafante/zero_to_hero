var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var minhasFuncoes = require('./js/minhas_funcoes');

app.use(bodyParser.json());

app.post('/', function(request, response){
    var parametros = request.body
    var resultado = minhasFuncoes(parametros);
    response.send(JSON.stringify(resultado));
});


//a função listen (listen é ouvir em ingles), faz o server começar a ouvir na porta 8080
app.listen(8080,function(a){
    console.log('rodando na porta 8080');
});

//perceba que ele começou a ouvir na porta 8080, só que ele não tem nenhum tratamento pra
//chamada no método GET no path /, vamos criar um tratamento
//ia falar alguma coisa?nao e que eu dei alt tab
//ah bom vou por um break point aqui e vou rodar como debug
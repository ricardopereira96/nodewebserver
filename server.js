//IMPORTANTE: Ctrl C-para parar o servidor

//Para páginas estáticas

//O que o express faz é servir pedidos (quero aquela pasta e ele dá. quero aquilo que está naquela página e ele dá)
const express = require('express');
//Carregar o módulo. Este tem que ter uma página chamada mesmo "views". O hbs espera sempre ter uma pasta "views"
const hbs = require('hbs');

//a nossa app é uma nova instância do express
const app = express();

app.use(express.static(__dirname + '/public'));
//O que ele usa para fazer as páginas vai ser o hbs a partir de agora. Tem que ter uma página chamada mesmo "views"
app.set('view engine', 'hbs');

//Criar rota. O que executar quando pedir a pasta raiz/chegar um pedido para ir abrir a pasta raiz
//Pedido e resposta (request, response)
app.get('/', (request, response) => {
    response.render('welcome.hbs', {
        title: "Welcome to my site!",
        text: "or not!...",
    });
});

app.get('/about', (request, response) => {
    response.render('welcome.hbs', {
        title: "About",
        text: "about what?!",
    });
});

app.get('/oi', (request, response) => {
    //Mandar resposta (é uma string)
    response.send('<h1>Hello Express!</h1>');
});


/*
app.get('/about', (request, response) => {
    response.send({
        name: 'bruno',
        likes: ['teaching', 'reading', 'hiking']
    });
});*/
/*
app.get('/carochao', (request, response) => {
    var date = new Date().toString();
    var html = `<body><h1>${date}</h1></body>`;

    response.send(html);
});*/
app.get('/carochao', (request, response) => {
    var date = new Date().toString();
    response.render('carochao.hbs', {
        title: "Carochão",
        text: date,
    });
});
//Tem que ser sempre acima de 1024 (porque já estão a ser usadas para outro serviços)
//Portas do IP?
app.listen(3000);

//TPC Formar grupos e decidir o que extrair do darksky. como é que o handle bar faz parcials (parciais). Pensar na extrutura da página e o que vai ficar do lado do cliente e o que vai ficar do lado do servidor.
//boothstrap gestor de página (extraido atravez de um cdm?) getbootstrap.com
//falta criar bases de dados e usar github
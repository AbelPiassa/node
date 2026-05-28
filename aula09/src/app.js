//Importando o express
const express = require('express');
const app = express();// instanciando express
const port = 3000;

//Configurando um middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//configurando o ejs
app.set('view engine', 'ejs');
//configuração opcional
app.set('views', './src/views');

// renderizando a HTML/EJS
app.get('/', (req, res) =>{
    const NOMESISTEMA = "SysHelton";
    res.render('index.ejs', {nome: NOMESISTEMA});     
});

app.get('/carros', (req, res) => { 
    let cars = [
        { id: 1, marca:'GM' ,modelo: 'Corsa'},
        { id: 2, marca:'VW' ,modelo: 'Gol'},
        { id: 3, marca:'TOYOTA' ,modelo: 'Corolla'},
        { id: 4, marca:'VW' ,modelo: 'Gol'},
        { id: 5, marca:'Renault', modelo: 'limâo8'},
       
       
    ]
    res.render('list_carros', {list_carros: cars})
})

app.get('/motos', (req, res) => {
    const motos = [
        {id: 1, marca:'Honda',modelo:'Titan'},
        {id: 2, marca:'Honda',modelo:'Fan'},
        {id: 3, marca:'Bmw',modelo:'1250'},
        {id: 4, marca:'Honda',modelo:'Titan'},
    ]
    res.render('list_motos', {list_motos: motos})
})
//inicializar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
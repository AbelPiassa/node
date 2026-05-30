// essa linha importa bibliotecas necessárias para o funcionamento do servidor, nesse caso, o express
const express = require("express");
// iniciando
const app = express();
const port = 3000;

//Middleware para processar o corpo da requisição
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Rotas da aplicação
app.get('/', (req, res) => {
    console.log("Requisição tipo GET realizada na rota /");
    res.send('<h1>Bem vindo ao sistema XPTO</h1>');
});

app.get('/cadastrocliente', (req, res) => {
    console.log('Requisição tipo GET na rota /cadastrocliente');
    res.send('<h1>Cadastro de Cliente</h1>');
});
//capturando parametro da query
app.get('/buscar', (req, res) => {
    const termoBusca = req.query.termo;
    if(termoBusca){
        console.log('parametro via query: ' + termoBusca);
        res.send(`<h1>Você pesquisou por ${termoDeBusca}`);
    }else{
        res.send('<h1>Termo de busca não fornecido</h1>');
    }

});
//não se deve fazer isso, passar informaçôes via queryParameter
app.get('/login', (req, res) => {
    const pLogin = req.query.login;
    const pSenha = req.query.senha;

    if (pLogin === 'abel' && pSenha ==='12345'){
        return res.send("<h1>Bem vindo Abel</h1>")
    }
    res.send("<h1> Usuario ou senha correta</h1>");
})

app.post('/recebeform',(req, res) => {
    const dados = req.body;
    console.log("Dados vindo do formulário: ", dados)
    res.send("dados enviados!");
});

app.post('/login', (req,res) => {
    const {login, senha} = req.body;
    console.log(`Login: ${login}, Senha ${senha}`);
    if(login ==='Abel' && senha ==='12345'){
        res.status(202).send("<h1>Bem vindo ao sistema</h1><h4>Abel, oque deseja</h4>");
    }else{
        res.status(404).send("<h1>Login e/ou senha senha incorreto</h1>");
    }
})
app.post('/cadastraproduto', (req,res) => {
    const {codigo, nome, preco} = req.body;

    if(codigo && nome && preco){
        res.status(202).send(` <h1> Produto Inserido! </h1><p> Codigo: ${codigo}| Nome: ${nome} | preço: ${preco}</p>`);
    }else{
        res.status(400).send("<h1>Você não informou alugum dos 3 parametros</h1>");
    }

    
});

app.put("/editaonibus", (req,res) => {
    const {numero, linha, lugar} = req.body;
    if(numero && linha && lugar){
        res.status(200).send(`<h1> Busao alterado</h1><p>
            numero: ${numero}| linha${linha} | lugar ${lugar}</p>`);
    }else{
        res.status(400).send("faltou algum parametro");
    
    }
})
// startando o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
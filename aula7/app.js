//import pacote de http
const http = require('http');

const server = http.createServer((req, res)=>{
    res. setHeader('Content-Type', 'text/html; charset=utf-8');

    if(req.url === '/'){
        res.end('<html><head><title> ola mundo </title></head><body><h1>Seja bem vindo</h1></body></html>')

    }else if(req.url === '/cliente'){
        res.end('<h2>Cadastro</h1>')
    }else{
        res.statusCode = 404;
        res.end('<h2>Página não encontrada </h2>')
    }
});

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Servidor rodando na port ${PORT}`)
});
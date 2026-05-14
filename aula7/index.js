const fs = require('fs');

// Exemplo de código Node.js
const nome = "Abel Piassa";

console.log("Seja bem vindo: ", nome);

fs.writeFile('aula07.txt', 'Esse arquivo foi gerado node.js.', (err) => {

    if (err) throw err;
    console.log('Arquivo criado com sucesso');
});

fs.readFile('Aula 07-externo.txt', ' Aqui é um texto simples', 'utf-8', (err, data)=> {
    if(err) throw err;
    console.log( data );
})
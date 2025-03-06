let clientesJSON = `[
    {"nome": "Lucas", "idade": 30, "email": "lucas@email.com"},
    {"nome": "Mariana", "idade": 25, "email": "mariana@email.com"}
    ]`;


const adicionarCliente = (json, nome, idade, email) => {

    const clientes = JSON.parse(json);

    clientes.push({ nome, idade, email });

    return JSON.stringify(clientes, null, 4);


};


const buscarCliente = (json, nome) => {
    const clientes = JSON.parse(json);


    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].nome.toLowerCase() === nome.toLowerCase()) {
            clienteEncontrado = clientes[i];
            break;
        }
    }

    if (clienteEncontrado) {
        return `Cliente encontrado:
Nome: ${clienteEncontrado.nome}
Idade: ${clienteEncontrado.idade}
Email: ${clienteEncontrado.email}`;
    } else {
        return `Cliente com nome "${nome}" não encontrado.`;
    }
};



clientesJSON = adicionarCliente(clientesJSON, "Roberto", 40, "roberto@email.com");
console.log(buscarCliente(clientesJSON, "Mariana"));


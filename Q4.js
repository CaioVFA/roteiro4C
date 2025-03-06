const jsonVendas = `[
    {"produto": "Notebook", "valor": 4500},
    {"produto": "Smartphone", "valor": 2500},
    {"produto": "Tablet", "valor": 1800},
    {"produto": "Monitor", "valor": 1200}
    ]`;

const filtrarVendas = (json, minimo) => {

    let objJS = JSON.parse(json)

    let result = {
        totalVendas: 0,
        vendas:[]
    }

    let arrayvenda = []
    objJS.forEach(venda => {
        if(venda.valor > minimo)
            arrayvenda.push(venda)
    });

    result.vendas = arrayvenda
    result.totalVendas = arrayvenda.length

    return result


};

console.log(filtrarVendas(jsonVendas, 2000));
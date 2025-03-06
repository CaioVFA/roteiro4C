const funcionarios = [
    { nome: "Ana", cargo: "Desenvolvedora", salario: 7000 },
    { nome: "Carlos", cargo: "Gerente", salario: 12000 },
    { nome: "Beatriz", cargo: "Analista", salario: 5000 }
    ];




const gerarRelatorio = (array) => {

    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    let numFunci = array.length
    let soma = 0

    array.forEach(element => {
        soma += element.salario
    });

    let media = soma / numFunci

    let funcionarios = array.map(func => `Nome: ${func.nome} - Cargo: ${func.cargo} - Salário: ${formatarMoeda(func.salario)}`).join("\n");

    return `Relatório de Funcionários
------------------------------------
${funcionarios}
------------------------------------
Total de funcionários: ${numFunci}
Salário médio: ${formatarMoeda(media)}
`
}


console.log(gerarRelatorio(funcionarios));

const numeros = [23, 8, 15, 42, 4, 16];


const processarDados = (numeros) => {

    let soma = numeros[0]
    let maior = numeros[0]
    let menor = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        } else if (numeros[i] < menor) {
            menor = numeros[i]
        }
        soma += numeros[i];
    }

    let media = soma / numeros.length;
    
    let ordenado = numeros.sort(function(a, b){return a-b});

    return {
        media,
        maior,
        menor,
        ordenado
    };

}



console.log(processarDados(numeros));
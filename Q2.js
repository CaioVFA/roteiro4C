const frases = [
    "JavaScript é poderoso!",
    "Callbacks são úteis.",
    "Arrow functions são mais curtas."
    ];


const analisarTexto = (array, callback) => {
    return callback(array)
};


const contarPalavras = (array) => {
    let soma = 0
    for (let i = 0; i < frases.length; i++) {
        let frase = array[i].split(" ")
        soma += frase.length
    }
    return soma
};


const maiorFrase = (array) => {
    let maior = 0
    save = 0
    for (let i = 1; i < frases.length; i++) {
        let frase = array[i].split(" ")
        tamanho = frase.length
        if(tamanho > maior){
            maior = tamanho
            save = i
        }
    }
    return array[save]
};



console.log(analisarTexto(frases, contarPalavras));
console.log(analisarTexto(frases, maiorFrase));
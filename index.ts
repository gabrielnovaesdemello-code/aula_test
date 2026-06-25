export function soma(number1: number, number2: number) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return "Me envie números!";
    }

    return number1 + number2;
}

export function fibonacci(quantity: number) {
    if (quantity === 0) {
        return [];
    }
    if (quantity === 1) {
        return [1];
    }
    if (quantity < 0) {
        return "Me dê um número positivo!";
    }

    if (quantity % 1) {
        return "Me dê um número inteiro!";
    }

    if (quantity > 50) {
        return "Me dê um número menor ou igual a 50!";
    }

    const sequencia = [1, 1];
    for (let i = 2; i < quantity; i++) {
        sequencia.push(sequencia[i - 1]! + sequencia[i - 2]!);
    }
    return sequencia;
}   

export function media(number1: number, number2: number) {

}

export function ehPar(numero: number) {}

export function menor(numero1: number, numero2: number) {}

export function maior(numero1: number, numero2: number) {}

export function aprovado (nota: number) {}

export function categoriaIdade(idade: number) {}

export function contarCaracteres(texto: string, letra: string) {}

export function interver(texto: string) {}

export function contarVogais(texto: string) {}

export function somatorio(numeros: number[]) {}

export function maiorDaLista(numeros: number[]) {}

export function mediaDaLista(numeros: number[]) {}

export function contagemRegressiva (quantidade: number) {}

export function fatorial  (numero: number) {}

export function ehPalindromo (texto: string) {}

export function ehPrimo (numero: number) {}

export function removerDuplicados (texto: string) {}

export function ordemAlfabetica (texto: string) {}

export function contarPalavras (texto: string) {}
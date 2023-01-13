function juntarPalavras(...args){
    alert('Todas as palavras juntas ficam: ' + args.join(''));
}

function lerPalavras(numero){

    var cont = numero;
    var palavras = [];
    while (cont > 0){
        var palavra = prompt('Digite uma palavra: ');
        palavras.push(palavra)
        cont -= 1;
    }

    juntarPalavras(...palavras);
}

function main(){
    var cont = parseInt(prompt('Digite quantas palavras você irá testar: '));
    lerPalavras(cont);
}

main();
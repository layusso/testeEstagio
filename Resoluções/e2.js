function chamaFuncao(func, palavraA, palavraB){
    func(palavraA, palavraB);


}

function menorString(strA, strB){

    if (strA.length > strB.length){
        alert('A menor palavra é: ' + strB);
    }

    else if (strB.length > strA.length){
        alert('A menor palavra é: ' + strA);
    }

    else if (strA.length == strB.length){
        alert('As duas palavras tem o mesmo tamanho');
    }

}

function main(){
    var palavraA = prompt("Digite a primeira palavra: ");
    var palavraB = prompt("Digite a segunda palavra: ");

    chamaFuncao(menorString, palavraA, palavraB);
}

main();
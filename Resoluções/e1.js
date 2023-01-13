function maiorString(strA, strB){

    if (strA.length > strB.length){
        alert('A maior palavra é: ' + strA);
    }

    else if (strB.length > strA.length){
        alert('A maior palavra é: ' + strB);
    }

    else if (strA.length == strB.length){
        alert('As duas palavras tem o mesmo tamanho');
    }

}


function main(){
    var palavraA = prompt("Digite a primeira palavra: ");
    var palavraB = prompt("Digite a segunda palavra: ");

    maiorString(palavraA, palavraB);
}

main();
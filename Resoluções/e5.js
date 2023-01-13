function substituirDigitos(palavra){
    var dict = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
    palavraModificada = "";

    for(var i = 0; i < palavra.length ; i++){
        if (palavra[i] == "3"){
            palavraModificada += dict[3];
        }

        else if (palavra[i] == "4"){
            palavraModificada += dict[4];
        }

        else if (palavra[i] == "1"){
            palavraModificada += dict[1];
        }

        else if (palavra[i] == "5"){
            palavraModificada += dict[5];
        } else{
            palavraModificada += palavra[i];
        }
    }

    alert(palavraModificada);

}


function main(){
    var texto = prompt("Digite um texto: ");
    substituirDigitos(texto);
}

main();
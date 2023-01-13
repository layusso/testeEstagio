function substituirDigitos(texto = ''){
    return texto.replace(/[\d]+/gm,'[removido]')

}

function main(){
    var texto = prompt("Digite um texto: ");
    alert(substituirDigitos(texto))
}

main();
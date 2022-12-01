const numeroRecebido = +(prompt("Digite seu melhor número!"))
if (numeroRecebido%2===0){
    if (numeroRecebido%3===0){
        console.log(`${numeroRecebido} É divisivel por 2 e 3!`)
    }else{
        console.log(`${numeroRecebido} Divide por 2 mas não por 3`)
    }
}else {
    console.log(`${numero} Não se divide por 2 e por 3!`)
}
        
console.log("Número recebido" , numeroRecebido)
console.log("Divisão por 2", numeroRecebido%2===0)
console.log("Divisão por 3", numeroRecebido%3===0)


//Operador logico

const numeroRecebido1 = +(prompt("Digite seu melhor número!"))

if(numeroRecebido1%2===0 && numeroRecebido1%3===0){
    console.log(`${numeroRecebido1} Divide por 2 e por 3!`)
}else {
    console.log(`${numeroRecebido1} Não divide por 2 e por 3!`)
}
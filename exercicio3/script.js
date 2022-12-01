/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
let nome = prompt("Digite seu nome")
let idade = +(prompt("Digite sua idade"))

console.log(nome === "José" ? "Oi Zé" : `Oi ${nome}`)

console.log(idade>=18? "Pode tirar carteira de motorista!": "Ainda não pode tirar carteira")



let a = +(prompt("Digite um número"))
let b = +(prompt("Digite outro número"))


a + b == 20 ? alert("é verdade") : confirm("tem certeza?") 


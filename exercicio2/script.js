let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase().trim();

function naci (){
    switch (nacionalidade){
    case "brasileira":
        console.log("brasileira")
        break;
    case "argentina":
        console.log("argentina")
        break;
    case "uruguaia":
        console.log("uruguaia")
        break;
    case "chilena":
        console.log("chilena")
        break;
    case "colombiana":
        console.log("colombiana")
        break;
    default:
        console.log(`Nacionalidade não encontrada. Tu és ${nacionalidade}`)
    }
}
naci ()
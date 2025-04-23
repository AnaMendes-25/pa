let vel = parseFloat(prompt("Digite a velocidade do veículo"))
let mul = 250

switch (true){
    case (vel > 50 && vel <= 60):
        console.log("Você recebeu uma multa de 15%: "+ (mul*1.15))
        alert("Você recebeu uma multa de 15%: "+ (mul*1.15))
    break;
    case (vel > 60 && vel <= 70):
        console.log("Você recebeu uma multa de 25%: "+ (mul*1.25))
        alert("Você recebeu uma multa de 25%: "+ (mul*1.25))
    break;
    case (vel > 70 && vel <= 80):
        console.log("Você recebeu uma multa de 35%: "+ (mul*1.35))
        alert("Você recebeu uma multa de 35%: "+ (mul*1.35))
    break;
    case (vel > 80):
        console.log("Você recebeu uma multa de 50%: "+ (mul*1.5))
        alert("Você recebeu uma multa de 50%: "+ (mul*1.5))
    break;
    default: 
        console.log("Você não recebeu nenhuma multa")
        alert("Você não recebeu nenhuma multa")
}
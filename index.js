let pesoValor
let alturaValor


function peso () {
    pesoValor = parseFloat(prompt('Digite o seu peso.'))
    console.log(pesoValor)
}

function altura () {
    alturaValor = parseFloat(prompt('Digite sua altura.'))
    console.log(alturaValor)
}

function soma () {
    const imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2)
    console.log(imc)
    alert('IMC = ' + imc)
}

peso()
altura()
soma()
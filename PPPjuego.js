window.onload=function() {
    document.querySelector('button').addEventListener("click", onSubmit);
}

var preguntas = [
    "Opcion Jugador?"
]

function onSubmit(e) {
    e.preventDefault()
    var form = document.querySelector('form')
    for (let i = 0; i < form.children.length; i++) {
        const element = form.children[i];
        if (element.checked) {
            var user = element.value
        }
    } 
    var rnd = Math.floor(Math.random() *  (3 - 0))
    var pc = 'piedra'
    if(rnd == 1){
        pc = 'papel'   
    }
    if(rnd == 2) {
        pc = 'tijera'
    }
   alert(`
   usuario: ${user} 
   computadora: ${pc}`)
   


    if(user == pc){
        alert ("Empate")
    }
    else if(user == "piedra" && pc == "papel"){
        alert ("Perdiste")
    }
    else if(user == "tijera" && pc == "piedra"){
       alert("Perdiste")
    }
    else if(user == "papel" && pc == "tijera"){
       alert("Perdiste")
    }
    else{
        alert("Ganaste")
    }
}
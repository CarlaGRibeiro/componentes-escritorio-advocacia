

//let divSelecionada = document.getElementById(´${btnClicado}´)
let direitas = document.getElementsByClassName('btnAntes');
let esquerdas = document.getElementsByClassName('btnDepois');


console.log(direitas);
console.log(esquerdas);


function rolagemEsquerda(btnClicado){
    let divCard = document.getElementById(btnClicado)
    divCard.classList.remove("cardEsquerda");
    divCard.classList.add("cardDireita");
    console.log("1");

}


function rolagemDireita(btnClicado){

let divCard = document.getElementById(btnClicado)
divCard.classList.remove("cardDireita");
divCard.classList.add("cardEsquerda");
console.log("2");

}
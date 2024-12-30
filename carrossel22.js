

//let divSelecionada = document.getElementById(´${btnClicado}´)
let direitas = document.getElementsByClassName('btnAntes');
let esquerdas = document.getElementsByClassName('btnDepois');


console.log(direitas);
console.log(esquerdas);


function rolagemEsquerda(btnClicado){
    
    let divCard = document.getElementById(btnClicado)
    
    console.log("1");
    
    divCard.classList.add('cardDireita');
    divCard.classList.remove('cardEsquerda');



}


function rolagemDireita(btnClicado){

    let divCard = document.getElementById(btnClicado)

console.log("2");


divCard.classList.add('cardEsquerda');
divCard.classList.remove('cardDireita');



}
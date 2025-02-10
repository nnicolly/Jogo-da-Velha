let blocos = document.querySelectorAll(".quadrado");

let mudar = "X";
let GameOver = false;

blocos.forEach(e => {
    e.innerHTML = ""// Garante que todos os blocos comecem vazios
    e.addEventListener("click", ()=>{
        if(!GameOver && e.innerHTML === ""){
            e.innerHTML = mudar;
            ganhar();
            velha();
            alternarJogador();
        }
    })
});

function alternarJogador(){
    if(mudar === "X"){
        mudar = "O";
    }
    else{
        mudar = "X";
    }
}

function ganhar(){
    let condicoesParaGanhar = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],   
    ]
    for(let i=0; i<condicoesParaGanhar.length; i++){
        let v0 = blocos[condicoesParaGanhar[i][0]].innerHTML;
        let v1 = blocos[condicoesParaGanhar[i][1]].innerHTML;
        let v2 = blocos[condicoesParaGanhar[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            alert(mudar)
        }
    }
}

function velha(){

}
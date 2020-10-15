function recuperainfo(){
    fetch("http://localhost:8088/agencias")
       .then(res => res.json())
       .then(lista => preencheDIV(lista));
}

function preencheDIV(lista){

    var texto="";

    for (i=0; i<lista.length; i++){
        

    }
}
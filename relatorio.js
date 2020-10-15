function carregaInfoRelatorio(){
    var userStr = localStorage.getItem("userSF");
    if (!userStr){
        window.location = "index.html";
    }

    fetch("http://localhost:8088/agencias")
       .then(res => res.json())
       .then(lista => preencheComboBox(lista))
}

function preencheComboBox(lista){

    var txtCombo = `<select id="txtAgencia" class="form-control">`;
    txtCombo = txtCombo + `<option value="-1"> TODOS OS FERIADOS </option>`;
    for (i=0; i<lista.length; i++){
        var agencia = lista[i];
        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}


function recuperarRelatorio(){

    fetch("http://localhost:8088/feriados")
       .then(res => res.json())
       .then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista){
    var rel="";
    var classe="linhaPar"


    for (i=0;i<lista.length; i++){
        var feriado = lista[i];
        if (i%2==0){
            classe = "linhaPar";
        }
        else{
            classe = "linhaIpar";
        }

        rel = rel+ `<div class="row  ${classe}">
                         <div class="col-2"> ${formataData(feriado.dataInicio)} </div>
                         <div class="col-2"> ${formataData(feriado.dataFim)} </div>
                         <div class="col-4"> ${feriado.nome} </div>
                         <div class="col-4"> ${feriado.agencia.numero} - ${feriado.agencia.nome} </div>
                    </div>`;


    }
    document.getElementById("relatorio").innerHTML = rel;
}

function formataData(dataOriginal){
    var ano = dataOriginal.substr(0,4);
    var mes = dataOriginal.substr(5,2);
    var dia = dataOriginal.substr(8,2);

    // console.log(dia+'/'+mes+'/'+ano);

    return dia + "/" + mes + "/" + ano;
}
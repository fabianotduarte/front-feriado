function carregainfocadastro(){
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

    for (i=0; i<lista.length; i++){
        var agencia = lista[i];
        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}

function cadastrarFeriado(){
    var txtAgencia = document.getElementById("txtAgencia").value;
    var txtNome    = document.getElementById("txtNome").value;
    var txtDataIni = document.getElementById("txtDataInicial").value;
    var txtDataFim = document.getElementById("txtDataFim").value;

    console.log("Agencia = "+txtAgencia);
    console.log("Nome    = "+txtNome);
    console.log("Inicio  = "+txtDataIni);
    console.log("Final   = "+txtDataFim);
    console.log("-----------------------------");
}
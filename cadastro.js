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
        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.nome}</option>`;
    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}
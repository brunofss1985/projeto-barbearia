function enviar() {
  let nome = document.getElementById("nomesobrenome").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("telefone").value;
  let contatos = {
    nome: nome,
    email: email,
    tel: tel,
  };
  let nossoContato = document.querySelector(
    'input[name="contato"]:checked'
  ).value;

  var select = document.getElementById("turno");
  var turno = select.options[select.selectedIndex].value;

  if (
    (contatos.nome != "" && contatos.nome != undefined,
    contatos.email != "" && contatos.email != undefined,
    contatos.tel != "" && contatos.tel != undefined)
  ) {
    confirm(
      "Nome: " +
        contatos.nome +
        "\n" +
        "e-mail: " +
        contatos.email +
        "\n" +
        "Tel.: " +
        contatos.tel +
        "\n" +
        "Turno à ser atendido: " +
        turno +
        "\n" +
        "\n" +
        "Entraremos em contato através do seu " +
        nossoContato +
        " para confirmar seu horário." +
        "\n" +
        "Obs: Caso seus dados não estajam corretos aperte CANCELAR ou OK para confirmar."
    );
  } else {
    alert("Favor preencher os campos obrigatórios!");
  }
}

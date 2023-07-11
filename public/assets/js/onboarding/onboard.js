function validarSenha() {
    senha = document.getElementsByName('senha').value;
    senhaC = document.getElementsByName('confirm_senha').value;

    if (senha != senhaC) {
      senhaC.setCustomValidity("Senhas diferentes!");
      return false;
    } else {
      return true;
    }
  }

validarSenha();

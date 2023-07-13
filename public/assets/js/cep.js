(function() {

    const cep = document.querySelector("input[name=cep]");

    cep.addEventListener('blur', e => {
        const value = cep.value.replace(/[^0-9]+/, '');
        const url = `https://viacep.com.br/ws/${value}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(json => {

                if (json.logradouro) {
                    document.querySelector('input[name=rua]').value = json.logradouro;
                    document.querySelector('input[name=bairro]').value = json.bairro;
                    document.querySelector('input[name=cidade]').value = json.localidade;
                    document.querySelector('select[name=uf]').value = json.uf;
                    document.getElementById("invalid-cep").style.display = "none";
                }
                if(json.erro){
                    document.querySelector('input[name=rua]').value = ''
                    document.querySelector('input[name=bairro]').value = ''
                    document.querySelector('input[name=cidade]').value = ''
                    document.querySelector('select[name=uf]').value = ''

                    document.getElementById("invalid-cep").style.display = "none";
                    document.getElementById("invalid-cep").style.display = "block";
                    document.getElementById("invalid-cep").innerHTML = 'CEP digitado é inválido!';
                }
            }).catch(e => document.getElementById("invalid-cep").innerHTML = 'CEP digitado é inválido!');
    });
})();
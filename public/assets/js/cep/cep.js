const cep = document.querySelector('#cep').value;

const url = `viacep.com.br/ws/${cep}/json/`;

cep.addEventListener("blur", (e)=>{
    console.log(e);
})


"use strict"

//https://viacep.com.br/ws/${number}/json/
// focusout
const address = document.querySelector('#endereco');
const neighborhood = document.querySelector('#bairro');
const city = document.querySelector('#cidade');
const state = document.querySelector('#estado');
const cep = document.querySelector('#cep');

const clearForm = () => {
    address.value = "";
    neighborhood.value = "";
    city.value = "";
    state.value = "";
}

const catchCep = () => {
    const cepNumber = Number(cep.value);

    return cepNumber;
}

const verifyCep = async () => {
    try{
        const cepNumber = catchCep();

        if(cepNumber === 0){
            throw new Error('Por favor preencha o campo CEP')
        }
    
        const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);

        const data = await response.json();
        
        return data;
    }catch(err){  
        
        console.log(err.msg)
    }
}

const fillForm = async () =>{
    const data = await verifyCep();
 
    clearForm();

    address.value = data.logradouro;
    neighborhood.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;
}

cep.addEventListener('focusout', fillForm)


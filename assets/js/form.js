function submitForm(event){
    //alert('Mensagem enviada com sucesso. Aguarde retorno em seu e-mail')
    event.preventDefault();
    document.getElementById('message').innerHTML = "Mensagem enviada. &nbsp Aguarde retorno em seu e-mail!"
    document.getElementById('message').style.display = "block";
}

document.getElementById('message').style.display = "none";

document.getElementById('formContact').addEventListener('submit', submitForm)
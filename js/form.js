const form = document.querySelector('form');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');
const recontacter = document.getElementById('recontacter');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("form envoyé");
    console.log("nom : ", nom.value);
    console.log("email : ", email.value);
    console.log("sujet : ", sujet.value);
    console.log("message : ", message.value);
    console.log("recontacter : ", recontacter.value);

    const erreurMessage = document.getElementById('erreurMessage');
    if(message.value.length < 10){
        erreurMessage.textContent = "Texte superieur a 10 characters";
        erreurMessage.style.color = 'red';
        message.style.border = "1px solid red";
    }else {
        erreurMessage.textContent = "";
        erreurMessage.style.color = "transparent";
        message.style.border = "0px solid transparent";
    }
})
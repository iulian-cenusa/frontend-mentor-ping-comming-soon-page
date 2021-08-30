//get elements

let email = document.getElementById('get-email')
let btn = document.getElementById('btn')
let errorMessage = document.getElementById('error')

btn.addEventListener('click', () => {

    const regexEmail = /\S+@\S+\.\S+/;

    if (regexEmail.test(email.value) == false) {

        email.style.borderColor = 'hsl(354, 100%, 66%)';
        errorMessage.style.display = 'block'

    }else{

        email.style.borderColor = 'hsl(223, 100%, 88%)';
        errorMessage.style.display = 'none'

    }

})

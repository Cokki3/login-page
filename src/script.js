let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let alerta = document.querySelector('#alerta')
let login = document.querySelector('#login')

let e;
let s;

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const showFlash = (cor) => {
    alerta.style.color = cor
}
const hideFlash = () => {
    alerta.style.color = 'transparent'
}

login.addEventListener('click', (event) => {
    event.preventDefault()
    e = email.value
    s = senha.value

    if (e.length == 0 && s.length == 0) {
        alerta.innerHTML = 'Dados Incorretos!'
        showFlash('red')
        setTimeout(hideFlash, 1000);
    }
    else if (validateEmail(e) == false || e.length == 0) {
        alerta.innerHTML = 'Email incorreto!'
        showFlash('red')
        setTimeout(hideFlash, 1000);
        
    }
    else if (s.length == 0 || s.length < 8) {
        alerta.innerHTML = 'Senha curta!'
        showFlash('red')
        setTimeout(hideFlash, 1000);
    }
    else {
        email.value = ''
        senha.value = ''
        console.log('LOGADO')
        window.location.href = '#home-page'

    }

})


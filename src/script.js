let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let alerta = document.querySelector('#alerta')
let login = document.querySelector('#login')

// Register
let registerName = document.querySelector('#register-name')
let registerLastname = document.querySelector('#register-lastname')
let registerEmail = document.querySelector('#register-email')
let registerPass = document.querySelector('#register-pass')
let register = document.querySelector('#register')
let alerta2 = document.querySelector('#alerta2')

// Forgot Password
let forgotEmail = document.querySelector('#forgot-email')
let sendCode = document.querySelector('#sendCode') 
let alerta3 = document.querySelector('#alerta3')

// Paginas
let loginPage = document.querySelector('#login-page')
let registerPage = document.querySelector('#register-page')
let homePage = document.querySelector('#home-page')


// Menu
let menu = document.querySelector('#menu')

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
const showFlash2 = (cor) => {
    alerta2.style.color = cor
}
const hideFlash2 = () => {
    alerta2.style.color = 'transparent'
}
const showFlash3 = (cor) => {
    alerta3.style.color = cor
}
const hideFlash3 = () => {
    alerta3.style.color = 'transparent'
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
        // loginPage.style.display = 'none'
        window.location.href = '#home-page'
        email.value = ''
        senha.value = ''
        // console.log('LOGADO')
        menu.style.display = 'none'
        // window.moveTo('#home')

    }

})

register.addEventListener('click', (event) => {
    event.preventDefault()
    n = registerName.value
    lastN = registerLastname.value
    mail = registerEmail.value
    pass = registerPass.value

    // Utilizar switch case
    if (n.length == 0 && lastN.length == 0 && mail.length == 0 && pass == 0) {
        alerta2.innerHTML = 'Preeencha os campos!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000)
    }
    else if (n.length == 0) {
        alerta2.innerHTML = 'Preeencha o nome!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000)
    }
    else if (lastN.length == 0) {
        alerta2.innerHTML = 'Preeencha o sobrenome!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000);
    }
    else if (mail.length == 0) {
        alerta2.innerHTML = 'Preeencha o email!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000)
    }
    else if (validateEmail(mail) == false) {
        alerta2.innerHTML = 'Formato de email inválido!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000)
    }
    else if (pass.length == 0 || pass.length < 8) {
        alerta2.innerHTML = 'Senha curta!'
        showFlash2('red')
        setTimeout(hideFlash2, 1000)
    }
    else {
        alerta2.innerHTML = 'Cadastrado com sucesso!'
        showFlash2('blue')
        setTimeout(hideFlash2, 2000)
        setTimeout(() => { 
            registerName.value     = ''
            registerLastname.value = ''
            registerEmail.value    = ''
            registerPass.value     = ''
            window.location.href = '#login-page' }, 1000
        )
        
    }
})


document.querySelector('#bars').addEventListener('click',() => {
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    }
    else {
        menu.style.display = 'none'
    }
})

sendCode.addEventListener('click',(event) => {
    event.preventDefault()
    if (forgotEmail.value.length ==  0) {
        alerta3.innerHTML = 'Informe um email!'
        showFlash3('red')
        setTimeout(hideFlash3, 1000)
    }
    else if (validateEmail(forgotEmail.value) == false) {
        alerta3.innerHTML = 'Formato de email inválido!'
        showFlash3('red')
        setTimeout(hideFlash3, 1000)
    }
    else {
        forgotEmail.value = ''
        alerta3.innerHTML = 'Código enviado!'
        showFlash3('blue')
        setTimeout(hideFlash3, 2000)
        setTimeout(() => { 
            window.location.href = '#login-page' }, 1000
        )
    }
})
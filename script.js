const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

const fail = (target, message)=>{
    target.parentElement.className = `userinput lose`
    target.parentElement.querySelector('span').innerHTML = message
}

const win = (target)=>{
    target.parentElement.className = `userinput win`
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email.value).toLowerCase())){
        return fail(email, 'Not a valid email')
    }else{
        return win(email)
    }
}

function validatePassword(password){
    let mustInclude = '!@#$%^&*';
    const x = mustInclude.split('')
    if(password.value.length < 8){
        return fail(password, 'Must be at least 8 characters')
    }
    let z = 0
    x.forEach(a=>{
        if(password.value.includes(a)){
            z = 1
        }
    })
    if(z === 1){
        return win(password)
    }else{
        return fail(password, 'Must use at least one symbol')
    }
}

const validateLength = (arrayOfData)=>{
    arrayOfData.forEach(a=>{
        if(a.value.trim()===''){
            console.log(a.value)
            return fail(a, `Requires ${a.id}`)
        }else if(a.value.trim().length <3){
            return fail(a, 'Must be at least 3 characters')
        }else{
            win(a)
        }
    })
}

const passwordMatch = (input1, input2)=>{
    if(input1.value === input2.value){
        return win(input2)
    }else{
        return fail(input2, 'Passwords do not match')
    }
}

document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    validateLength([username, email, password, confirm])
    validateEmail(email)
    validatePassword(password)
    passwordMatch(password, confirm)
})
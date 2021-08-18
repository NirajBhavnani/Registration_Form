const fName = document.getElementById('First Name');
const lName = document.getElementById('Last Name');
const date = document.getElementById('Birthday');
const email = document.getElementById('Email');
const pwd = document.getElementById('Password');
const cpwd = document.getElementById('Confirm Password');
const gender = document.getElementById('Gender');

function showError(input, msg){
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}

function checkRequired(inputArr){
    inputArr.forEach(input =>{
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`);
        }
        else{
            input.parentElement.className = 'formControl success'
        }
    });
}

function checkPass(p, cp){
    if(p.value.trim() !== cp.value.trim()){
        cp.parentElement.className = 'formControl error'
        const small = cp.parentElement.querySelector('small');
        small.innerHTML = 'Password mismatch';
    }
}

function checkEmailRegex(email){
    var emailRegex = /^[A-Za-z_0-9]+[.]?[A-Za-z_0-9]+[@][A-Za-z0-9]+[.](\w){2,3}[.]?(\w?){2,3}$/;
    if(emailRegex.test(email.value.trim()) === false){
        showError(email, 'Enter a valid email');
    }
}

function checkNameRegex(name){
    var nameRegex = /^[a-zA-Z]{2}(\w+)?$/;
    if(nameRegex.test(name.value.trim()) === false){
        showError(name, 'Enter minimum 3 characters');
    }
}

function checkPassRegex(pass){
    var passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if(passRegex.test(pass.value.trim()) === false){
        showError(pass, 'Enter a valid password');
    }
}

const validate = () =>{
    // e.preventDefault();
    console.log('Testing');
    checkRequired([fName, lName, date, email, pwd, cpwd, gender]);
    checkPass(pwd, cpwd);
    checkNameRegex(fName);
    checkNameRegex(lName);
    checkEmailRegex(email);
    checkPassRegex(pwd);
}
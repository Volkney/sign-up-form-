let passwd = document.getElementById('password');
let toggleBtn = document.getElementById('toggleBtn');
let confirmPassword = document.getElementById('confirm_password');

//show hide password//
toggleBtn.onclick = function(){
    if (passwd.type === 'password'){
        passwd.setAttribute('type', 'text');
        confirmPassword.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }
    else {
        passwd.setAttribute('type', 'password');
        confirmPassword.setAttribute('type', 'password');
        toggleBtn.classList.add('hide');
    }
}
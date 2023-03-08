let passwd = document.getElementById('password');
let username = document.getElementById('fname');
let toggleBtn = document.getElementById('toggleBtn');
let confirmPassword = document.getElementById('confirm_password');
let form = document.querySelector('form');
const formItems = document.querySelectorAll('.form-item');
const newHeight = '55px'; // change this to the desired height

// Get the form and submit button
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('.account');


//get list elements
let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let number = document.getElementById('number');
let special = document.getElementById('special');
let length = document.getElementById('length');
let hideBox = document.getElementById('password-validation');
let errors = document.querySelectorAll('error');


//show hide password//
toggleBtn.onclick = function(){

    //toggleBtn.style.background = '#FFF3F6';
    //toggleBtn.style.color = '#2f2e43';
    if (passwd.type === 'password'){
        passwd.setAttribute('type', 'text');
        confirmPassword.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
        
    }
    else {
        passwd.setAttribute('type', 'password');
        confirmPassword.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
        toggleBtn.style.background = '#2f2e43';
    }
}
//change color of eye icon
document.addEventListener('click', function(e){
    var isClickInside = passwd.contains(e.target);
    
    if(!isClickInside){
        toggleBtn.style.background = '#FFF3F6';
        toggleBtn.style.color = '#302E42';
    }

});

function checkPassword(data){
    const lowerRegEx = new RegExp('(?=.*[a-z])');
    const upperRegEx = new RegExp('(?=.*[A-Z])');
    const numberRegEx = new RegExp('(?=.*[0-9])');
    const specialRegEx = new RegExp('(?=.*[!@#\%\^&\*])');
    const lengthRegEx = new RegExp('(?=.{4,16})');

  

    //lower scenario
    if(lowerRegEx.test(data)){
        lowerCase.classList.add('valid');
        hideBox.setAttribute('id','show');
    }
    else{
        lowerCase.classList.remove('valid');
        
    }
    //upper
    if(upperRegEx.test(data)){
        upperCase.classList.add('valid');
        hideBox.setAttribute('id','show');
    }
    else{
        upperCase.classList.remove('valid');
        hideBox.setAttribute('id','password-validation');
        
    }
     //number
     if(numberRegEx.test(data)){
        number.classList.add('valid');
        hideBox.setAttribute('id','show');
    }
    else{
        number.classList.remove('valid');
        hideBox.setAttribute('id','password-validation');
    }
     //special
     if(specialRegEx.test(data)){
        special.classList.add('valid');
        hideBox.setAttribute('id','show');
    }
    else{
        special.classList.remove('valid');
        hideBox.setAttribute('id','password-validation');
    }
    //length
    if(lengthRegEx.test(data)){
        length.classList.add('valid');
        hideBox.setAttribute('id','show');
    }
    else{
        length.classList.remove('valid');
        hideBox.setAttribute('id','password-validation');
    }
}

// Add event listener to password input field
passwd.addEventListener('input', function() {
    checkPassword(this.value);
    formItems.forEach(formItem => {
        formItem.style.height = newHeight;
        formItem.style.transition = '4s ease';
      });
});

//error handling


form.addEventListener('submit', (e) =>{
    let totalErrors = [];

    if(username.value.trim() === " "){
        totalErrors.push("username required");
    }

    if(totalErrors > 0){
        e.preventDefault();
        errors.toggleAttribute('hidden');
        errors.innerHTML = totalErrors.join(', ');
    }
});


//transition motion for tags
function changeHeight(){
    formItems.forEach(formItem => {
        formItem.style.height = newHeight;
      });
}



const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const emailError = document.querySelector('.error.tres');
const phoneError = document.querySelector('.error.cuatro');

// Add event listeners to email and phone input fields
emailInput.addEventListener('input', checkEmailFormat);
phoneInput.addEventListener('input', checkPhoneFormat);

function checkEmailFormat() {
  const emailValue = emailInput.value;
  const emailRegex = /^\S+@\S+\.\S+$/;
  
  if (!emailRegex.test(emailValue)) {
    // Update error message and styling if email is not in the correct format
    emailError.textContent = 'Please enter a valid email address';
    changeHeight();
    emailError.style.display = 'inline-block';
  } else {
    // Hide error message if email is in the correct format
    emailError.style.display = 'none';
  }
}

function checkPhoneFormat() {
  const phoneValue = phoneInput.value;
  const phoneRegex = /^\d{10}$/;
  
  if (!phoneRegex.test(phoneValue)) {
    // Update error message and styling if phone number is not in the correct format
    phoneError.textContent = 'Please enter a valid 10-digit phone number';
    changeHeight();
    phoneError.style.display = 'inline-block';
  } else {
    // Hide error message if phone number is in the correct format
    phoneError.style.display = 'none';
  }
}

  
  
  
  
  
  
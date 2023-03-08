let passwd = document.getElementById('password');
let username = document.getElementById('fname');
let toggleBtn = document.getElementById('toggleBtn');
let confirmPassword = document.getElementById('confirm_password');
let form = document.querySelector('form');

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
// Add event listener to the password field
passwd.addEventListener('focus', function(){
    toggleBtn.style.background = '#FFF3F6';
    toggleBtn.style.color = '#302E42';
});

passwd.addEventListener('blur', function(){
    toggleBtn.style.background = '';
    toggleBtn.style.color = '';
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
});


//error handling
const formItems = document.querySelectorAll('.form-item');


// Get the form and submit button
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('.account');

//transition motion for tags
const originalHeight = '45px';
const newHeight = '55px'; // change this to the desired height

function changeHeight(formItem, isExpanded) {
  formItem.style.height = isExpanded ? newHeight : originalHeight;
  formItem.style.transition = 'height 0.5s ease';
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
    changeHeight(emailInput.parentElement, true);
    emailError.style.display = 'inline-block';
  } else {
    // Hide error message if email is in the correct format
    emailError.style.display = 'none';
    changeHeight(emailInput.parentElement, false);
  }
}

function checkPhoneFormat() {
  const phoneValue = phoneInput.value;
  const phoneRegex = /^\d*$/;
  
  if (!phoneRegex.test(phoneValue)) {
    // Update error message and styling if phone number is not in the correct format
    phoneError.textContent = 'Please enter only numbers';
    changeHeight(phoneInput.parentElement, true);
    phoneError.style.display = 'inline-block';
  } else if (phoneValue.length !== 10) {
    // Update error message and styling if phone number is not the correct length
    phoneError.textContent = 'Please enter a valid 10-digit phone number';
    changeHeight(phoneInput.parentElement, true);
    phoneError.style.display = 'inline-block';
  } else {
    // Hide error message if phone number is in the correct format
    phoneError.style.display = 'none';
    changeHeight(phoneInput.parentElement, false);
  }
}
//confirm password
const error5 = document.querySelector('.error.cinco');

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === '') {
      error5.textContent = '';
      error5.hidden = true;

      return;
    }
    if (passwd.value !== confirmPassword.value) {
      error5.textContent = 'Password does not match';
      changeHeight(error5.parentElement, true);
      error5.hidden = false;
    } else {
      error5.textContent = '';
      error5.hidden = true;
    }
  });


  //disable submit button

  function checkFormValidity() {
    const inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        submitBtn.disabled = true;
        return;
      }
    }
    submitBtn.disabled = false;
  }
  
  // Add event listeners to all form inputs
  form.addEventListener('input', checkFormValidity);
  
  // Disable the submit button by default
  submitBtn.disabled = true;
  
  
  
  
  



  
  
  
  
  
  
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const socialSecurityNumber = document.getElementById('socialSecurityNumber');
const emailInformation = document.getElementById('emailInformation');
const userName = document.getElementById('userName');
const passwordField = document.getElementById('passwordField');


const firstNameHandler = function(e) {
  /^[A-Z][a-z]+$/.test(e.target.value) 
  ? document.getElementById('fnHelp').className = "greenText" 
  : document.getElementById('fnHelp').className = "redText"
}

const lastNameHandler = function(e) {
  /^[A-Z][a-z]+$/.test(e.target.value) 
  ? document.getElementById('lnHelp').className = "greenText" 
  : document.getElementById('lnHelp').className = "redText"
}

const socialSecurityHandler = function(e) {
  /^[\d]{3}-[\d]{2}-[\d]{4}|[\d]{3},[\d]{2},[\d]{4}|[\d]{9}$/g.test(e.target.value)
  ? document.getElementById('snHelp').className = "greenText" 
  : document.getElementById('snHelp').className = "redText"
}

const emailHandler = function(e) {
  /[\w]+@[\w]+.com|[\w]+@[\w]+.org|[\w]+@[\w]+.net/g.test(e.target.value)
  ? document.getElementById('eiHelp').className = "greenText" 
  : document.getElementById('eiHelp').className = "redText"
}

const userNameHandler = function(e) {
  /^[\w]{6,11}\d$/.test(e.target.value)
  ? document.getElementById('unHelp').className = "greenText" 
  : document.getElementById('unHelp').className = "redText"
}

const passWordHandler = function(e) {
  // /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value) && /[!@#$%^&*]/.test(e.target.value) && /\d/.test(e.target.value) && /^[\w]{9,15}$/.test(e.target.value)
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){9,15}$/.test(e.target.value)
  ? document.getElementById('pwHelp').className = "greenText" 
  : document.getElementById('pwHelp').className = "redText"
}

firstName.addEventListener('input', firstNameHandler);
lastName.addEventListener('input', lastNameHandler);
socialSecurityNumber.addEventListener('input', socialSecurityHandler);
emailInformation.addEventListener('input', emailHandler);
userName.addEventListener('input', userNameHandler);
passwordField.addEventListener('input', passWordHandler);
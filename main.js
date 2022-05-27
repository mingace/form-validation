const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

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

firstName.addEventListener('input', firstNameHandler);
lastName.addEventListener('input', lastNameHandler);


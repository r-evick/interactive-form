/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
Code by: Ryan Evick
*/

document.addEventListener('DOMContentLoaded', () => {  //allows JS to run no matter where it's placed in HTML
  
    
/*
puts focus state on name field upon page load
*/
const nameInput = document.getElementById('name');
nameInput.focus();


/*
hide other job role field unless selected
*/
const jobRoleOther = document.getElementById('other-job-role');
const jobRoleInput = document.getElementById('title');

jobRoleInput.addEventListener('change', (e) => {
  const selectedJob = e.target.value;
  
  if (selectedJob === 'other') {
      jobRoleOther.style.display = 'block';
  } else {
      jobRoleOther.style.display = 'none';
  }
});

jobRoleOther.style.display = 'none';


/*
ensures color selection is associated with the proper theme
*/
const shirtDesign = document.getElementById('design');
const colorInput = document.getElementById('color');
const colors = color.children;
colorInput.disabled = true;  //found disable snipet at https://www.qodo.co.uk/blog/javascript-enabling-and-disabling-form-field-elements/ 

shirtDesign.addEventListener('change', (e) => {
  const selectedTheme = e.target; 
  colorInput.disabled = false;

  for (let i = 0; i < colors.length; i++ ) {
      let shirtTheme = colors[i].getAttribute('data-theme');
  
      if (selectedTheme.value === shirtTheme) {
          colors[i].hidden = false;  
      }
      if (selectedTheme.value !== shirtTheme) {
        colors[i].hidden = true;  
      }
   }
});


/*
updates total cost to be sum of items selected
*/
const activities = document.getElementById('activities');
let cost = document.getElementById('activities-cost');
let totalCost = 0; //starting cost is $0 until an activity is selected

activities.addEventListener('change', (e) => {
    const checkbox = e.target; 
    const activityCost = e.target.getAttribute('data-cost'); 

    if (checkbox.checked) {
        totalCost += +activityCost;   
    } else {
        totalCost -= +activityCost;
    }
    
    cost.innerHTML = `Total: $${totalCost}`
});


/*
credit card set as default payment in payment info section,
and payment method chosen is only one visible in UI
*/
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.hidden = true;
bitcoin.hidden = true;
payment.value = 'credit-card';

payment.addEventListener('change', (e) => {
    const paymentMethod = e.target.value; 
    
    if (paymentMethod === 'credit-card') {
        paypal.hidden = true;
        bitcoin.hidden = true;
        creditCard.hidden = false;
    }
    if (paymentMethod === 'paypal') {
        creditCard.hidden = true;
        bitcoin.hidden = true;
        paypal.hidden = false;
    } 
    if (paymentMethod === 'bitcoin') {
        creditCard.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    }
});

/*
form validation, checks if the required information is valid
*/

//helper functions check for validation
const nameValidator = () => {
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value);
    
    return nameIsValid;
}

const email = document.getElementById('email'); 
const emailValidator = () => {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
    
    return emailIsValid;
}

const registerValidator = () => {
    const registerIsValid = totalCost > 0;
    
    return registerIsValid;
}

const creditCardValidator = () => {
    const creditCardIsValid = /^[0-9]{13,16}$/g.test(creditCardNumber.value);
    
    return creditCardIsValid;
}
const zipCodeValidator = () => {
    const zipCodeIsValid = /^\d{5}$/.test(zipCode.value);
    
    return zipCodeIsValid;
}
const cvvValidator = () => {
    const cvvIsValid = /^\d{3}$/.test(cvv.value);
    
    return cvvIsValid;
}


//adds or removes 'valid' and 'not-valid' class name for error notifications
function invalid(e) {
    const parentElement = e.parentElement;
    
    parentElement.classList.add('not-valid');
    parentElement.classList.remove('valid');
    parentElement.lastElementChild.style.display = 'block';
}
function valid(e) {
    const parentElement = e.parentElement;
    
    parentElement.classList.add('valid');
    parentElement.classList.remove('not-valid');
    parentElement.lastElementChild.style.display = 'none';
}

/*
checks that all required info is valid on form submit
*/

const form = document.querySelector('form');
const nameHint = document.getElementById('name-hint');
const emailHint = document.getElementById('email-hint');
const activitiesHint = document.getElementById('activities-hint');
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');

form.addEventListener('submit', (e) => {

    if (!nameValidator()) {
        if (nameInput.value.length > 0) {
            nameHint.innerHTML = `Sorry, came can't contain numbers or special characters`;
        } else if (nameInput.value.length === 0) {
            nameHint.innerHTML = `Sorry, name field can't be left blank`;
        }
        invalid(nameInput);
        e.preventDefault();
    } else {
        valid(nameInput);
    }
    
    if (!emailValidator()) {
        invalid(email);
        emailHint.innerHTML = `
        Email address must be formatted correctly.<br>
        Example: <i>name@email.com</i>
        `;
        e.preventDefault();
    } else {
        valid(email);
    }
    
    if (!registerValidator()) {
        invalid(activitiesHint);
        activitiesHint.style.display = 'block';
        activitiesHint.innerHTML = 'Please choose at least one activity from above';
        e.preventDefault();
    } else {
        valid(activitiesHint);
    }

    if (!creditCardValidator()) {
        invalid(creditCardNumber);
        e.preventDefault();
    } else {
        valid(creditCardNumber);
    }

    if (!zipCodeValidator()) {
        invalid(zipCode);
        e.preventDefault();
    } else {
        valid(zipCode);
    }

    if (!cvvValidator()) {
        invalid(cvv);
        e.preventDefault();
    } else {
        valid(cvv);
    }
});








});   
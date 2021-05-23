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




});   
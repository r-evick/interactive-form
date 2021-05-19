/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
Code by: Ryan Evick
*/

document.addEventListener('DOMContentLoaded', () => {  //allows JS to run no matter where it's placed in HTML
    
/*
puts focus state on name field upon page load
*/
const nameInput = document.getElementById("name");
nameInput.focus();

/*
hide other job role field unless selected
*/
const jobRoleOther = document.getElementById("other-job-role");
const jobRoleInput = document.getElementById("title");

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
const shirtDesign = document.getElementById("design");
const colorInput = document.getElementById("color");
const colors = color.children;
colorInput.disabled = true;  //found disabled snipet at https://www.qodo.co.uk/blog/javascript-enabling-and-disabling-form-field-elements/ 

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




});   
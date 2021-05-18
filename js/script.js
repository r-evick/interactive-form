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










});   
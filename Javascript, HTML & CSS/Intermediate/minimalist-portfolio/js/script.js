// Todos

// CSS 

// (X) Add Update my projects in the portfolio repository;
// (X) Update the portfolio page;
// (X) Make the Form work;



// JavaScript

// (V) Show the navbar 
// (V) Toggle the class with "display: none" after the transition is over
// (X) Make the script work\

   

       /******************* Selectors *******************/
//         const body = document.body;
// const topNavLinks = document.querySelectorAll("#nav-list li a");
const menuCheckbox = document.querySelector("input#menu-checkbox");
const menuIcons = document.querySelector("label.menu-icons");
const form = document.getElementById("contact-form");

        /******************* Event Listeners *******************/

menuCheckbox.addEventListener('change', toggleIcon);
// menuIcons.addEventListener('click', toggleIcon);

        /******************* Functions *******************/

// Active link function 

// for (var i = 0; i < topNavAnchors.length; i++) {  

//         topNavAnchors[i].addEventListener("click", function(e) {  

//                 // Get all the elements that have the class "active"   
//                 const current = document.querySelectorAll(".active");  
        
//                 if (current.length > 0) {
//                         for(let i = 0; i < current.length; i++) {
//                                 // Remove the "active" class from all elements 
//                                 current[i].classList.remove('active');
//                         }
//                 }
//                 this.className += " active";
//          });
// }




function toggleIcon() {
        const burgerIcon = document.querySelector('#burger-icon');
        const closeIcon = document.querySelector('#close-icon');

        console.log('worked')

        if (menuCheckbox.checked) {
                burgerIcon.classList.add('element-none');
                closeIcon.classList.remove('element-none');
                // console.log('1-worked')
        }
        else {
                burgerIcon.classList.remove('element-none');
                closeIcon.classList.add('element-none');
                // console.log('2-worked')
        }
}



// Page transition SWUP library
const swup = new Swup();



// Form function 
// async function handleSubmit(event) {
//   event.preventDefault();
//   const status = document.getElementById("my-form-status");
//   const data = new FormData(event.target);
//   fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//                 'Accept': 'application/json'
//     }
//   }).then(response => {
//         status.classList.add('success');
//         status.innerHTML = "E-mail enviado!";
//         form.reset()
//   }).catch(error => {
//         status.classList.add('error');
//         status.innerHTML = "Oops! Houve um problema.";
//   });
// }
// form.addEventListener("submit", handleSubmit);

// var form = document.getElementById("my-form");
    
// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   }).then(response => {
//     status.innerHTML = "Thanks for your submission!";
//     form.reset()
//   }).catch(error => {
//     status.innerHTML = "Oops! There was a problem submitting your form"
//   });
// }
// form.addEventListener("submit", handleSubmit)
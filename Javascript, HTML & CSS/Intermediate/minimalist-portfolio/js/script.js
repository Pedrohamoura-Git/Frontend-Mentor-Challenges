// Todos
// Make the script work
// Show the navbar 
// Toggle the class with "display: none" after the transition is over

   

       /******************* Selectors *******************/
const menuCheckbox = document.querySelector("input#menu-checkbox");
const menuIcons = document.querySelector("label.menu-icons");
const form = document.getElementById("contact-form");

        /******************* Event Listeners *******************/
menuCheckbox.addEventListener('change', toggleIcon);
// menuIcons.addEventListener('click', toggleIcon);

        /******************* Functions *******************/

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
//         status.innerHTML = "Oops! Houve um problema."
//   });
// }
// form.addEventListener("submit", handleSubmit);


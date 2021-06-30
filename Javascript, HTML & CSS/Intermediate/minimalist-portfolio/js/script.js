// Todos
// Make the script work
// Show the navbar 
// Toggle the class with "display: none" after the transition is over

   

       /******************* Selectors *******************/
const menuCheckbox = document.querySelector("input#menu-checkbox");
const menuIcons = document.querySelector("label.menu-icons");

        /******************* Event Listeners *******************/
menuCheckbox.addEventListener('change', toggleIcon);
// menuIcons.addEventListener('click', toggleIcon);

        /******************* Functions *******************/

function toggleIcon() {
        const burgerIcon = document.querySelector('#burger-icon');
        const closeIcon = document.querySelector('#close-icon');

        // console.log('worked')

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

// Shows the mobile menu 
// function showMenu() {
//     const navList = document.querySelector("#nav-list");

//     navList.addEventListener("transitionend", () => {
//         navList.classList.toggle("element-none");
//         console.log("1 - worked!")
//     })

//         // // Loads and shows the element 
//         // if(menuCheckbox.checked) {
//         //     // Wait until the transition ends to apply the styles 
            
//         // }
//         // // Prevents the element to be loaded by the page
//         // else {
//         //     navList.addEventListener("transitionend", () => {
//         //         navList.classList.toggle("element-none");
//         //         console.log("2 - worked!")
//         //     })
//         // }
// }


// Todos
// Make the script work
// Show the navbar 
// Toggle the class with "display: none" after the transition is over

   

       /******************* Selectors *******************/
const menuCheckbox = document.querySelector("#burger-cbx");
const menuIcons = document.querySelector(".burger-icons");

        /******************* Event Listeners *******************/
menuCheckbox.addEventListener('click', showMenu);
// menuIcons.addEventListener('click', showMenu);

        /******************* Functions *******************/

// Shows the mobile menu 
// function showMenu() {
//     const navList = document.querySelector("#nav-list");


//         // Loads and shows the element 
//         if(menuCheckbox.checked) {
//             // Wait until the transition ends to apply the styles 
//             navList.addEventListener("transitionend", () => {
//                 navList.style.display = 'block';
//                 console.log("1 - worked!")
//             })
//         }
//         // Prevents the element to be loaded by the page
//         else {
//             navList.addEventListener("transitionend", () => {
//                 navList.style.display = 'none';
//                 console.log("2 - worked!")
//             })
//         }
// }
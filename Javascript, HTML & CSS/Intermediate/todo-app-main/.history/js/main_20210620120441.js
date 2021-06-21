        /******************* Selectors *******************/

const todoInput = document.querySelector(".todo-input");
const enterButton = document.querySelector(".enter-button");
const todoList = document.querySelector(".todo-list");
const filterList = document.querySelector(".filter-list")
const searchBtn = document.querySelector("#search")
const activeBtn = document.querySelector(".active-btn")

        /******************* Event Listeners   *******************/

todoInput.addEventListener('keyup', keyEnter);
enterButton.addEventListener('click', clickEnter);
todoList.addEventListener('click', removeItem);
todoList.addEventListener('click', completeItem);
searchBtn.addEventListener('click', searchBar);
// filterList.addEventListener('click', filterItems);
activeBtn.addEventListener('click', filterActive);



        /******************* Global Variables   *******************/

let cont = 0;



        /******************* Functions *******************/



// Form Validation if the user presses the "Enter" Key
function keyEnter(event1) {

    event1.preventDefault();

    if(event1.key === "Enter" && todoInput.value !== "") {
        addItem();
    }

    else if(event1.key === "Enter" && todoInput.value === "") {
        alert("To create an item, the 'new todo' field cannot be empty.");
    }
}

// Form Validation if the user click on the "Enter" button
function clickEnter(event2) {
    
    event2.preventDefault();

    if(todoInput.value !== "") {
        addItem();
    }

    else {
        alert("To create an item, the 'new todo' field cannot be empty.");
    }
}

        

// Creates a new todo item 
function addItem(e) {
// This cont will be used to add a new ID to the todo-item 
    cont++;

    // Create a "todo-item" li 
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item", "filter-all");

    const completedButton = document.createElement('button');
    completedButton.classList.add('check-border');
    todoLi.appendChild(completedButton);

    // Create a li 
    const addText = document.createElement("p");
    addText.innerText = `${todoInput.value}`; // Just a test 
    addText.classList.add("todo-text");
    todoLi.appendChild(addText);     

    // Create a trash mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<img src="images/icon-cross.svg" alt="cross icon" width="15px" height="15px">';
    trashButton.classList.add('delete-btn');
    todoLi.appendChild(trashButton);

    // Append to list 
    todoList.appendChild(todoLi);

    // Clear To do INPUT VALUE 
    todoInput.value = '';

}

// Remove item 
function removeItem(e) {
// If the user clicks on the delete button 
    if(e.target.classList.contains('delete-btn')) {
        if(confirm("Are You Sure?")) {
// Selects the button parent: the li with the class "todo-item" 
            let li = e.target.parentElement;
// Remove the li
            todoList.removeChild(li);
        }
    }
}


function completeItem(e) {

    var btn = e.target;

// Add the checked icon
    if(btn.classList.contains("check-border")) {
        console.log(1);
        btn.classList.remove("check-border");
        btn.classList.add("checked-btn");
        btn.innerHTML = '<img src="./images/icon-check.svg" alt="Icon check" class="icon-check">';
        btn.nextSibling.classList.add("checked-text");

        // Add the "filter-completed" class 
        btn.parentElement.classList.add("filter-completed");
        btn.parentElement.classList.remove("filter-active");
    }


// Remove the checked icon and add the border
    else if(btn.classList.contains("checked-btn")) {
        console.log(2);

        
        btn.classList.add("check-border");
        btn.classList.remove("checked-btn");
        btn.innerHTML = '';
        btn.nextSibling.classList.remove("checked-text");

        // Add the "filter-active" class 
        btn.parentElement.classList.add("filter-active");
        btn.parentElement.classList.remove("filter-completed");
    }
}

function searchBar(e) {
    // let btn = e.target;

    // alert("Esse mesmo!")


    let newTodo = document.querySelector(".new-todo");

    if(newTodo.classList.contains('hidden')) {
        newTodo.classList.remove('hidden');
    }

    else {
        newTodo.classList.add('hidden');

    }
}


// function filterItems(e) {
//     // convert to lowercase 
//     let text = e.target.value.toLowerCase();
//     console.log(text);
// }

function filterActive(e) {
    let todoItems = document.querySelectorAll(".todo-item");
    console.log(todoItems)


    // if(todoItems.classList.contains("filter-completed")) {
    //     todoItems.style.display = "";
    // }
}

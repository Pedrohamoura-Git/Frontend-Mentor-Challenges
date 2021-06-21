        /******************* Selectors *******************/

const todoInput = document.querySelector(".todo-input");
const enterButton = document.querySelector(".enter-button");
const todoList = document.querySelector(".todo-list");

// // This element will exist when the first item is added 
// const contText = document.querySelector(".cont");

const searchBtn = document.querySelector("#search")
const filterList = document.querySelector(".filter-list")

        /******************* Event Listeners   *******************/
// document.addEventListener('DOMContentLoaded', getTodos);
todoInput.addEventListener('keyup', keyEnter);
enterButton.addEventListener('click', clickEnter);
todoList.addEventListener('click', removeItem);
todoList.addEventListener('click', completedItem);
searchBtn.addEventListener('click', searchBar);
// filterList.addEventListener('click', searchItems);
filterList.addEventListener('click', filterBtn);

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
    // To know how many items there are in the list 
    cont++;
    console.log(cont);

    // Create a "todo-item" li 
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item", "filter-active");

    const completedButton = document.createElement('button');
    completedButton.classList.add('check-border');
    todoLi.appendChild(completedButton);

    // Create a li 
    const addText = document.createElement("p");
    addText.innerText = todoInput.value;
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

    // Remove the cont div
    if(cont === 0) {
        const todoContainer = document.querySelector("#todo-container");
        
        todoContainer.removeChild(itemCont);
    }

    else {
        // Create the cont div
        if(cont === 1) {
            const todoContainer = document.querySelector("#todo-container");
            
            const itemCont = document.createElement('div');
            itemCont.classList.add('items-cont');
            itemCont.innerHTML = `<p class="cont">${cont} item left</p><button class="clear-completed">Clear Completed</button>`;
            
            todoContainer.appendChild(itemCont);
        }

        else {
            updateCont(cont);
        }
    }

    
}

// Save the text inside an array in the local Storage 
// saveItemLocalStorage(todoInput.value);

// Add the styles for the completed button and text 
function completedItem(e) {

    var btn = e.target;

    // Item Checked / Completed
    if(btn.classList.contains("check-border")) {
        // update the active items cont  
        updateCont(cont--);


        btn.classList.remove("check-border");
        btn.classList.add("checked-btn");
        btn.innerHTML = '<img src="./images/icon-check.svg" alt="Icon check" class="icon-check">';
        btn.nextSibling.classList.add("checked-text");

        // Add the "filter-completed" class 
        btn.parentElement.classList.add("filter-completed");
        btn.parentElement.classList.remove("filter-active");
    }


    // Just the border
    else if(btn.classList.contains("checked-btn")) {
        // update the active items cont  
        updateCont(cont++);

        btn.classList.add("check-border");
        btn.classList.remove("checked-btn");
        btn.innerHTML = '';
        btn.nextSibling.classList.remove("checked-text");

        // Add the "filter-active" class 
        btn.parentElement.classList.add("filter-active");
        btn.parentElement.classList.remove("filter-completed");
    }
}

// Removes the todo item 
function removeItem(e) {
    if(e.target.classList.contains('delete-btn')) {
        if(confirm("Are You Sure?")) {
            let li = e.target.parentElement;

            // Animation
            li.classList.add("item-fall");

            //Remove the item after the animation ends
            li.addEventListener('transitionend', () => {
                todoList.removeChild(li);
            });
        }
    }
}

// update the active items cont  
function updateCont(cont) {
    contText = document.querySelector(".cont");
    contText.innerHTML = `${cont} items left`;
}


// Shows the search Bar 
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

// function searchItems(e) {
//     // convert to lowercase 
//     let text = e.target.value.toLowerCase();
//     console.log(text);
// }


// Filter the items based on the button value 
function filterBtn(e) {
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach(function(item) {
        switch(e.target.value) {
            case "all":
                item.style.display = "flex";
                break;
        
            case "completed":
                if(item.classList.contains("filter-completed")) {
                    item.style.display = "flex";
                }
                
                else {
                    item.style.display = "none";
                }
                break;
        
            case "active":
                if(item.classList.contains("filter-active")) {
                    item.style.display = "flex";
                }
                
                else {
                    item.style.display = "none";
                }
                break;
        }
    });
}































// Save the items in the local storage 
// function saveItemLocalStorage(todo) {
//     let todos;
    
//     // Check if there are any todos in the local storage already
//     if(localStorage.getItem('todos') === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }


// function getTodos() {
//     let todos;

//     // Check if there are any todos in the local storage already
//     if(localStorage.getItem('todos') === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.forEach(function(todo) {
//          // Create a "todo-item" li 
//     const todoLi = document.createElement("li");
//     todoLi.classList.add("todo-item", "filter-active");

//     const completedButton = document.createElement('button');
//     completedButton.classList.add('check-border');
//     todoLi.appendChild(completedButton);

//     // Create a li 
//     const addText = document.createElement("p");
//     addText.innerText = todo;
//     addText.classList.add("todo-text");
//     todoLi.appendChild(addText);     

//     // Create a trash mark button
//     const trashButton = document.createElement('button');
//     trashButton.innerHTML = '<img src="images/icon-cross.svg" alt="cross icon" width="15px" height="15px">';
//     trashButton.classList.add('delete-btn');
//     todoLi.appendChild(trashButton);

//     // Append to list 
//     todoList.appendChild(todoLi);
//     })
// }

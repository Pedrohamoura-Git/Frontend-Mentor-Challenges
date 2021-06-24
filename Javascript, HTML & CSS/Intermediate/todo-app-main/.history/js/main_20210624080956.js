/******************* Selectors *******************/

const checkboxTheme = document.querySelector("#ts-checkbox");
const todoInput = document.querySelector(".todo-input");
const enterButton = document.querySelector(".enter-button");
const todoList = document.querySelector("#todo-list");
const todoItem = document.querySelectorAll(".todo-item");

        /******************* Event Listeners   *******************/

document.addEventListener('DOMContentLoaded', switchTheme);
checkboxTheme.addEventListener('change', switchTheme);
todoInput.addEventListener('keyup', keyEnter);
enterButton.addEventListener('click', clickEnter);
todoList.addEventListener('click', completedItem);


        /******************* Global Variables   *******************/

let cont = 0;

        /******************* Functions *******************/


function switchTheme() {
    const bgImage = document.querySelector("#dynamic-background");
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    //add the inicial theme on the HTML element
    const setTheme = theme => document.documentElement.className = theme;

    if(checkboxTheme.checked) {
        sun.classList.remove("show");
        sun.classList.add("hide");

        moon.classList.remove("hide");
        moon.classList.add("show");

        // container.style.backgroundImage = "url(../images/bg-mobile-light.jpg)";
        // container.style.backgroundRepeat = "no-repeat";

        setTheme('light');
    }

    else {
        moon.classList.remove("show");
        moon.classList.add("hide");

        sun.classList.remove("hide");
        sun.classList.add("show");

        // container.style.backgroundImage = "url(../images/bg-mobile-dark.jpg)";
        // container.style.backgroundRepeat = "no-repeat";
        
        setTheme('dark');
    }

    
}


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


    // Create a "todo-item" li 
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item", "filter-active", "draggable");
    todoLi.setAttribute("draggable", "true");

    const completedButton = document.createElement('button');
    completedButton.classList.add('check-border');
    todoLi.appendChild(completedButton);

    // Create a li 
    const addText = document.createElement("p");
    addText.innerText = todoInput.value;
    addText.classList.add("todo-text");
    todoLi.appendChild(addText);     

    // Create a trash mark button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<img src="images/icon-cross.svg" alt="cross icon" width="15px" height="15px">';
    removeButton.classList.add('delete-btn');
    todoLi.appendChild(removeButton);

// ==> Fires the remove item function
    removeButton.addEventListener('click', removeItem);

    // Append to list 
    todoList.appendChild(todoLi);

    // Clear todo INPUT VALUE 
    todoInput.value = '';

    // If it is the first input
    if(cont === 1) {
        const todoContainer = document.querySelector("#todo-container");
        const filterContainer = document.querySelector("#filter");

        
        // Create the cont div
        const optionsList = document.createElement('div');
        optionsList.id = 'options-list';
        todoContainer.appendChild(optionsList);
        // Fires the clear function
        todoContainer.addEventListener("click", clearCompleted);


        // Create the todo items cont
        const itemsCont = document.createElement('p');
        itemsCont.classList.add('cont');
        itemsCont.innerHTML = `${cont} item left`;
        optionsList.appendChild(itemsCont);

        // Create the filter List Options

        // Create the filter ul
        const filterList = document.createElement('ul');
        filterList.id = 'filter-list';
        optionsList.appendChild(filterList);
        // Fires the filter function
        filterList.addEventListener('click', filterBtn);

        // Create the filter li All
        const filterLiAll = document.createElement('li');
        filterList.appendChild(filterLiAll);
        // Create the all button
        const allBtn = document.createElement('button');
        allBtn.setAttribute("value", "all"); 
        allBtn.classList.add('all-btn');
        allBtn.innerHTML = "All";
        filterLiAll.appendChild(allBtn);

        // Create the filter li Active
        const filterLiActive = document.createElement('li');
        filterList.appendChild(filterLiActive);
        // Create the active button
        const activeBtn = document.createElement('button');
        activeBtn.setAttribute("value", "active"); 
        activeBtn.classList.add('active-btn');
        activeBtn.innerHTML = "Active";
        filterLiActive.appendChild(activeBtn);

        // Create the filter li Completed
        const filterLiCompleted = document.createElement('li');
        filterList.appendChild(filterLiCompleted);
        // Create the completed button
        const completedBtn = document.createElement('button');
        completedBtn.setAttribute("value", "completed"); 
        completedBtn.classList.add('completed-btn');
        completedBtn.innerHTML = "Completed";
        filterLiCompleted.appendChild(completedBtn);

        // create the clear completed button
        const clearCompletedBtn = document.createElement('button');
        clearCompletedBtn.classList.add('clear-completed');
        clearCompletedBtn.innerHTML = `Clear Completed`;
        optionsList.appendChild(clearCompletedBtn);
    }

    // If it is NOT the first input 
    else {
        updateCont();
    }
}

// Save the text inside an array in the local Storage 
// saveItemLocalStorage(todoInput.value);

// Add the styles for the completed button and text 
function completedItem(e) {

    const btn = e.target;

    // Item Checked / Completed
    if(btn.classList.contains("check-border")) {
        btn.classList.remove("check-border");
        btn.classList.add("checked-btn");
        btn.innerHTML = '<img src="./images/icon-check.svg" alt="Icon check" class="icon-check">';
        btn.nextSibling.classList.add("checked-text");

        // Add the "filter-completed" class 
        btn.parentElement.classList.add("filter-completed");
        btn.parentElement.classList.remove("filter-active");

        // Update the active items cont AFTER the classes toggle
        updateCont();
    }

    // Just the border
    else if(btn.classList.contains("checked-btn")) {
        btn.classList.add("check-border");
        btn.classList.remove("checked-btn");
        btn.innerHTML = '';
        btn.nextSibling.classList.remove("checked-text");

        // Add the "filter-active" class 
        btn.parentElement.classList.add("filter-active");
        btn.parentElement.classList.remove("filter-completed");
    
        // Update the active items cont AFTER the classes toggle
        updateCont();
    }
}

// Removes the todo item 
function removeItem(e) {
    if(e.target.classList.contains('delete-btn')) {
        if(confirm("Are You Sure?")) {
            const li = e.currentTarget.parentElement;

            // Animation
            li.classList.add("item-dash");

            //Remove the item after the animation ends
            li.addEventListener('transitionend', () => {
                todoList.removeChild(li);
                updateCont();
            });
        }
    }
}

// Removes the all the completed todo items
function clearCompleted(e) {
    if(e.target.classList.contains("clear-completed")) {
        const todoItemsCompleted = document.querySelectorAll('.filter-completed');

        if(confirm("This option will remove all the completed items. Are You Sure?")) {

            Array.from(todoItemsCompleted).forEach((item) => {
                const parent = item.parentElement;

                // Animation
                item.classList.add("item-dash");

                //Remove the item after the animation ends
                item.addEventListener('transitionend', () => {
                    parent.removeChild(item);
                    updateCont();
                });
            });
        }
    }
}

// update the active items cont  
function updateCont() {
    const todoItems = document.querySelectorAll(".todo-item");
    const contText = document.querySelector(".cont");
    cont = 0;

    // Counts only the items that are active 
    Array.from(todoItems).forEach(function(item) {
        if(item.classList.contains('filter-active')) {
            cont++;
        }
    });
    contText.innerHTML = `${cont} items left`;

    // Remove the cont div when there is no item left
    if(cont === 0 && todoItems.length === 0) {
        const todoContainer = document.querySelector("#todo-container");
        const optionsList = document.querySelector('#options-list');
        // const filterList = document.querySelector("#filter-list");

        // Animations
        optionsList.classList.add("item-dash");

        
        //Remove the elements after the animation ends
        optionsList.addEventListener('transitionend', () => {
            optionsList.parentNode.removeChild(optionsList);
        });
    }
}

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

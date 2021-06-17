// Goals:
// Receive an error message when the form is submitted if:
// Any input field is empty
// The email address is not formatted correctly

//Get the inputs
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");


let submit = document.querySelector(".submit").addEventListener('click', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    //Get the values of the inputs.
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // Check if the inputs are empty. If it is, add an "error" class. 
    if(firstNameValue === "") {
        firstName.parentElement.classList.add("error");
    } 

    // If not, add an "success" class.
    else {

        // If the input already has an "error" class... 
        if(firstName.parentElement.classList.contains("error")) {
            
            // remove it...
            firstName.parentElement.classList.remove("error");

            // and add the "success" one.
            firstName.parentElement.classList.add("success");
        }
        
        // If the input doesn't have an "error" class, just add the "success" one.
        else {
            firstName.parentElement.classList.add("success");
        }
    }

    // Repeat the process for the other inputs
    
    if(lastNameValue === "") {
        lastName.parentElement.classList.add("error");
    } 

    else {
        if(lastName.parentElement.classList.contains("error")) {
            lastName.parentElement.classList.remove("error");
            lastName.parentElement.classList.add("success");
        }
        else {
            lastName.parentElement.classList.add("success");
        }
    }
    
    if(emailValue ==="") {
        email.parentElement.classList.add("error");
    } 

    else {
        if(email.parentElement.classList.contains("error")) {
            email.parentElement.classList.remove("error");
            email.parentElement.classList.add("success");
        }
        else {
            email.parentElement.classList.add("success");
        }    
    }

    if(passwordValue ==="") {
        password.parentElement.classList.add("error");
    } 

    else {
        if(password.parentElement.classList.contains("error")) {
            password.parentElement.classList.remove("error");
            password.parentElement.classList.add("success");
        }
        else {
            password.parentElement.classList.add("success");
        }
    }
}
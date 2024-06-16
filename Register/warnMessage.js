function isAlphaNumer(stringIn) {
    for (let i = 0; i<stringIn.length;i++) {
        const charCode = stringIn.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) && 
            !(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122)) { 
            return false;
        }
    }
    return true;
}

function valid() {
    const nameField = document.textbox.IName;
    const usernameField = document.textbox.IUsername;
    const emailField = document.textbox.IEmail;
    const passField = document.textbox.IPassword;
    const confirmEmailField = document.textbox.ICEmail;
    const confirmPassField = document.textbox.ICPassword;
    const result = document.getElementById("result");

    if (nameField.value.trim() == "") {
        result.innerHTML = "Enter Name";
        return false;
    }
    else if (usernameField.value.trim() == "") {
        result.innerHTML = "Enter Username";
        return false;
    }
    else if (usernameField.value.length < 8) {
        result.innerHTML = "Enter username at least 8 characters";
        return false;
    }
    else if (!isAlphaNumer(usernameField.value)) {
        result.innerHTML = "Username must be alphanumeric";
        return false;
    }
    else if (emailField.value.trim() == "") {
        result.innerHTML = "Enter email";
        return false;
    }
    else if (passField.value.trim() == "") {
        result.innerHTML = "Enter Password";
        return false;
    }
    else if (passField.value.length < 8) {
        result.innerHTML = "Enter password at least 8 characters";
        return false;
    }
    else if (!isAlphaNumer(passField.value)) {
        result.innerHTML = "Must be alphanumeric";
        return false;
    }
    else if (emailField.value != confirmEmailField.value) {
        result.innerHTML = "Input not match with email";
        return false;
    }
    else if (passField.value != confirmPassField.value) {
        result.innerHTML = "Input not match with password";
        return false;
    }

    else if (emailField.value == confirmEmailField.value &&
             passField.value == confirmPassField.value) {
                popup.classList.add("open-slide")
                return false;
    }
    result.innerHTML = ""; // Clear any previous error message
    return true; // Allow the form to be submitted
}

var popup = document.getElementById('popup');
function CloseSlide() {
    popup.classList.remove('open-slide');
}
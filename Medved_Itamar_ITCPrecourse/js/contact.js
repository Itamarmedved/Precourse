// initializing variables
const frmInputs = document.getElementById('fs-frm-inputs');
const requiredElements = frmInputs.querySelectorAll("*[required]");
const submitButton = document.getElementById('submit-button');

// adding an event listner for each required element to check if to enable the submit button
requiredElements.forEach((input) => {
    input.addEventListener('input', () => {
        if (checkRequired(requiredElements)) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    })
});

// this function returns 1 if all required elements have some value, otherwise it returns 0
function checkRequired(requiredElements) {
    let check = 1;
    requiredElements.forEach((element) => {
        if (element.type == 'checkbox' && element.checked == false) {
            check = 0;
        } else if (element.value.length == 0) {
            check = 0;
        }
    })
    return check;
}
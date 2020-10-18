window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Invalid Format";
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "";
        }
        else {
            if (currSpan.hasAttribute("data-default-error")) {
                var nsg = currSpan.getAttribute("data-default-error");
                currSpan.innerText = "";
            }
            else {
                currSpan.innerText = "";
            }
        }
    }
}
function validateTxtInput(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

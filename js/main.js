window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    var firstNameBox = document.getElementById("first-name");
    var fName = firstNameBox.value;
    if (fName == "") {
        var errSpan = firstNameBox.nextElementSibling;
        errSpan.innerText = "First name is required";
    }
}

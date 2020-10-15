
window.onload = function(){
    let formBtn = 
    <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
   let firstNameBox = 
        <HTMLInputElement>document.getElementById("first-name");
    let fName = firstNameBox.value
    if(fName == ""){
        let errSpan = 
        <HTMLSpanElement>firstNameBox.nextElementSibling;
        errSpan.innerText = "First name is required";
    }

}

window.onload = function(){
    let formBtn = 
    <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}
function ChangeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1)
    let green = Math.floor(Math.random() * 255 + 1)
    let blue = Math.floor(Math.random() * 255 + 1)
    let color = "rgb(" + red + "," + green + "," +
                 blue + " )"
                console.log(color);
                heading.style.color = color;
                console.log(heading.style.color);
}

function main():void{
        let msgHeading = document.createElement("h2");
        msgHeading.innerText = "Processing form";
        msgHeading.setAttribute("class", "message");
        msgHeading.onclick = ChangeHeading;

        let h1 = document.querySelector("h1");
        h1.insertAdjacentElement("afterend", msgHeading);

        setTimeout(function(){
            msgHeading.remove();
        }, 5000);

    resetErrorMessages();
   validateTxtInput("first-name", "First name is required");
   validateTxtInput("last-name", "Last name is required");

   
   CheckValidDate();

}

function CheckValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        // let errSpan = dobBox.nextElementSibling;
        // errSpan.innerHTML = "Invalid Format"
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy
   let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
   return pattern.test(input);
   
   

}
/**
 * Resets all the spans back to the default text
 *
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "";
        }
        else{
            if (currSpan.hasAttribute("data-default-error")){
                let nsg = currSpan.getAttribute("data-default-error");
                currSpan.innerText = "";
            }
            else{
                currSpan.innerText = "";

            }
        }
    }
    
}


/**
 * Returns true if the textbox with the given id
 * has some text inside it
 * @param id The id of the <input type= "text"> to validate
 * @param errMsg The message to display in the sibling span of
 * the textbox
 */

function validateTxtInput(id:string, errMsg:string):boolean {
    
    let txtBox =
     <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;

    }
        return true;
}

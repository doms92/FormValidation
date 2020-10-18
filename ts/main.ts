
window.onload = function(){
    let formBtn = 
    <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
   validateTxtInput("first-name", "First name is required");
   validateTxtInput("last-name", "Last name is required");

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

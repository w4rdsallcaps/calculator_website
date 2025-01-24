const display = document.getElementById("display");
let isResultDisplayed = false;

function appendToDisplay(input){
    if (isResultDisplayed || display.value === "error") {
        display.value="";
        isResultDisplayed = false; // reset the flag to false 
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        isResultDisplayed = true;
    }
    catch(error){
        display.value = "error";
        isResultDisplayed = false;
    }
    
}

function backspace(input){
    display.value = display.value.slice(0,-1); 
}
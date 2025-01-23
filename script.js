
// 

const display = document.getElementById("display");
let isResultDisplayed = false;

function appendToDisplay(input){
    if (isResultDisplayed || display.value === "error") {
        display.value="";
        isResultDisplayed = false;
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

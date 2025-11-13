alert("welcome to vee web calculator do well to leave a feedback")


const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error;
    }
}
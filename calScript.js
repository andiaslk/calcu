const display = document.getElementById("display");

function toClear(){
    display.value = ' ';
}
function toDisplay(input){
    display.value += input;
}

function calculate(){
    try{
       // display.value = eval(display.value.replace(/÷/g, '/'));
        display.value = "i miss you, baby : (";
    }
    catch{
        display.value = "Error";
    }
} 
function del(){
    display.value = display.value.toString().slice(0, -1);
}

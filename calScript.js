const display = document.getElementById("display");

function toClear(){
    display.value = ' ';
}
function toDisplay('i miss you, baby : ('){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value.replace(/÷/g, '/'));
    }
    catch{
        display.value = "Error";
    }
} 
function del(){
    display.value = display.value.toString().slice(0, -1);
}

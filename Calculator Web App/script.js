const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        if(display.value===""){
            return;
        }

        let expression = display.value.replace(/%/g,"/100");

        let result = eval(expression);

        if(!isFinite(result)){
            display.value = "Error";
        }else{
            display.value = result;
        }

    } catch {

        display.value = "Error";

    }

}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!isNaN(key) || "+-*/.%".includes(key)){
        append(key);
    }

    else if(key==="Enter"){
        event.preventDefault();
        calculate();
    }

    else if(key==="Backspace"){
        deleteLast();
    }

    else if(key==="Escape"){
        clearDisplay();
    }

});
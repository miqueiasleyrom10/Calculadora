let inputValue = "";

function addNumber(element) {
    inputValue += element;
    document.getElementById("display").value = inputValue
}

function calculo() {
    try {
        inputValue = eval(inputValue).toString();
        document.getElementById("display").value = inputValue;
    } catch(error) {
        inputValue = "";
        document.getElementById("display").value = "Error";
    }

    if (inputValue === "Infinity") {
        inputValue = "";
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    inputValue = "";
    document.getElementById("display").value = inputValue;
}
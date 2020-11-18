let runningTotal = 0;
let lastNum = 0;
let lastOperator;



let button = document.getElementsByClassName("key");

for (var i=0; i < button.length; i++) {
    let element = button[i];
    element.onclick = function(){
        buttonClick(element.innerText);
    }
};

function buttonClick(text){
    if (isNaN(parseInt(text))){
        operationHandler(text);
    }else{
        numberHandler(text);
    }
}

function numberHandler(number) {
    if (document.getElementsByClassName("calc-screen")[0].innerHTML === "0") {
        document.getElementsByClassName("calc-screen")[0].innerHTML = "";
    }

    document.getElementsByClassName("calc-screen")[0].innerHTML += number;

}

function operationHandler(text){

    if (text === "C") {
        document.getElementsByClassName("calc-screen")[0].innerHTML = "0";
    }

    if (text === "←") {
        slice = document.getElementsByClassName("calc-screen")[0].innerHTML.slice(0, -1);
        document.getElementsByClassName("calc-screen")[0].innerHTML = slice;
    }

    if (text === "+") {
        lastOperator = "+";
        runningTotal = parseInt(document.getElementsByClassName("calc-screen")[0].innerHTML);
        document.getElementsByClassName("calc-screen")[0].innerHTML = "";

    } else if (text === "–") {
        lastOperator = "–";
        runningTotal = parseInt(document.getElementsByClassName("calc-screen")[0].innerHTML);
        document.getElementsByClassName("calc-screen")[0].innerHTML = "";

    } else if (text === "÷") {
        lastOperator = "÷";
        runningTotal = parseInt(document.getElementsByClassName("calc-screen")[0].innerHTML);
        document.getElementsByClassName("calc-screen")[0].innerHTML = "";

    } else if (text === "×") {
        lastOperator = "×";
        runningTotal = parseInt(document.getElementsByClassName("calc-screen")[0].innerHTML);
        document.getElementsByClassName("calc-screen")[0].innerHTML = "";

    } else if (text === "=") {
        lastNum = parseInt(document.getElementsByClassName("calc-screen")[0].innerHTML);

        if (lastOperator === "+") {
            runningTotal += lastNum;

        } else if (lastOperator === "–") {
            runningTotal -= lastNum;

        } else if (lastOperator === "÷") {
            runningTotal = runningTotal / lastNum;

        } else if (lastOperator === "×") {
            runningTotal *= lastNum;

        }

        document.getElementsByClassName("calc-screen")[0].innerHTML = runningTotal;

        console.log(runningTotal);

    }
}
/*
innerText
outerText
textContent
*/

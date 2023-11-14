let buttonsum = document.getElementById("convertsum");
let buttonmin = document.getElementById("convertmin");
let buttonumn = document.getElementById("convertumn");
let buttondel = document.getElementById("convertdel");
let inputone = document.getElementById("numberone");
let inputtwo = document.getElementById("numbertwo");
let output = document.getElementById("result");

function print() {
    let numberone = Number(input.value); // Получаем актуальное значение из поля ввода
    let numbertwo = Number(input.value);
    let result = numberone + numbertwo ;
    output.value = result;
    }

    buttonsum.addEventListener("click", print);

var number_list_a = []
var number_list_b = 0
var operation

function typing(valor){
    number_list_a.push(valor);
    const input = document.getElementById('value-field');
    input.value = number_list_a.join('');
}

function backspace(){
    number_list_a.pop();
    const input = document.getElementById('value-field');
    input.value = number_list_a.join('');
}

function addition(){
    operation = "+";
    number_list_b += parseInt(number_list_a.join(''));
    number_list_a = [];
    const input = document.getElementById('value-field');
    input.value = null;

    document.getElementById('history').innerHTML = number_list_b + "+";
}

function subtraction(){
    operation = "-";
    number_list_b -= parseInt(number_list_a.join(''));
    number_list_a = [];
    const input = document.getElementById('value-field');
    input.value = null;

    document.getElementById('history').innerHTML = number_list_b + "-";
}

function res(){
    const input = document.getElementById('value-field');
    if (operation == "+") {
        input.value = (number_list_b + parseInt(number_list_a.join('')));
    }
    else if(operation == "-"){
        input.value = (number_list_b - parseInt(number_list_a.join('')));
    }
}
let valores = [];

function Soma(valores){
    var resultado = 0;
    for (let index = 0; index < valores.length; index++) {
        resultado = resultado + valores[index];
        
    }

    return resultado;
}

function somar(){

    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('total').innerHTML = (valor1+valor2); 
}

function calcular() {
    // recuperar los valores de la página
    n1=parseInt(document.querySelector('#op1').value);
    n2=parseInt(document.querySelector('#op2').value);
    // sumarlos
    op = document.querySelector('#op').value;
    let r;
    if(op == '+'){
        r = n1 + n2;
    }else if( op == '-'){
        r = n1 - n2;
    }else if(op == '*'){
        r = n1 * n2;
    }else if(op == '/'){
        r = n1 / n2;
    }
    // agregarlos en la página en el lugar adecuado
    document.querySelector('#resultado').innerHTML =r;

}
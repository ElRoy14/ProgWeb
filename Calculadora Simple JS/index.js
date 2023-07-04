//------------------>Funciones operaciones<--------------------------

function Suma(operando1, operando2){
    document.getElementById("screen").innerHTML = (operando1 + operando2);
};

function Resta(operando1, operando2){
    document.getElementById("screen").innerHTML = (operando1 - operando2);
};

function Multiplicación(operando1, operando2){
    document.getElementById("screen").innerHTML = (operando1 * operando2);
};

function División(operando1, operando2){
    document.getElementById("screen").innerHTML = (operando1 / operando2);
};

//--------------->Obtener los elementos del index.html<-----------------

const calcularResultado = document.getElementById("btn-calculate");
const clear = document.getElementById("btn-clear");

//------------------>Evento limpiar todos los campos<-----------------------

clear.addEventListener("click", () =>
{
    document.getElementById("screen").innerHTML = "";
    document.getElementById("f-operand").value = 0;
    document.getElementById("s-operand").value = 0;
    document.getElementById("operator").value = "Suma";
})

//------------------>Evento calcular el resultado de la operación<-----------------------

calcularResultado.addEventListener("click", () =>
{
    let f_operand = document.getElementById("f-operand").value;
    let s_operand = document.getElementById("s-operand").value;
    if(f_operand.includes(".") || s_operand.includes("."))
    {
        f_operand = parseFloat(f_operand);
        s_operand = parseFloat(s_operand);
    }
    else
    {
        f_operand = parseInt(f_operand);
        s_operand = parseInt(s_operand);
    }
    const operator = document.getElementById("operator").value;
    switch(operator)
    {
        case "Suma":
                Suma(f_operand,s_operand);
            break;

        case "Resta":
                Resta(f_operand,s_operand);
            break;

        case "Multiplicación":
                Multiplicación(f_operand,s_operand);
            break;
                
        case "División":
                División(f_operand,s_operand);
            break;
    }
}
);



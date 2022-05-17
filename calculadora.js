document.getElementById("display").value = 0;
var cantidad="";
var acomulador=0;
var contador=0;
// var acomulador1=0;
var sumar=false;
var restar=false;
var multiplicacion = false;
var division=false;
var mood=false;
// var borradortotal=false;
var borra=false;

function mostrarnumero(numero) {
    document.getElementById("display").value=cantidad+numero;
    cantidad=document.getElementById("display").value
    
}
function borrar(){
    document.getElementById("display").value=acomulador;
    cantidad="";
    borra=true;
}
function suma() {
    acomulador=acomulador+parseFloat(cantidad);
    document.getElementById("display").value=acomulador;
    cantidad="";
    sumar=true;
    
}

function resta() {
    acomulador=acomulador+parseFloat(cantidad)
    document.getElementById("display").value=acomulador;
    cantidad="";
    restar=true;
    
}
function mult(){
    acomulador=acomulador+parseFloat(cantidad)
    document.getElementById("display").value=acomulador;
    cantidad="";
    multiplicacion=true;
    
}
function div(){
    acomulador=acomulador+parseFloat(cantidad)
    document.getElementById("display").value=acomulador;
    cantidad="";
    division=true;
    
}
function porcentaje(){
    acomulador=acomulador+parseFloat(cantidad)
    document.getElementById("display").value=acomulador;
    cantidad="";
    mood=true;
    
}
function igual(){
    if(sumar){
        document.getElementById("display").value=acomulador+parseFloat(cantidad);
    } if (restar){
        document.getElementById("display").value=acomulador-parseFloat(cantidad);
    } if(multiplicacion){
        document.getElementById("display").value=acomulador*parseFloat(cantidad);
    } if(division){
        document.getElementById("display").value=acomulador/parseFloat(cantidad)
    }if(mood){
        document.getElementById("display").value=acomulador*parseFloat(cantidad)/100;
    }
}



// function igual(){
//     var res=0;
//     switch(acomulador){
//         case "+":
//             res=parseFloat(acomulador)+parseFloat(cantidad);
//         break;

//     }
// }

//  function suma(){
//        if(contador==0){
//         acomulador=acomulador+parseFloat(cantidad);
//         }else{
//             acomulador=document.getElementById("display").value;
//         }
//         document.getElementById("display").value=acomulador;
//         cantidad=""
//         console.log(acomulador);
//         sumar=true;
//         contador++
//     }
    
//     function resta(){
//         if(contador==0){
//           acomulador=acomulador+parseFloat(cantidad);
//         }else{
//             acomulador=document.getElementById("display").value;
//         }
//         document.getElementById("display").value=acomulador;
//         cantidad=""
//         console.log(acomulador);
//         restar=true;
//         contador++
//     }
    
//     function mult(){
//         if(contador==0){
//           acomulador=acomulador+parseFloat(cantidad);
//         }else{
//             acomulador=document.getElementById("display").value;
//         }
//         document.getElementById("display").value=acomulador;
//         cantidad=""
//         console.log(acomulador);
//         multiplicacion=true;
//         contador++
//     }
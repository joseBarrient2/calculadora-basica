//variable
var num1 = "";
var signo;
var numero2;
var numero1;
var n2 ="";
var r;
var caja2;
var cajaOperaciones;
//FUNCIONES

function resultado(n1,s,n2){
   
   var n1 = n1;
   var n2 = n2;
   var s = s;

       if (s == "+") {
            r = Number(n1) + Number(n2); 
            cajaOperaciones.innerHTML = r;
        }
        else if (s == "-") {
            r = n1 - n2; 
            cajaOperaciones.innerHTML = r;
        }
        else if (s == "/") {
            r = n1 / n2; 
            cajaOperaciones.innerHTML = r;
        }
        else if (s == "x") {
            r = n1 * n2; 
            cajaOperaciones.innerHTML = r;
        }
        else{
          alert("operacion incorrecta");
        }
        
   }

function operacion(evento){
	numero = evento.target.id; 
	cajaOperaciones = document.getElementById("resultado");
  num1 = cajaOperaciones.innerHTML += numero;
  var verificaNumero = num1.charAt(num1.length-1);
  var igual = document.getElementById("igual");
  
  if(isNaN(verificaNumero)){
          signo = verificaNumero;
          //resultadoprimer numero
           numero1 = num1.replace(signo,"");
           cajaOperaciones.innerHTML = "";

            igual.onclick = function(){
              resultado(numero1,signo,num1);
                    }
                
            }
}         

function procesar(){
	var botones = document.getElementsByClassName('numero');
	var total_botones = botones.length;
    contador = 0;
	while(contador < total_botones){
        botones[contador].onclick = operacion;
        contador++;
	}
}

//eventos
window.onload = procesar; 


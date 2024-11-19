
let pantalla = document.querySelector('#resultado');
let botones = document.getElementsByClassName('numero');
let swich = document.querySelector('#theme');
let theme = document.querySelector('.calculadora');

swich.addEventListener('click',()=>{
   theme.classList.toggle('dark');
})



  for(x=0; x < botones.length; x++){
      botones[x].addEventListener('click',operacion);
  }

function operacion(e){
  let valor = e.target.id;
 // console.log(valor); 

  
  if(valor == 'clear' || valor == 'nulo'){
    pantalla.innerText = '';
  }
  else if(valor == 'dot'){
      let dot = '.';
    pantalla.innerText += dot;
  }
  else if(valor == 'borrar'){
    let text = pantalla.innerText.toString();
    pantalla.innerText = text.substr(0,text.length - 1);
   }
   else if(pantalla.innerText == "" && valor == "equal"){
    setTimeout(()=> pantalla.innerText = "vacio",500)
   }
   else if(valor == "equal"){
    pantalla.innerText = eval(pantalla.innerText);
   }
   else{
    pantalla.innerText += valor;
   }
}




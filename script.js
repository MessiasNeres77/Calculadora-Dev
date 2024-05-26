function toCallNumber(num){
  const number=document.querySelector(".div-result").innerHTML;
  document.querySelector(".div-result").innerHTML=number+num
}

function clean(){
 document.querySelector(".div-result").innerHTML="";

}

function back(){
 const resultado=document.querySelector(".div-result").innerHTML; 
 document.querySelector(".div-result").innerHTML = resultado.substring(0, resultado.length -1);
}

function calc(){
  const resultado=document.querySelector(".div-result").innerHTML; 
  if(resultado){
  document.querySelector(".div-result").innerHTML = eval(resultado);
  }
}

function porcent(){
  const percentual=100;
  const calcPercent=parseFloat(document.querySelector(".div-result").innerHTML)
  const resultado=calcPercent/percentual
  document.querySelector(".div-result").innerHTML=resultado
}
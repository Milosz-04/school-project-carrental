

var promocja = true;
const button = document.querySelector("button");
noty = document.querySelector(".noty");
closeIcon = document.querySelector(".close");
progress = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click", () => {
let a = document.getElementById('imie').value;
let b = document.getElementById('email').value;
let c = document.getElementById('text').value;

if(  a!= "" && b.includes("@") && b!="" && c!="" ){
  noty.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    noty.classList.remove("active");
      }, 5000); 

      timer2 = setTimeout(() => {
      progress.classList.remove("active");
      }, 5300);
    }});
      
  closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  setTimeout(() => {
  progress.classList.remove("active");
  }, 300);
  clearTimeout(timer1);
  clearTimeout(timer2);
  });

function licz(){
  const text = document.getElementById('score');
  let lday1 = document.getElementById('day').value;
  let cena;
  if( !isNaN(lday1)){
    let chkd1 = document.getElementById('true').checked;

    if(chkd1 == false ){
      cena= 549;
    }else{
      cena= 649;
    }
    if(promocja == true){
      cena -=100;
    }
    
    let wynik = lday1*cena;
    text.innerHTML= "Koszt wynajmu będzie wynosił: " + wynik + " zł !";
    

  } else{
    alert("Podaj liczbę!")
  }
  
}

function licz2(){
  const text = document.getElementById('score2');
  let lday2 = document.getElementById('day2').value;
  let cena2;
  

  if( !isNaN(lday2)){
    let chkd2 = document.getElementById('true2').checked;

    if(chkd2 == false ){
      cena2= 549;
    }else{
      cena2= 649;
    }
    if(promocja == true){
      cena2 -=100;
    }
    
    let wynik = lday2*cena2;
    text.innerHTML= "Koszt wynajmu będzie wynosił: " + wynik + " zł !";

  }else{
    alert("Podaj liczbę!")
  }
  
}



function licz3(){
  const text = document.getElementById('score3');
  let lday3 = document.getElementById('day3').value;
  let cena3;
  

  if( !isNaN(lday3)){
    let chkd3 = document.getElementById('true3').checked;

    if(chkd3 == false ){
      cena3= 399;
    }else{
      cena3= 499;
    }
    if(promocja == true){
      cena3 -=100;
    }
    
    let wynik = lday3*cena3;
    text.innerHTML= "Koszt wynajmu będzie wynosił: " + wynik + " zł !";

  }
  else{
    alert("Podaj liczbę!")
  }
  
}

function licz4(){
  const text = document.getElementById('score4');
  let lday4 = document.getElementById('day4').value;
  let cena4;
  

  if( !isNaN(lday4)){
    let chkd4 = document.getElementById('true4').checked;

    if(chkd4 == false ){
      cena4= 599;
    }else{
      cena4= 699;
    }
    if(promocja == true){
      cena4 -=100;
    }
    
    let wynik = lday4*cena4;
    text.innerHTML= "Koszt wynajmu będzie wynosił: " + wynik + " zł !";

  }
  else{
    alert("Podaj liczbę!")
  }
  
}

        function random(){
  var text = document.getElementById('fuelscore');
  let km = document.getElementById('km').value;
  let ful = document.getElementById('fuel').value;
  let wynik;
  

  if((!isNaN(km) && !isNaN(ful))){
    let wynik = ((ful/km)*100);
    console.log(wynik);
    text.innerHTML= "Spalanie wynosi "+wynik.toFixed(2)+ " litrów na 100 kilometrów";


  }
  else{
    alert("Bład");
  }
  

}
  













   
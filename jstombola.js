const createcell = function () {
  //ho preso id del main
  const maincell = document.getElementById("main");
  // ho ciclato l'array e messo dentro i numeri
  const numero = [];
  for (let i = 1; i < 77; i++) {
    numero.push(i);
  }
  //ho ciclato quei numeri e
  for (let j = 0; j < numero.length; j++) {
    //per ogni numero ho creato un div
    const celle = document.createElement("div");
    //ho dato "un testo" ad ogni numero (ciclato)
    celle.innerText = numero[j];
    //ho dato una classe alle celle (div)
    celle.classList.add("celle");
    //ho messo dentro il main le celle (div)
    maincell.appendChild(celle);
  }
};
//ho creato una funzione per creare un numero random
const randomnum = function () {
    
 const numeroestratto=Math.floor(Math.random() * 76) + 1;
return numeroestratto
};


//sto creando un bottone
const newbotton = document.createElement("button");
//testo nel bottone
newbotton.innerText = "Clicca per estrarre un numero!";
//ho trovato il padre del ottonr
const parentbutton = document.getElementById("form");
//sto creando una funzione al click del bottone


newbotton.addEventListener("click", function (e){
    e.preventDefault() 
    const numeroestratto= randomnum()
    console.log ( numeroestratto)
     
})

    
     





parentbutton.appendChild(newbotton);

createcell();

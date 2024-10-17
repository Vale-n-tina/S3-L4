const createcell = function () {
  const maincell = document.getElementById("main");
  const numero = [];
  for (let i = 1; i < 80; i++) {
    numero.push(i);
  }
  for (let j = 0; j < numero.length; j++) {
    const celle = document.createElement("div");
  
  celle.innerText = numero[j];
  celle.classList.add("celle")
  
  maincell.appendChild(celle);
  
}};
createcell();

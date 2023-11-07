//1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

/*
function reverseWord(string) {
    let slpitWord = string.split("");
    let reverseString = slpitWord.reverse();
    let joinReverseString = reverseString.join("");
    return joinReverseString;
  }
  
  window.addEventListener("load", () => {
    const button = document.getElementById("reverse-button");
  
    button.addEventListener("click", () => {
      const input = document.getElementById("input-user");
      const reverse = reverseWord(input.value);
      const showResult = document.getElementById("result");
      showResult.innerHTML = `Il contrario di ${input.value} è ${reverse}`;
    });
  });
*/


window.addEventListener("load", () => {
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");
  
    button1.addEventListener("click", () => {
      const input = document.getElementById("userNumber");
      const p = document.getElementById("strigNumber");
      p.innerHTML = `Vuoi concatenare ${input.value} parole`;
      for (let i = 0; i < input.value; i++) {
        const inputWrapper = document.getElementById("inputWrapper");
        const creaInput = document.createElement("input");
        creaInput.setAttribute("class", "parola");
        creaInput.setAttribute("type", "text");
        inputWrapper.appendChild(creaInput);
      }
    });
    button2.addEventListener("click", () => {
      const parole = document.querySelectorAll(".parola");
     
      const listaParole = parole.value;
      const pRisultato = document.getElementById("finalResult");
      pRisultato.innerHTML = `${parole.value}`;
    });
  });
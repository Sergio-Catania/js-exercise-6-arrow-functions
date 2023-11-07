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
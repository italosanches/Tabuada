const botao = document
  .querySelector("#button-default")
  .addEventListener("click", function () {
    const initialValue = document.querySelector("#number1").value;
    const finalValue = document.querySelector("#number2").value;
    let textTabuada = document.querySelector("#numero-tabuada");
    const divResult = document.querySelector("#container-result");
    textTabuada.textContent = "Tabuada do número:";
    if (initialValue && finalValue) {
      while (divResult.firstChild) {
        divResult.removeChild(divResult.firstChild);
      } //executa enquanto tiver filho
      textTabuada.textContent += initialValue;

      for (let i = 1; i <= finalValue; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = `${initialValue} x ${i} = ${initialValue * i}`;
        paragrafo.setAttribute("class", "p-result");
        divResult.appendChild(paragrafo);
      }
    }
  });

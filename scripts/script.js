const botao = document
  .querySelector("#button-default")
  .addEventListener("click", function () {
    const multiplicador = +document.querySelector("#multiplicador").value;
    const multiplicando = +document.querySelector("#multiplicando").value;
    let spanMultiplicador = document.querySelector(".number-multiplicador").textContent = multiplicador;
    const divResult = document.querySelector("#container-result");

    if (!multiplicador || !multiplicando) {
      return
    }   
    while (divResult.firstChild) {
      divResult.removeChild(divResult.firstChild);
    } //executa enquanto tiver filho

    for (let i = 1; i <= multiplicando; i++) {
      let paragrafo = document.createElement("p");
      paragrafo.textContent = `${multiplicador} x ${i} = ${multiplicador * i}`;
      paragrafo.setAttribute("class", "p-result");
      divResult.appendChild(paragrafo);
    }
  });

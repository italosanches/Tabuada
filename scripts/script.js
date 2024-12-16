document
	.querySelector("#button-default")
	.addEventListener("click", function () {
		const multiplicador = +document.querySelector("#multiplicador").value;
		const multiplicando = +document.querySelector("#multiplicando").value;
		if (!multiplicador || !multiplicando) {
			return;
		}
		const divResult = document.querySelector("#container-result");
		limparTabuada(divResult);
		criarTabuada(divResult, multiplicador, multiplicando);
	});

function criarTabuada(divResult, multiplicador, multiplicando) {
	document.querySelector(".number-multiplicador").textContent = multiplicador;
	for (let i = 1; i <= multiplicando; i++) {
		let paragrafo = document.createElement("p");
		paragrafo.textContent = `${multiplicador} x ${i} = ${multiplicador * i}`;
		paragrafo.setAttribute("class", "p-result");
		divResult.appendChild(paragrafo);
	}
}
function limparTabuada(divResult) {
	while (divResult.firstChild) {
		divResult.removeChild(divResult.firstChild);
	} //executa enquanto tiver filho
}

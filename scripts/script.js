document.querySelector("#button-default").addEventListener("click", createMultiplicationTable);

function createMultiplicationTableInHtml(divResult, resultMultiplication, multiplicator, spanMultiplicator) {
	spanMultiplicator.textContent = multiplicator;
	resultMultiplication.forEach((e) => {
		let paragrafo = document.createElement("p");
		paragrafo.textContent = e;
		paragrafo.setAttribute("class", "p-result");
		divResult.appendChild(paragrafo);
	});
}
function clearMultiplicationTable(divResult, spanMultiplicator) {
	divResult.textContent = "";
	spanMultiplicator.textContent = "";
	// while (divResult.firstChild) {
	// 	divResult.removeChild(divResult.firstChild);
	// } //executa enquanto tiver filho
}
function generateMultiplication(multiplicand, multiplicate) {
	const result = [];
	for (let i = 1; i <= multiplicand; i++) {
		result.push(`${multiplicate} x ${i} = ${multiplicate * i}`);
	}
	return result;
}

function createMultiplicationTable() {
	const divResult = document.querySelector("#container-result");
	const spanMultiplicator = document.querySelector(".number-multiplicador");
	clearMultiplicationTable(divResult, spanMultiplicator);
	const multiplicator = +document.querySelector("#multiplicador").value;
	const multiplicand = +document.querySelector("#multiplicando").value;
	if (!multiplicator || !multiplicand) {
		return;
	}
	const resultMultiplication = generateMultiplication(multiplicand, multiplicator);
	createMultiplicationTableInHtml(divResult, resultMultiplication, multiplicator, spanMultiplicator);
}

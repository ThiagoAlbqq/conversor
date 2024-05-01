// Selecionando os elementos do DOM
const inputUSD = document.querySelector("#inputUSD");
const inputBRL = document.querySelector("#inputBRL");

// Taxa de conversão
const USDinBRL = 5.1;

// Função para realizar os cálculos
function calculate(to) {
  let result;

  if (to === "USD") {
    result = inputBRL.value / USDinBRL;
    inputUSD.value = result.toFixed(2);
  } else if (to === "BRL") {
    result = inputUSD.value * USDinBRL;
    inputBRL.value = result.toFixed(2);
  }

  if (inputUSD.value === "" || inputBRL.value === "") {
    inputUSD.value = "";
    inputBRL.value = "";
  }
}

// Event listeners para os campos de entrada
inputBRL.addEventListener("input", function () {
  calculate("USD");
});

inputUSD.addEventListener("input", function () {
  calculate("BRL");
});

// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")

  // Transformar o valor para centavos
  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
}

// Formata o valor no padrãp BRL (Real Brasileiro)
function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return value
}
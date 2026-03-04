// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

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


// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    categoroy_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  console.log(newExpense);
  
}
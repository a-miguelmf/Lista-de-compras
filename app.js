const input = document.getElementById("item");
const btnAdd = document.getElementById("btn-add");
const lista = document.getElementById("lista");

btnAdd.addEventListener("click", adicionarItem);

function adicionarItem() {
  const valor = input.value.trim();

  if (valor === "") {
    alert("Digite um item válido!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = valor;

  // remover item clicando nele
  li.addEventListener("click", () => {
    lista.removeChild(li);
  });

  lista.appendChild(li);
  input.value = "";
  input.focus();
}


scrip
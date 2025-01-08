const valorTotal = document.getElementById('total-value')
const addValor = document.getElementById('initial-value')
const recebeValor = document.getElementById('valor')

addValor.addEventListener('click', () => {

    const valorAtual = valorTotal.value;

    recebeValor.textContent = `R$ ${valorAtual}`;
})

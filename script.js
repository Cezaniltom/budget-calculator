const valorTotal = document.querySelector('#total-value')
const addValor = document.querySelector('#initial-value')
const recebeValor = document.querySelector('#valor')

addValor.addEventListener('click', () => {

    const valorAtual = valorTotal.value;

    recebeValor.textContent = `R$ ${valorAtual}`;

    valorTotal.value = '';
})

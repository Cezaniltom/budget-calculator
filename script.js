const valorTotal = document.querySelector('#total-value')
const addValor = document.querySelector('#initial-value')
const recebeValor = document.querySelector('#valor')


// Evanto que captura o valor inicial e mostra na tela
addValor.addEventListener('click', () => {

    const valorAtual = parseFloat(valorTotal.value.replace(/[^\d.-]/g, ''));

    if (isNaN(valorAtual)) {
        alert('Por favor, adicione um valor válido.');        
    } else {
        recebeValor.textContent = `R$ ${valorAtual}`;
    }
    valorTotal.value = '';
})



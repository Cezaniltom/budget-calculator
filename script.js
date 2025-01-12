const valorTotal = document.querySelector('#total-value')
const addValor = document.querySelector('#initial-value')
const recebeValor = document.querySelector('#valor')


// Evento que captura o valor inicial e mostra na tela
addValor.addEventListener('click', () => {
    const valorAtual = parseFloat(valorTotal.value.replace(/[^\d.-]/g, ''));
    if (isNaN(valorAtual)) {
        alert('Por favor, adicione um valor válido.');
    } else {
        localStorage.setItem('ValorInicial', valorAtual);
        recebeValor.textContent = valorAtual.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }    

    valorTotal.value = '';
})


// Persistindo os dados no localStorage
const valueStorage = localStorage.getItem('ValorInicial');
if(valueStorage) {
    recebeValor.textContent = parseFloat(valueStorage).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}


// recebe o valor da despesa

const valorDespesa = document.querySelector('#expense-value')
const addDespesa = document.querySelector('#expense-add')


addDespesa.addEventListener('click', () => {

    const recebeValor =  parseFloat(valorDespesa.value.replace(/[^\d.-]/g, ''))

    if (isNaN(recebeValor)) {
        alert('Por favor, adicione um valor válido.');        
    } else {
        valorTotal.value -= recebeValor.valueOf()
    }
})

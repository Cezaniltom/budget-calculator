const valorTotal = document.querySelector('#total-value')
const addValor = document.querySelector('#initial-value')
const recebeValor = document.querySelector('#valor')


// Evento que captura o valor inicial e mostra na tela
addValor.addEventListener('click', () => {

    const valorAtual = parseFloat(valorTotal.value.replace(/[^\d.-]/g, ''));

    if (isNaN(valorAtual)) {
        alert('Por favor, adicione um valor válido.');        
    } else {
        recebeValor.textContent = `${valorAtual.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })}`;
    }

    

    valorTotal.value = '';
})


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

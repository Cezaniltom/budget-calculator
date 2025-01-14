const valorTotal = document.querySelector('#total-value');
const addValor = document.querySelector('#initial-value');
const recebeValor = document.querySelector('#valor');

// Evento que captura o valor inicial e mostra na tela
addValor.addEventListener('click', () => {
    const valorAtual = parseFloat(valorTotal.value.replace(/[^\d.-]/g, ''));
    if (isNaN(valorAtual)) {
        alert('Por favor, adicione um valor válido.');
    } else {
        localStorage.setItem('ValorInicial', valorAtual);
        attValor(valorAtual);
    }    

    valorTotal.value = '';
});

// Persistindo os dados no localStorage
const valueStorage = localStorage.getItem('ValorInicial');
if (valueStorage) {
    attValor(parseFloat(valueStorage));
}

// Atualiza o valor que está na tela
function attValor(valor) {
    recebeValor.textContent = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

// Recebe o valor da despesa
const valorDespesa = document.querySelector('#expense-value');
const addDespesa = document.querySelector('#expense-add');

addDespesa.addEventListener('click', () => {
    const valorDespesaInserido = parseFloat(valorDespesa.value.replace(/[^\d.-]/g, ''));

    if (isNaN(valorDespesaInserido)) {
        alert('Por favor, adicione um valor válido.');        
    } else {
        const valorAtual = parseFloat(localStorage.getItem('ValorInicial')) || 0;

        // Verifica se o valor da despesa é maior que o saldo disponível
        if (valorDespesaInserido > valorAtual) {
            alert('Saldo insuficiente. Não é possível realizar esta despesa.');
        } else {
            const valorNovo = valorAtual - valorDespesaInserido;

            // Atualiza o localStorage
            localStorage.setItem('ValorInicial', valorNovo);

            // Atualiza o valor na tela
            attValor(valorNovo);
        }
    }

    // Limpa o campo de despesa
    valorDespesa.value = '';
});

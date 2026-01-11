const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizaTabela();
});

function addLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi adicionado.`);
    } else {
        contatos.push(inputNome.vlaue);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = linhas;
}



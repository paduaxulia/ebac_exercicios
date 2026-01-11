const nome = document.getElementById('nomecompleto');
const form = document.querySelector('form');
const erroMsg = document.querySelector('.erro404')
const infoDiv = document.getElementById('pagina');
let nomeEhCompleto = false;

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 4;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede recarregamento

    nomeEhCompleto = validaNome(nome.value);
    const goToImgs = document.querySelector('.divsoria');
    document.querySelector('input').style.display = 'block';

    if (nomeEhCompleto) {
        nome.classList.remove('error');
        nome.classList.add('success');
        erroMsg.style.display = 'none'
        infoDiv.style.display = 'block'; // mostra as info

        nome.value = '';
        nome.style.border = '';
    } else {
        nome.classList.remove('success');
        nome.classList.add('error');
        erroMsg.style.display = 'block';
    }
});

nome.addEventListener('keyup', function(e) {
    nomeEhCompleto = validaNome(e.target.value);

    if (!nomeEhCompleto) {
        nome.classList.add('error');
        document.querySelector('.erro404').style.display = 'block';
        nome.classList.remove('success') = 'none';
    } else {
        nome.classList.remove('error');
        document.querySelector('.erro404').style.display = 'none';
        nome.classList.add('success') = 'block';
    }
});



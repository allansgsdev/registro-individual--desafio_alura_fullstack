// *PÁGINA DE DESAFIOS*

// Desafio: Capturar Valores
// Autor: Allan Gomes
// Curso: Lógica de programação - Praticando com desafios
// Instituição: Alura


// DECLARAÇÃO E ATRIBUÇÃO DE VARIÁVEIS
let campoNome;
let campoIdade;
let mostrarInfos = document.getElementById('Mostrar-Nome');

// DEFINIÇÃO DE FUNÇÕES
function capturarValores() {
    campoNome = document.getElementById('Nome').value;
    campoIdade = document.getElementById('Idade').value;
    var palavraIdade = campoIdade > 1 ? 'anos' : 'ano';

    if (!campoNome || campoNome.trim() === '') {
        alert('Insira um nome válido.');
    } else {
        if (!isNaN(campoIdade) && campoIdade >= 1) {
            mostrarInfos.innerHTML = `Nome: ${campoNome}<br>Idade: ${campoIdade} ${palavraIdade}`;
            document.getElementById('Nome').value = '';
            document.getElementById('Idade').value = '';
            return
        }
        else {
            alert('Por favor, insira uma idade válida acima de 1 ano');
        }
    }

    return
}

// PROGRAMA PRINCIPAL
const input = document.querySelector('input');

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        capturarValores();
    }
})
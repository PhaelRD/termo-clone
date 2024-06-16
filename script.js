// script.js

// Lista de palavras
const words = [
    "LIVRO", "CASAS", "PRAIA", "BOLSA", "TEMPO",
    "FILME", "CORPO", "NOITE", "LIMPO",
    "FORNO", "BEBER", "FUGIR", "BANCO", "LUZES",
    "MORRO", "VOZES", "FOLHA",
    "FUMAR", "BRISA", "DENTE", "PONTA", "VERDE",
    "QUEDA", "TAMPA", "GALHO", "CORDA",
    "PEDRA", "SALTO", "RISCO", "MOLHO", "FESTA",
    "TRIPO", "CAMPO", "LUGAR", "TAMPO",
    "CARRO", "VIVER", "TINTA", "VISTA",
    "CINZA", "FUGAZ", "CHUVA", "TECLA",
    "FORTE", "LUZIR", "ACOES", "PORTA", "QUEDA",
    "ALMAS", "DICAS", "OLHAR", "FOGOS", "RISOS",
    "PULSO", "ROCHA", "ESTAR", "SOLTO", "DIZER",
    "CIRCO", "VARAL", "JOGOS", "PILAR", "MIMOS",
    "DANCA", "MEXER", "SORTE",
    "JOGAR", "FICAR", "SENDO",
    "CABER", "CURSO", "CALMA", "FELIZ", "SERAS",
    "VITAL", "RAZAO", "ALMAS",
    "FALAR", "LIDAR", "OUVIR", "CARGO",
    "VARAO", "TABUA", "JUROS", "CARTA",
    "ARGIL", "PASSE", "GRITO", "FOLIA",
    "LOURO", "IGUAL", "SURTO", "GRUPO",
    "SOLAR", "JUBIL", "MOSCA", "BACIA", "RETRO",
    "VIVAZ", "SOMAR", "LIXAR", 
    "ESPOR", "DARDO", "INATO", "PALMA",
    "RIGOR", "ERROS", "IMPAR", "GLOSA", "COROA",
    "VIEIS", "MOTOS", "SONHO", "LINDO", "SERES",
    "MIOLO", "CANAL", "TINTO", "BOLSO", "TALCO",
    "TARJA", "ESQUI", "LIMPO", "RIOJA",
    "CUBRA", "CUBRO", "CUBRE", "COBRA",
    "CIDRA", "CERVO", "CAUSA",
    "CAMPO", "BUNDA", "BOLSA", "BOSCA", "BANCO",
    "ZANGA", "VULCA", "VIVER", "VILAO", "VERAO",
    "VAREI", "UMIDO", "UMIDA", "TRACO",
    "TIARA", "TERMO", "TARSO", "TARDE", "TALCO",
    "RURAL", "RUBRO", "ROCHA", "REALE", "RADIO",
    "PULSO", "POEMA", "PLOMA", "PINTO", "PERNA",
    "PASSE", "PARIS", "PANNA", "MULAS", "MULOS",
    "MUITO", "MUNDO", "MORTO", "MORRO", "MORRA",
    "MOITA", "MISTO", "MINAS", "MIMOS", "MEDIR",
    "MENOR", "MEIGA", "MEIGO", "MATIZ",
    "MARIA", "MAQUI", "MALTO", "MALVA", "MALTA",
    "MAMAO", "MAIOR", "MAGRO", "MACRO", "LUMPA",
    "LUADE", "LOURE", "LOTEA", "LIVRO", "LIXAR",
    "LIMPO", "LEVEI", "LEVAR", "LETRA", "LEGRA",
    "LATIM", "LARAN", "LAGOA", "LADRA", "JURAR",
    "JUBIL", "JOGUE", "JOGOS", "JOIAO", "JETOM",
    "JAZER", "JANEL", "JAULA", "JARRA", "JANTA",
    "JANEL", "JAMBO", "JACAR", "ISSOS", "ISOLA",
    "IRMAO", "INVAS", "INVAR", "INVAD", "INFAN",
    "UNGIR", "NINJA", "MARCO", "CARNA", "NEXUS",
    "MODUS", "METRO", "XINGA", "LIMPA", "LIMPO",
    "LARGO", "JUNTO", "ILOSO", "IMAGA", "FUMAS",
    "FUIAS", "FORAS", "FOLGA", "EMBAR", "DORES",
    "DORME", "DIZIA", "DIVAS", "DANCA", "BICHO",
    "BICAS", "BELGA", "BAIXO", "AZEDO", "AVENT",
    "ATACA", "ARTEZ", "APURA",
    "ANGRA", "ALDAS", "ALVOR", "ALVES", "ALUGA",
    "ALUGA", "ALOES", "ADUBA", "ADUCA", "ACUSA",
    "ACUDA", "ACUDA", "ACUCA", "AFLOR", "AFLUI",
    "ADOTA", "ADITA", "ACUDE", "ACUDE", "ACATA",
    "ACATA", "ACENA", "ACENA", "ACAMA", "ABUSA"
  ];
  
// Palavra secreta selecionada aleatoriamente
let secretWord = getRandomWord();
// Contador de tentativas
let attempts = 0;
// Número máximo de tentativas
const maxAttempts = 6;
// Palpite atual do usuário
let currentGuess = "";
// Índice da célula selecionada
let selectedCellIndex = 0;

// Event listeners
document.getElementById("submit-guess").addEventListener("click", submitGuess);
document.getElementById("restart-game").addEventListener("click", restartGame);
document.getElementById("backspace").addEventListener("click", handleBackspace);
document.querySelectorAll("#keyboard button:not(#submit-guess):not(#backspace)").forEach(button => {
    button.addEventListener("click", handleKeyPress);
});
document.querySelectorAll(".letter").forEach(cell => {
    cell.addEventListener("click", selectCell);
});

// Função para obter uma palavra aleatória da lista
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Função para lidar com pressionamentos de tecla
function handleKeyPress(event) {
    const key = event.target.textContent;
    if (key === "ENTER") {
        submitGuess();
    } else if (key === "BACKSPACE") {
        handleBackspace();
    } else {
        addLetter(key);
        event.target.classList.add("clicked"); // Adiciona classe clicked ao botão clicado
    }
}

// Função para adicionar uma letra ao palpite atual
function addLetter(letter) {
    const guessRow = document.querySelectorAll(".guess-row")[attempts];
    const letterDiv = guessRow.children[selectedCellIndex];
    if (letterDiv.textContent === "") {
        currentGuess = currentGuess.slice(0, selectedCellIndex) + letter + currentGuess.slice(selectedCellIndex + 1);
        letterDiv.textContent = letter;
        if (selectedCellIndex < 4) {
            selectedCellIndex++;
        }
    }
}

// Função para remover a letra da célula selecionada
function handleBackspace() {
    removeLetter();
}

function removeLetter() {
    const guessRow = document.querySelectorAll(".guess-row")[attempts];
    const letterDiv = guessRow.children[selectedCellIndex];
    if (letterDiv.textContent !== "") {
        letterDiv.textContent = "";
        currentGuess = currentGuess.slice(0, selectedCellIndex) + currentGuess.slice(selectedCellIndex + 1);
    } else if (selectedCellIndex > 0) {
        selectedCellIndex--;
        const prevLetterDiv = guessRow.children[selectedCellIndex];
        prevLetterDiv.textContent = "";
        currentGuess = currentGuess.slice(0, selectedCellIndex) + currentGuess.slice(selectedCellIndex + 1);
    }
}

// Função para submeter o palpite
function submitGuess() {
    const guessRow = document.querySelectorAll(".guess-row")[attempts];
    let allFilled = true;

    for (let i = 0; i < guessRow.children.length; i++) {
        if (guessRow.children[i].textContent === "") {
            allFilled = false;
            break;
        }
    }

    if (!allFilled) {
        alert("Todos os espaços para letras devem estar preenchidos!");
        return;
    }

    currentGuess = Array.from(guessRow.children).map(cell => cell.textContent).join('');
    displayGuess(currentGuess);

    if (currentGuess === secretWord) {
        document.getElementById("message").textContent = "Parabéns! Você acertou!";
        endGame();
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            document.getElementById("message").textContent = `Você perdeu! A palavra era ${secretWord}`;
            endGame();
        } else {
            // Limpar a seleção da linha anterior
            Array.from(guessRow.children).forEach(cell => {
                cell.classList.remove("selected");
            });

            // Atualiza a cor das letras no teclado apenas para as letras clicadas
            updateKeyboardFeedback();
            currentGuess = "";
            selectedCellIndex = 0;

            // Limpa a classe clicked dos botões do teclado
            document.querySelectorAll("#keyboard button").forEach(button => {
                button.classList.remove("clicked");
            });

            // Adiciona event listener para a nova linha de palpite
            const newGuessRow = document.querySelectorAll(".guess-row")[attempts];
            newGuessRow.forEach(cell => {
                cell.addEventListener("click", selectCell);
            });
        }
    }
}

// Função para exibir o palpite na interface
function displayGuess(guess) {
    const guessRow = document.querySelectorAll(".guess-row")[attempts];
    for (let i = 0; i < guess.length; i++) {
        const letterDiv = guessRow.children[i];
        if (guess[i] === secretWord[i]) {
            letterDiv.classList.add("correct");
        } else if (secretWord.includes(guess[i])) {
            letterDiv.classList.add("present");
        } else {
            letterDiv.classList.add("absent");
        }
    }
}

// Função para atualizar a cor das letras no teclado
function updateKeyboardFeedback() {
    // Obtém todas as letras do teclado que foram clicadas
    const clickedKeys = document.querySelectorAll("#keyboard button.clicked");

    // Verifica cada letra clicada
    clickedKeys.forEach(button => {
        const letter = button.textContent;
        if (secretWord.includes(letter)) {
            if (letter === currentGuess[secretWord.indexOf(letter)]) {
                button.classList.add("correct-key");
            } else {
                button.classList.add("present-key");
            }
        } else {
            button.classList.add("absent-key");
        }
    });

    // Remove a cor padrão dos botões clicados
    clickedKeys.forEach(button => {
        button.classList.remove("default-key");
    });
}

// Função para selecionar uma célula na linha de palpite atual
function selectCell(event) {
    const selectedCell = event.target;
    const guessRow = document.querySelectorAll(".guess-row")[attempts];
    if (!Array.from(guessRow.children).includes(selectedCell)) {
        return; // Ignora a seleção se a célula não estiver na linha de palpite atual
    }
    Array.from(guessRow.children).forEach(cell => {
        cell.classList.remove("selected");
    });
    selectedCell.classList.add("selected");
    selectedCellIndex = Array.from(guessRow.children).indexOf(selectedCell);
}

// Função para encerrar o jogo
function endGame() {
    document.querySelectorAll("#keyboard button").forEach(button => {
        button.disabled = true;
    });
}

// Função para reiniciar o jogo
function restartGame() {
    attempts = 0;
    secretWord = getRandomWord(); // Selecionar nova palavra secreta
    document.querySelectorAll(".guess-row").forEach(row => {
        Array.from(row.children).forEach(letterDiv => {
            letterDiv.textContent = "";
            letterDiv.className = "letter";
        });
    });
    document.querySelectorAll("#keyboard button").forEach(button => {
        button.disabled = false;
        button.classList.remove("correct-key", "present-key", "absent-key", "default-key", "clicked");
    });
    document.getElementById("message").textContent = "";
    currentGuess = "";
    selectedCellIndex = 0;

    // Adiciona event listener para a nova linha de palpite
    const newGuessRow = document.querySelectorAll(".guess-row")[attempts];
    newGuessRow.forEach(cell => {
        cell.addEventListener("click", selectCell);
    });
}
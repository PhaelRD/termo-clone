https://phaelrd.github.io/termo-clone/

# Clone do Jogo Termo

## 1. Lista de Palavras
O código começa com a definição de uma lista de palavras que serão utilizadas para o jogo de adivinhação. Essas palavras são possíveis candidatos para a palavra secreta que o jogador deve adivinhar.

## 2. Palavra Secreta
Uma palavra secreta é selecionada aleatoriamente a partir da lista de palavras usando a função `getRandomWord()`. Essa palavra será o alvo das tentativas do jogador.

## 3. Controle de Tentativas
O código define variáveis para o controle do jogo, incluindo:
- **Número de tentativas feitas** (`attempts`)
- **Número máximo de tentativas permitidas** (`maxAttempts`)
- **Palpite atual do jogador** (`currentGuess`)
- **Índice da célula selecionada** (`selectedCellIndex`), que rastreia qual célula está sendo preenchida.

## 4. Event Listeners
O código configura diversos event listeners para interações do jogador:
- **`submit-guess`**: Submete o palpite atual do jogador.
- **`restart-game`**: Reinicia o jogo, resetando o estado.
- **`backspace`**: Remove a última letra digitada no palpite atual.
- **Botões do teclado virtual**: Capturam cliques nas letras do teclado e adicionam as letras ao palpite.
- **Células de letras**: Permitem que o jogador selecione manualmente uma célula para preenchê-la.

## 5. Manipulação de Teclas
A função `handleKeyPress()` gerencia as teclas pressionadas no teclado virtual. Se uma tecla correspondente a uma letra é clicada, a letra é adicionada ao palpite atual. As teclas especiais como "ENTER" e "BACKSPACE" têm seu comportamento gerido separadamente.

## 6. Submissão de Palpite
Quando o jogador tenta submeter um palpite, o código verifica se todas as células na linha atual foram preenchidas. Se o palpite estiver completo, ele é comparado à palavra secreta. Dependendo do resultado, o código pode encerrar o jogo ou permitir ao jogador continuar tentando.

## 7. Verificação do Palpite
Após a submissão, o palpite é comparado com a palavra secreta. As letras corretas, presentes ou ausentes são destacadas com diferentes cores para fornecer feedback ao jogador. Este feedback é refletido tanto nas células do palpite quanto nas teclas do teclado virtual.

## 8. Seleção de Células
As células da linha de palpite atual podem ser selecionadas pelo jogador para permitir a inserção de letras. O código garante que apenas as células na linha ativa possam ser selecionadas.

## 9. Reinício do Jogo
A função `restartGame()` reinicia o estado do jogo para começar uma nova rodada. Ela redefine o número de tentativas, escolhe uma nova palavra secreta e limpa as células e o teclado.

## 10. Feedback Visual
O código inclui funcionalidades para fornecer feedback visual ao jogador:
- Letras corretas na posição correta são destacadas com uma classe específica.
- Letras presentes na palavra, mas na posição errada, são destacadas de outra forma.
- Letras ausentes recebem um destaque indicando que não fazem parte da palavra secreta.

## 11. Encerramento do Jogo
Quando o jogo termina, o teclado é desativado para impedir novas entradas, e uma mensagem de vitória ou derrota é exibida ao jogador.

## 12. Atualização do Teclado
O feedback das teclas pressionadas no teclado virtual é atualizado após cada tentativa, indicando quais letras foram usadas corretamente ou não. As teclas são desativadas ao final do jogo.

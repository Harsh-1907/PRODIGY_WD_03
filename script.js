const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function cellClick(cellIndex) {
  const clickedCell = cells[cellIndex];

  if (gameState[cellIndex] !== '' || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  checkWinner();
  checkTie();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      message.textContent = `${gameState[a]} wins!`;
      gameActive = false;
      return;
    }
  }
}

function checkTie() {
  if (!gameState.includes('') && gameActive) {
    message.textContent = 'It\'s a tie!';
    gameActive = false;
  }
}

function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = '';
  cells.forEach(cell => cell.textContent = '');
}

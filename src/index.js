import Game from "./core/Game.js";

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

let game = new Game(ctx, gameBoard, scoreText, resetBtn);
game.start();

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);
  game.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
resetBtn.addEventListener("click", () => game.reset());

// TODO: implement this functions to classes
function checkCollision() {
  if (ballY <= 0 + ballRadius) ballYDirection *= -1;
  if (ballY >= GAME_HEIGHT - ballRadius) ballYDirection *= -1;
  if (ballX <= 0) {
    player2Score += 1;
    updateScore();
    createBall();
    return;
  }
  if (ballX >= GAME_WIDTH) {
    player1Score += 1;
    updateScore();
    createBall();
    return;
  }

  if (ballX <= paddle1.x + paddle1.width + ballRadius) {
    if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
      ballX = paddle1.x + paddle1.width + ballRadius; // if ball gets stuck
      ballXDirection *= -1;
      ballSpeed += 1;
    }
  }
  if (ballX >= paddle2.x - ballRadius) {
    if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
      ballX = paddle2.x - ballRadius; // if ball gets stuck
      ballXDirection *= -1;
      ballSpeed += 1;
    }
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;

  paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0,
  };
  paddle2 = {
    width: 25,
    height: 100,
    x: GAME_WIDTH - 25,
    y: GAME_HEIGHT - 100,
  };

  ballSpeed = 1;
  ballX = 0;
  ballY = 0;
  ballXDirection = 0;
  ballYDirection = 0;
  updateScore();
  clearInterval();
  gameStart();
}

import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import InputHandler from "./InputHandler.js";

export default class Game {
  constructor(ctx, gameBoard, scoreText) {
    this.ctx = ctx;
    this.gameBoard = gameBoard;
    this.scoreText = scoreText;

    this.width = gameBoard.width;
    this.height = gameBoard.height;

    this.players = [
      new Player("lightblue", 0, 0, 25, 100, "KeyW", "KeyS"),
      new Player(
        "red",
        this.width - 25,
        this.height - 100,
        25,
        100,
        "ArrowUp",
        "ArrowDown"
      ),
    ];

    this.ball = new Ball("yellow", 12.5, this.width, this.height);
    this.input = new InputHandler();

    this.boardBackground = "forestgreen";
  }

  start() {
    this.ctx.fillStyle = this.boardBackground;
    this.draw();
    this.ball.create(this.ctx);
  }

  update() {
    this.players.forEach((player) => player.update(this.input));
    this.ball.update();
    this.draw();
  }

  draw() {
    this.players.forEach((player) => player.draw(this.ctx));
    this.ball.draw(this.ctx);
  }

  clearBoard() {
    this.ctx.fillStyle = this.boardBackground;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  updateScore() {
    this.scoreText.textContent = `${this.players[0].score} : ${this.players[1].score}`;
  }

  reset() {
    this.players.forEach((player) => {
      player.score = 0;
    });

    this.clearBoard();
    this.updateScore();
    this.start();
  }
}

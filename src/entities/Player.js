export default class Player {
  constructor(color, posX, posY, width, height, keyUp, keyDown) {
    this.color = color;
    this.score = 0;
    this.position = {
      x: posX,
      y: posY,
    };
    this.width = width;
    this.height = height;
    this.speed = 20;
    this.keyUp = keyUp;
    this.keyDown = keyDown;

    this.borderColor = "black";
  }

  draw(ctx) {
    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(input, gameHeight) {
    if (input.isPressed(this.keyUp)) {
      if (this.position.y > 0) this.position.y -= this.speed;
    }

    if (input.isPressed(this.keyDown)) {
      if (this.position.y < gameHeight - this.height)
        this.position.y += this.speed;
    }
  }

  incrementScore() {
    this.score++;
  }
}

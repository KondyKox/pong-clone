export default class Ball {
  constructor(color, radius, gameWidth, gameHeight) {
    this.speed = 1;
    this.color = color;
    this.radius = radius;
    this.direction = {
      x: 0,
      y: 0,
    };

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.x = gameWidth / 2;
    this.y = gameHeight / 2;

    this.borderColor = "black";
  }

  create(ctx) {
    this.speed = 1;

    if (Math.round(Math.random()) === 1) this.direction.x = 1;
    else this.direction.x = -1;

    if (Math.round(Math.random()) === 1) this.direction.y = 1;
    else this.direction.y = -1;

    this.x = this.gameWidth / 2;
    this.y = this.gameHeight / 2;
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  update() {
    this.x += this.speed * this.direction.x;
    this.y += this.speed * this.direction.y;
  }
}

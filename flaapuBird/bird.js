class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }
  update() {
    let curve = Math.sin(angle) * 5;
    if (this.y > canvas.height - this.height * curve) {
      this.y = canvas.height - this.height * curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }
    if (spacePressed) this.flappy();
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  flappy() {
    this.vy -= 2;
  }
}
const bird = new Bird();

// https://youtu.be/lGJ9i6CYKyQ?t=996
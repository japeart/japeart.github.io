/* just a demo to experiment with 2d rotation */

const screen = new Screen();

class Vec2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  rotate(angle) {
    let x = this.x;
    let y = this.y;
    this.x = x * Math.cos(angle) - y * Math.sin(angle);
    this.y = x * Math.sin(angle) + y * Math.cos(angle);
  }

  scale(factor) {
    this.x *= factor;
    this.y *= factor;
  }

  translate(point) {
    this.x += point.x;
    this.y += point.y;
  }
}

class Polygon {
  constructor(points, origin, scale, rotSpeed) {
    this.points = points;
    this.origin = origin;
    this.rotSpeed = rotSpeed;
    this.points.forEach((p) => p.scale(scale));
  }

  /* loop around the points and draw the poly */
  draw() {
    screen.context.strokeStyle = "#ffffe6";
    screen.context.beginPath();
    screen.context.moveTo(this.points[0].x + this.origin.x, this.points[0].y + this.origin.y);

    for(let i = 1; i < this.points.length; i++) {
      screen.context.lineTo(this.points[i].x + this.origin.x, this.points[i].y + this.origin.y);
    }
    // last one
    screen.context.lineTo(this.points[0].x + this.origin.x, this.points[0].y + this.origin.y);
    screen.context.stroke();
  }

  update() {
    this.points.forEach((p) => p.rotate(this.rotSpeed));
  }
}

const tris = new Array();

for(let i = 0; i < 16; i++){
  let rot = Math.random() / 10;
  rot = rot > 0.04 ? -rot : rot;
  tris.push(new Polygon([
    new Vec2d(0, -10),
    new Vec2d(10, 10),
    new Vec2d(-10, 10)
  ], new Vec2d(Math.random() * 600, Math.random() * 600), Math.random() * 4, rot));
}

setInterval(tick, 33);

function tick() {
  screen.clear('#0000ff');

  for(key in tris) {
    tris[key].update();
  }

  for(key in tris) {
    tris[key].draw();
  }
}

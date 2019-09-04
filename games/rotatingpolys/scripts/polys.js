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
  constructor(points, origin, scale, increment, vel) {
    this.points = points;
    this.buffer = [];
    this.origin = origin;
    this.increment = increment;
    this.angle = increment;
    this.vel = vel;
    this.points.forEach((p) => p.scale(scale));
  }

  /* loop around the points and draw the poly */
  draw() {
    screen.context.strokeStyle = "#ffffe6";
    screen.context.beginPath();
    screen.context.moveTo(this.buffer[0].x, this.buffer[0].y);

    for(let i = 1; i < this.buffer.length; i++) {
      screen.context.lineTo(this.buffer[i].x, this.buffer[i].y);
    }
    // last one
    screen.context.lineTo(this.buffer[0].x, this.buffer[0].y);
    screen.context.stroke();
  }

  update() {
    // inc angle
    this.angle += this.increment;
    this.angle = this.angle % 360;
    // update origin
    this.origin.translate(this.vel);

    // get a transformation matrix
    let m = new Matrix3x3(
      new Vec2d(1, 0),
      new Vec2d(0, 1),
      new Vec2d(this.origin.x, this.origin.y));

    m.rotate(this.angle);

    for(let i = 0; i < this.points.length; i++) {
      this.buffer[i] = m.transform(this.points[i]);
    }

    // test
    this.origin.x = this.origin.x % 700;
    this.origin.y = this.origin.y % 700;
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
  ], new Vec2d(Math.random() * 600, Math.random() * 600), Math.random() * 4,
  rot, new Vec2d(Math.random(), Math.random())));
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

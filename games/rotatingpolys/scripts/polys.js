/* just a demo to experiment with 2d rotation */

const screen = new Screen();

class Vec2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Polygon {
  constructor(points, origin, scale) {
    this.points = points;
    this.origin = origin;
    this.scale(scale);
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

  /* move the origin to new location */
  translate(point) {
    this.origin.x += point.x;
    this.origin.y += point.y;
  }

  rotate(angle) {
    this.points.forEach((p) => {
      let x = p.x;
      let y = p.y;
      p.x = x * Math.cos(angle) - y * Math.sin(angle);
      p.y = x * Math.sin(angle) + y * Math.cos(angle);
    });
  }

  scale(factor) {
    this.points.forEach((p) => {
      p.x *= factor;
      p.y *= factor;
    });
  }
}

const tri1 = new Polygon([
  new Vec2d(0, -10),
  new Vec2d(10, 10),
  new Vec2d(-10, 10)
], new Vec2d(30, 30), 2);

const tri2 = new Polygon([
  new Vec2d(0, -10),
  new Vec2d(10, 10),
  new Vec2d(-10, 10)
], new Vec2d(120, 64), 4);

const tri3 = new Polygon([
  new Vec2d(0, -10),
  new Vec2d(10, 10),
  new Vec2d(-10, 10)
], new Vec2d(200, 172), 0.8);

const tri4 = new Polygon([
  new Vec2d(0, -10),
  new Vec2d(10, 10),
  new Vec2d(-10, 10)
], new Vec2d(52, 156), 3);

setInterval(tick, 33);

function tick() {
  screen.clear('purple');
  tri1.rotate(0.01);
  tri1.draw();

  tri2.rotate(0.1);
  tri2.draw();

  tri3.rotate(-0.002);
  tri3.draw();

  tri4.rotate(-0.02);
  tri4.draw();
}

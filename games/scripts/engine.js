/* various game dev related stuff */

// the HTML5 canvas must have this id
const canvas = document.getElementById("gamePanel");

// represent the sprite's area
class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

class Sprite extends Rect {
  constructor(rect, gfx, colour, scale) {
    super(rect.x, rect.y, rect.w, rect.h);
    this.rect = rect;
    this.gfx = gfx;
    this.colour = colour;
    this.alive = true;
    this.scale = scale;
  }

  draw(context) {
    context.fillStyle = this.colour;
    // an 8x8 array is 64 long innit...
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.gfx[j * 8 + i] == 1) {
          context.fillRect(this.rect.x + i * this.scale, this.rect.y + j * this.scale, this.scale, this.scale);
        }
      }
    }
  }

  wipe(context) {
    context.clearRect(rect.x, rect.y, rect.w, rect.h);
  }
}

/*
A class to represent the game screen
*/
class Screen {
  constructor() {
    this.key = false;
    this.rect = new Rect(0, 0, document.getElementById('gamePanel').width, document.getElementById('gamePanel').height);
    this.context = canvas.getContext("2d");
  }

  /* wipe the game screen */
  clear(colour) {
    this.context.fillStyle = colour;
    this.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  }
}

function isBoxColliding(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.w &&
   rect1.x + rect1.w > rect2.x &&
   rect1.y < rect2.y + rect2.h &&
   rect1.y + rect1.h > rect2.y) {
    return 'true';
  }
}

class Matrix3x3 {
  constructor(xBasis, yBasis, trans) {
    this.matrix = [
      xBasis.x, yBasis.x, trans.x,
      xBasis.y, yBasis.y, trans.y,
      0, 0, 1
    ];
  }

  rotate(angle) {
    this.matrix[0] = Math.cos(angle);
    this.matrix[1] = -Math.sin(angle);
    this.matrix[3] = Math.sin(angle);
    this.matrix[4] = Math.cos(angle);
    // console.log(this);
  }

  transform(vector) {
    let x = vector.x * this.matrix[0] + vector.y * this.matrix[1] + this.matrix[2];
    let y = vector.x * this.matrix[3] + vector.y * this.matrix[4] + this.matrix[5];
    return new Vec2d(x, y);
  }
}

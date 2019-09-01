/* Night Trucker - a simple road race game by John Peart 2019 */

// GFX data
const roadGfx = new Array(
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0);

const lampGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0);

const truckTop = new Array(
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

const truckBottom = new Array(
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0);

const carGfx = new Array(
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0);

const hiGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0);

const loGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 1, 0, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 0, 1, 0, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0);

const stickUpGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

const stickDownGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

// GLOBS
const canvas = document.getElementById("gamePanel");
let roadSpeed = 1;
let gearGfx = loGfx;
let stickGfx = stickUpGfx;
let gaugeLength = 0;
let journeyLength = 60;
let journeyTick = 0;

setInterval(tick, 33);

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
  constructor(rect, gfx, colour) {
    // super(rect.x, rect.y, rect.w, rect.h);
    super(8, 8, 8, 8);
    this.rect = rect;
    this.gfx = gfx;
    this.colour = colour;
    this.alive = true;

    this.draw = () => {
      drawSprite(gfx, rect, colour, 4);
    };

    this.wipe = () => {
      gameScreen.con.clearRect(rect.x, rect.y, rect.w, rect.h);
    };
  }
}

class Car extends Sprite {
  constructor(rect, gfx) {
    super(rect, gfx);
    this.pace = 1;
  }
}

class Truck extends Sprite {
  constructor(rect, gfx1, gfx2) {
    super(rect, gfx1);
    this.gfx2 = truckBottom;
    this.speed = 1;
    this.draw = () => {
      drawSprite(this.gfx, this.rect, this.colour, 8);
      drawSprite(this.gfx2, new Rect(this.rect.x, this.rect.y + this.rect.h * 4, this.rect.w), this.colour, 8);
    };
    this.move = () => {
      let oldX = this.rect.x;
      let oldY = this.rect.y;
      // let oldRect = this.rect.valueOf();
      switch (gameScreen.key) {
        case 68:
          this.rect.x += this.speed;
          break;

        case 65:
          this.rect.x -= this.speed;
          break;

        case 83:
          gearDown();
          break;

        case 87:
          gearUp();
          break;

        default:
          break;
      }

      // now check bounds
      if (this.rect.x < 0 || this.rect.x > gameScreen.size.w - this.rect.w ||
        this.rect.y < 0 || this.rect.y > gameScreen.size.h - this.rect.h) {
        this.rect.x = oldX;
        this.rect.y = oldY;
      }
    };
  }
}

// the game's screen, can incorporate controls too
let gameScreen = {
  key: false,
  init: function() {
    window.addEventListener('keydown', function(e) {
      gameScreen.key = e.keyCode;
      console.log(gameScreen.key);
    });

    window.addEventListener('keyup', function(e) {
      gameScreen.key = false;
      console.log('key up');
    });
  },
  size: new Rect(0, 0, document.getElementById('gamePanel').width, document.getElementById('gamePanel').height),
  con: canvas.getContext("2d"),
  clear: function() {
    this.con.fillStyle = "#000099";
    this.con.fillRect(this.size.x, this.size.y, this.size.w, this.size.h);
  }
};

// // prototype for a sprite
// function Sprite(rect, gfx, colour) {
//   this.rect = rect;
//   this.gfx = gfx;
//   this.colour = colour;
//   this.draw = function() { // draw the sprite
//     drawSprite(this.gfx, this.rect, colour, 4);
//   };
//   this.wipe = function() { // clear the sprite from canvas
//     gameScreen.con.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
//   };
// }

/* Draw Sprite : draw a sprite image using an 8x8 binary array */
function drawSprite(array, rect, colour, size) {
  gameScreen.con.fillStyle = colour;
  // an 8x8 array is 64 long innit...
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[j * 8 + i] == 1) {
        gameScreen.con.fillRect(rect.x + i * size, rect.y + j * size, size, size);
      }
    }
  }
}

/* an array of rects to represent the road layout. Offsets are calculated when
drawn */
let roadRow = new Array(
  new Rect(64 * 1, -64, 64, 64),
  new Rect(64 * 2, -64, 64, 64),
  new Rect(64 * 3, -64, 64, 64),
  new Rect(64 * 4, -64, 64, 64),
  new Rect(64 * 5, -64, 64, 64),
  new Rect(64 * 6, -64, 64, 64),
  new Rect(64 * 7, -64, 64, 64)
);

let carRow = new Array(
  new Car(new Rect(64 * 1, -64, 64, 64), carGfx),
  new Car(new Rect(64 * 2, -64, 64, 64), carGfx),
  new Car(new Rect(64 * 3, -64, 64, 64), carGfx),
  new Car(new Rect(64 * 4, -64, 64, 64), carGfx),
  new Car(new Rect(64 * 5, -64, 64, 64), carGfx),
  new Car(new Rect(64 * 6, -64, 64, 64), carGfx)
);

// Truck.prototype = new Sprite(new Rect(48, 352, 64, 64), truckTop, "#0000ff");

// function Truck() {
//   this.speed = 1;
//   this.gfx2 = truckBottom;
//   this.draw = function() { // draw the sprite
//     drawSprite(this.gfx, this.rect, this.colour, 8);
//     drawSprite(this.gfx2, new Rect(this.rect.x, this.rect.y + this.rect.h, this.rect.w), this.colour, 8);
//
//     drawLamp(this.rect.x - 14, this.rect.y - 68);
//     drawLamp(this.rect.x + 14, this.rect.y - 68);
//   };
//   this.move = function() {
//     let oldX = this.rect.x;
//     let oldY = this.rect.y;
//     // let oldRect = this.rect.valueOf();
//     switch (gameScreen.key) {
//       case 68:
//         this.rect.x += this.speed;
//         break;
//
//       case 65:
//         this.rect.x -= this.speed;
//         break;
//
//       case 83:
//         gearDown();
//         break;
//
//       case 87:
//         gearUp();
//         break;
//
//       default:
//         break;
//     }
//
//     // now check bounds
//     if (this.rect.x < 0 || this.rect.x > gameScreen.size.w - this.rect.w ||
//       this.rect.y < 0 || this.rect.y > gameScreen.size.h - this.rect.h) {
//       this.rect.x = oldX;
//       this.rect.y = oldY;
//     }
//   };
// }

// /* draw the Truck's headlamps */
// function drawLamp(x, y) {
//   let num = Math.floor((Math.random() * 5) + 1);
//   if (num == 3) {
//     drawSprite(lampGfx, new Rect(x, y, 64, 64), "#0000ff", 8);
//   }
// }

function makeCar() {
  // one in 25 chance of a car
  num = Math.floor((Math.random() * 25) + 1);
  if (num == 23) {
    // pick a random lane between 0 - 5
    num = Math.floor((Math.random() * 6));
    if (!carRow[num].alive) {
      carRow[num].alive = true;
      carRow[num].pace = Math.random() + 0.2;
    }
  }
}

// move the car down the screen and check bounds
function moveCar(car) {
  car.rect.y += roadSpeed * car.pace;
  // if offscreen, kill
  if (car.rect.y > gameScreen.size.h) {
    car.alive = false;
    car.rect.y = -car.rect.h;
  }
}

// change to a higher gear
function gearUp() {
  roadSpeed = 2;
  gearGfx = hiGfx;
  stickGfx = stickDownGfx;
}

// change to a lower gear
function gearDown() {
  roadSpeed = 1;
  gearGfx = loGfx;
  stickGfx = stickUpGfx;
}

// calc size of the distance meter
function calcMeter() {
  journeyTick++;
  if(journeyTick > journeyLength) {
    gaugeLength += roadSpeed;
    journeyTick = 0;
  }
}

/* draw the game entities */
function render() {
  // road
  for (i = 0; i < 9; i++) {
    newY = i * 64;
    for (j = 0; j < roadRow.length; j++) {
      s = new Rect(roadRow[j].x, roadRow[j].y + newY, 64, 64);
      drawSprite(roadGfx, s, "#0000ff", 8);
    }
  }

  // cars
  for (i = 0; i < carRow.length; i++) {
    c = carRow[i];
    drawSprite(c.gfx, c.rect, "#ffffff", 8);
  }

  // the truck
  t1.draw();

  // HUD
  drawSprite(stickGfx, new Rect(64 * 8, 64 * 6, 64, 64), "#ffffff", 8);
  drawSprite(gearGfx, new Rect(64 * 8, 64 * 7, 64, 64), "#ffffff", 8);

  // draw the meter
  calcMeter();
  gameScreen.con.fillStyle = "#ffffff";
  gameScreen.con.fillRect(64 * 8 + 12, 8 * 24 - gaugeLength, 8, gaugeLength);
}

/* update the game entities */
function update() {
  // move stuff
  t1.move();

  // spawn a new car ?
  makeCar();

  // move cars
  for (i = 0; i < carRow.length; i++) {
    c = carRow[i];
    if (c.alive) {
      moveCar(carRow[i]);
    }
  }

  // move road
  for (i = 0; i < roadRow.length; i++) {
    roadRow[i].y += roadSpeed;
    /* offscreen? */
    if (roadRow[i].y > gameScreen.size.y) {
      roadRow[i].y = -64;
    }
  }
}

let t1 = new Truck(new Rect(48, 352, 16, 16), truckTop);

/* this is the main game loop */
function tick() {
  gameScreen.clear();

  update();

  /* draw stuff */
  render();
}

// GFX data
var roadGfx = new Array(
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0);

var lampGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0);

var truckTop = new Array(
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

var truckBottom = new Array(
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0);

var carGfx = new Array(
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 0, 0);

var hiGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0);

var loGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 1, 0, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0,
  0, 0, 1, 0, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0);

var stickUpGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

var stickDownGfx = new Array(
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 1, 0);

// GLOBS
var can = document.getElementById("gamePanel");
var roadSpeed = 1;
var gearGfx = loGfx;
var stickGfx = stickUpGfx;
var gaugeLength = 0;
var journeyLength = 60;
var journeyTick = 0;

setInterval(tick, 16);

// represent the sprite's area
function Rect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

// a road obstacle
function Car(rect, gfx) {
  this.alive = false;
  this.rect = rect;
  this.gfx = gfx;
  this.pace = 1;
}

// the game's screen, can incorporate controls too
var gameScreen = {
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
  con: can.getContext("2d"),
  clear: function() {
    this.con.fillStyle = "#000099";
    this.con.fillRect(this.size.x, this.size.y, this.size.w, this.size.h);
  }
};

// prototype for a sprite
function Sprite(rect, gfx, colour) {
  this.rect = rect;
  this.gfx = gfx;
  this.colour = colour;
  this.draw = function() { // draw the sprite
    drawSprite(this.gfx, this.rect, colour, 4);
  };
  this.wipe = function() { // clear the sprite from canvas
    gameScreen.con.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  };
}

/* Draw Sprite : draw a sprite image using an 8x8 binary array */
function drawSprite(array, rect, colour, size) {
  gameScreen.con.fillStyle = colour;
  // an 8x8 array is 64 long innit...
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (array[j * 8 + i] == 1) {
        gameScreen.con.fillRect(rect.x + i * size, rect.y + j * size, size, size);
      }
    }
  }
}

/* an array of rects to represent the road layout. Offsets are calculated when
drawn */
var roadRow = new Array(
  new Rect(32 * 1, -32, 32, 32),
  new Rect(32 * 2, -32, 32, 32),
  new Rect(32 * 3, -32, 32, 32),
  new Rect(32 * 4, -32, 32, 32),
  new Rect(32 * 5, -32, 32, 32),
  new Rect(32 * 6, -32, 32, 32),
  new Rect(32 * 7, -32, 32, 32)
);

var carRow = new Array(
  new Car(new Rect(32 * 1, -32, 32, 32), carGfx),
  new Car(new Rect(32 * 2, -32, 32, 32), carGfx),
  new Car(new Rect(32 * 3, -32, 32, 32), carGfx),
  new Car(new Rect(32 * 4, -32, 32, 32), carGfx),
  new Car(new Rect(32 * 5, -32, 32, 32), carGfx),
  new Car(new Rect(32 * 6, -32, 32, 32), carGfx)
);

Truck.prototype = new Sprite(new Rect(48, 176, 32, 32), truckTop, "#0000ff");

function Truck() {
  this.speed = 1;
  this.gfx2 = truckBottom;
  this.draw = function() { // draw the sprite
    drawSprite(this.gfx, this.rect, this.colour, 4);
    drawSprite(this.gfx2, new Rect(this.rect.x, this.rect.y + this.rect.h, this.rect.w), this.colour, 4);

    drawLamp(this.rect.x - 7, this.rect.y - 34);
    drawLamp(this.rect.x + 7, this.rect.y - 34);
  };
  this.move = function() {
    var oldX = this.rect.x;
    var oldY = this.rect.y;
    // var oldRect = this.rect.valueOf();
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

/* draw the Truck's headlamps */
function drawLamp(x, y) {
  var num = Math.floor((Math.random() * 5) + 1);
  if (num == 3) {
    drawSprite(lampGfx, new Rect(x, y, 32, 32), "#0000ff", 4);
  }
}

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

var t1 = new Truck();

function tick() {
  // wipe screen
  gameScreen.clear();

  // move stuff
  t1.move();

  // spawn a new car ?
  makeCar();

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
      roadRow[i].y = -32;
    }
  }

  // draw stuff

  // road
  for (i = 0; i < 9; i++) {
    newY = i * 32;
    for (j = 0; j < roadRow.length; j++) {
      s = new Rect(roadRow[j].x, roadRow[j].y + newY, 32, 32);
      drawSprite(roadGfx, s, "#0000ff", 4);
    }
  }

  // cars
  for (i = 0; i < carRow.length; i++) {
    c = carRow[i];
    drawSprite(c.gfx, c.rect, "#ffffff", 4);
  }

  // the truck
  t1.draw();

  // HUD
  drawSprite(stickGfx, new Rect(32 * 8, 32 * 6, 32, 32), "#ffffff", 4);
  drawSprite(gearGfx, new Rect(32 * 8, 32 * 7, 32, 32), "#ffffff", 4);

  // draw the meter
  calcMeter();
  gameScreen.con.fillStyle = "#ffffff";
  gameScreen.con.fillRect(32 * 8 + 12, 8 * 24 - gaugeLength, 8, gaugeLength);
}

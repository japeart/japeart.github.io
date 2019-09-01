/* a lovely game of Pong */

class Ball {
  constructor() {
    this.rect = new Rect(0, 0, 16, 16);
    this.colour = "#ffffff";
    this.xSpeed = 4;
    this.ySpeed = 4;
  }

  draw(context) {
    context.fillStyle = this.colour;
    context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  }

  speedUp() {
    this.xSpeed = this.xSpeed * 1.1;
    this.ySpeed = this.ySpeed * 1.1;
  }

  resetBall(bat) {
    this.ySpeed = 4;
    if(bat == 'player') {
      this.xSpeed = -4;
    } else {
      this.xSpeed = 4;
    }
  }

  update() {
    /* are we colliding with the player? */
    if(isBoxColliding(this.rect, player.rect)) {
      this.xSpeed = -this.xSpeed;
      this.speedUp();
    } else if (isBoxColliding(this.rect, enemy.rect)) {
      this.xSpeed = -this.xSpeed;
      this.speedUp();
    } else if (this.rect.x + this.rect.w < 0) {
      pointScored('enemy');
    } else if (this.rect.x > SCREEN_WIDTH) {
      pointScored('player');
    }

    /* top and bottom edges */
    if(this.rect.y < 0 || this.rect.y + this.rect.h > SCREEN_HEIGHT) {
      this.ySpeed = -this.ySpeed;
    }

    this.rect.x += this.xSpeed;
    this.rect.y += this.ySpeed;
  }
}

class Bat {
  constructor(x, y) {
    this.rect = new Rect(x, y, 16, 48);
    this.colour = "#ffffff";
    this.ySpeed = 4;
  }

  draw(context) {
    context.fillStyle = this.colour;
    context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  }
}

class Player extends Bat {
  constructor() {
    super(0, 0);
    // fix the height
    this.rect.y = (SCREEN_HEIGHT / 2) - (this.rect.h / 2);
  }

  update() {
    let oldY = this.rect.y;

    switch (screen.key) {

      case 83:
      this.rect.y += this.ySpeed;
      console.log('up');
      break;

      case 87:
      this.rect.y -= this.ySpeed;
      break;

      default:
      break;
    }
    if(this.rect.y < 0 | this.rect.y > SCREEN_HEIGHT - this.rect.h) {
      this.rect.y = oldY;
    }
  }
}

class Enemy extends Bat {
  constructor() {
    super(0, 0);
    // fix position
    this.rect.x = SCREEN_WIDTH - this.rect.w;
    this.rect.y = (SCREEN_HEIGHT / 2) - (this.rect.h / 2);
  }

  update() {
    // move the baddie twice to combat jitter
    for(let i = 0; i < this.ySpeed; i++) {
      let oldY = this.rect.y;
      // if past halfway
      if(ball.rect.x > SCREEN_WIDTH / 2) {
        if(ball.rect.y > this.rect.y) {
          this.rect.y += 1;
        }
        else if (ball.rect.y < this.rect.y) {
          this.rect.y -= 1;
        }
      }
      // no, so return to middle
      else {
        this.rect.y = (this.rect.y + this.rect.h / 2) < SCREEN_HEIGHT / 2 ? this.rect.y += 1 : this.rect.y -= 1;
      }

      if(this.rect.y < 0 | this.rect.y > SCREEN_HEIGHT - this.rect.h) {
        this.rect.y = oldY;
      }
    }
  }
}

const screen = new Screen();
const SCREEN_WIDTH = screen.rect.w;
const SCREEN_HEIGHT = screen.rect.h;
const ball = new Ball();
const player = new Player();
const enemy = new Enemy();
var pScore = 0;
var eScore = 0;
setInterval(tick, 33);

/* add controls */
window.addEventListener('keydown', function(e) {
  screen.key = e.keyCode;
  console.log(screen.key);
});

window.addEventListener('keyup', function(e) {
  screen.key = false;
  console.log('key up');
});

/* render loop */
function tick() {
  screen.clear("#00ff00");
  // screen.drawGrid(16, SCREEN_WIDTH, SCREEN_HEIGHT);
  drawNet();
  drawScore()

  ball.update();
  player.update();
  enemy.update();

  ball.draw(screen.context);
  player.draw(screen.context);
  enemy.draw(screen.context);

  isWon();
}

function drawScore() {
  screen.context.fillStyle = "#ffffff";
  screen.context.font = "30px Arial";
  screen.context.fillText(pScore, 148, 30);
  screen.context.fillText(eScore, SCREEN_WIDTH - 148, 30);
}

function drawNet() {
  for(let i = 0; i < SCREEN_HEIGHT; i+= 16) {
    screen.context.fillStyle = '#ffffff';
    screen.context.fillRect(SCREEN_WIDTH / 2, i, 4, 8);
  }
}

function isWon() {
  if(pScore == 13 || eScore == 13) {
    pScore = 0;
    eScore = 0;
  }
}

function pointScored(bat) {
  ball.rect.x = SCREEN_WIDTH / 2;
  ball.rect.y = SCREEN_HEIGHT / 2;

  if(bat == 'enemy') {
    eScore++;
    ball.resetBall(bat);
  } else {
    pScore++;
    ball.resetBall(bat);
  }
}

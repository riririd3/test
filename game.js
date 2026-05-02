let moveLeft = false;
let moveRight = false;
let jump = false;

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: true
    }
  },
  scene: {
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;
function create() {
  // ground
  const ground = this.add.rectangle(400, 580, 800, 40, 0x00ff00);
  this.physics.add.existing(ground, true);

  // player
  player = this.add.rectangle(100, 450, 40, 40, 0xff0000);
  this.physics.add.existing(player);
  player.body.setCollideWorldBounds(true);

  // collision
  this.physics.add.collider(player, ground);

  // keyboard
  cursors = this.input.keyboard.createCursorKeys();

  // LEFT button
  const leftBtn = this.add.text(50, 500, "⬅️")
    .setFontSize(40)
    .setInteractive();

  // RIGHT button
  const rightBtn = this.add.text(120, 500, "➡️")
    .setFontSize(40)
    .setInteractive();

  // JUMP button
  const jumpBtn = this.add.text(700, 500, "⬆️")
    .setFontSize(40)
    .setInteractive();

  // LEFT
  leftBtn.on("pointerdown", () => moveLeft = true);
  leftBtn.on("pointerup", () => moveLeft = false);
  leftBtn.on("pointerout", () => moveLeft = false);

  // RIGHT
  rightBtn.on("pointerdown", () => moveRight = true);
  rightBtn.on("pointerup", () => moveRight = false);
  rightBtn.on("pointerout", () => moveRight = false);

  // JUMP
  jumpBtn.on("pointerdown", () => jump = true);
  jumpBtn.on("pointerup", () => jump = false);
}
let canJump = true;

function update() {
  const left = cursors.left.isDown || moveLeft;
  const right = cursors.right.isDown || moveRight;

  if (left) {
    player.body.setVelocityX(-200);
  } else if (right) {
    player.body.setVelocityX(200);
  } else {
    player.body.setVelocityX(0);
  }

  if ((cursors.up.isDown || jump) && player.body.touching.down && canJump) {
    player.body.setVelocityY(-350);
    canJump = false;
  }

  if (!cursors.up.isDown && !jump) {
    canJump = true;
  }
}

let player;
let cursors;

let moveLeft = false;
let moveRight = false;
let jump = false;
let canJump = true;

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

new Phaser.Game(config);

function create() {
  this.cameras.main.startFollow(player);
  this.cameras.main.setBounds(0, 0, 2000, 600);
  // allow multi-touch
  this.input.addPointer(3);

  // world bounds (for future camera use)
  this.physics.world.setBounds(0, 0, 2000, 600);

  // ground
  const ground = this.add.rectangle(1000, 580, 2000, 40, 0x00ff00);
  this.physics.add.existing(ground, true);

  // player
  player = this.add.rectangle(100, 450, 40, 40, 0xff0000);
  this.physics.add.existing(player);

  player.body.setCollideWorldBounds(true);
  player.body.setDragX(600);
  player.body.setMaxVelocity(200, 500);

  // collision
  this.physics.add.collider(player, ground);

  // keyboard
  cursors = this.input.keyboard.createCursorKeys();

  // =====================
  // MOBILE BUTTONS
  // =====================

  // LEFT button
  const leftBtn = this.add.rectangle(70, 520, 90, 90, 0x000000, 0.4)
    .setInteractive()
    .setScrollFactor(0);

  this.add.text(50, 500, "⬅️").setFontSize(30).setScrollFactor(0);

  // RIGHT button
  const rightBtn = this.add.rectangle(170, 520, 90, 90, 0x000000, 0.4)
    .setInteractive()
    .setScrollFactor(0);

  this.add.text(150, 500, "➡️").setFontSize(30).setScrollFactor(0);

  // JUMP button
  const jumpBtn = this.add.rectangle(730, 520, 90, 90, 0x000000, 0.4)
    .setInteractive()
    .setScrollFactor(0);

  this.add.text(710, 500, "⬆️").setFontSize(30).setScrollFactor(0);

  // =====================
  // BUTTON EVENTS
  // =====================

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

  // DEBUG (optional)
  this.input.on("pointerdown", () => {
    console.log("touch detected");
  });
}

function update() {
  const left = cursors.left.isDown || moveLeft;
  const right = cursors.right.isDown || moveRight;

  // movement
  if (left) {
    player.body.setAccelerationX(-600);
  } else if (right) {
    player.body.setAccelerationX(600);
  } else {
    player.body.setAccelerationX(0);
  }

  // jump
  if ((cursors.up.isDown || jump) && player.body.blocked.down && canJump) {
    player.body.setVelocityY(-350);
    canJump = false;
  }

  if (!cursors.up.isDown && !jump) {
    canJump = true;
  }
}

class ExploreScene extends Phaser.Scene {
  constructor() {
    super("ExploreScene");
  }

  create() {

    this.player = this.add.rectangle(100, 100, 32, 32, 0x00ff00);

    this.enemy = this.add.rectangle(300, 100, 32, 32, 0xff0000);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {

    if (this.cursors.left.isDown) {
      this.player.x -= 2;
    }

    if (this.cursors.right.isDown) {
      this.player.x += 2;
    }

    if (this.cursors.up.isDown) {
      this.player.y -= 2;
    }

    if (this.cursors.down.isDown) {
      this.player.y += 2;
    }

  }
}

const config = {
  type: Phaser.AUTO,

  width: 800,
  height: 600,

  backgroundColor: "#222222",

  scene: [ExploreScene]
};

const game = new Phaser.Game(config);

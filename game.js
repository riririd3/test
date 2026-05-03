class ExploreScene extends Phaser.Scene {
  constructor() {
  super("ExploreScene");
}
  create() {
  this.player = this.add.rectangle(100,100,30,30,0x00ff00);
  const leftBtn = this.add.rectangle(this.scale.width-20,this.scale.height-80,90,90,0x000000,0.2)
  .setInteractive()
  .setScrollFactor(0);
  this.add.text(this.scale.width-20,this.scale.height-80,"<").setFontSize(50);
  leftBtn.on("pointerdown", () => {
  this.player.x -= 30;
  });
}
}

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#222222",
  scale: {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [ExploreScene]
  };

const game = new Phaser.Game(config);

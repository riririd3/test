class ExploreScene extends Phaser.Scene {
  constructor() {
  super("ExploreScene");
}
  create() {
  this.player = this.add.rectangle(100,100,30,30,0x00ff00);
  const leftBtn = this.add.rectangle(150,this.scale.height-120,90,90,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const leftText = this.add.text(leftBtn.x-12,leftBtn.y-25,"<")
  .setFontSize(50).setScrollFactor(0);
  leftBtn.on("pointerdown", () => {
  this.player.x -= 30;
  });
  const rightBtn = this.add.rectangle(400,this.scale.height-120,90,90,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const rightText = this.add.text(rightBtn.x-12,rightBtn.y-25,">")
  .setFontSize(50).setScrollFactor(0);
  rightBtn.on("pointerdown", () => {
  this.player.x += 30;
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

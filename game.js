class ExploreScene extends Phaser.Scene {
  constructor() {
  super("ExploreScene");
}
  create() {
  this.player = this.add.rectangle(100,100,30,30,0x00ff00);
  const leftBtn = this.add.rectangle(100,this.scale.height-150,100,100,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const leftText = this.add.text(leftBtn.x-12,leftBtn.y-25,"⬅️")
  .setFontSize(50).setScrollFactor(0);
  leftBtn.on("pointerdown", () => {
  this.player.x -= 30;
  });
  const rightBtn = this.add.rectangle(250,this.scale.height-150,100,100,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const rightText = this.add.text(rightBtn.x-12,rightBtn.y-25,"➡️")
  .setFontSize(50).setScrollFactor(0);
  rightBtn.on("pointerdown", () => {
  this.player.x += 30;
  });
  const upBtn = this.add.rectangle(175,this.scale.height-200,100,100,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const upText = this.add.text(upBtn.x-12,upBtn.y-25,"⬆️")
  .setFontSize(50).setScrollFactor(0);
  upBtn.on("pointerdown", () => {
  this.player.y -= 30;
  });
  const downBtn = this.add.rectangle(175,this.scale.height-100,100,100,0x000000,0.2)
  .setInteractive().setScrollFactor(0);
  const downText = this.add.text(downBtn.x-12,downBtn.y-25,"⬇️")
  .setFontSize(50).setScrollFactor(0);
  downBtn.on("pointerdown", () => {
  this.player.y += 30;
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

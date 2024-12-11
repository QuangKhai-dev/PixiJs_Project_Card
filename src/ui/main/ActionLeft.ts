import { Container, Sprite } from 'pixi.js';

export class ActionLeft extends Container {
  private infoButton: Sprite;
  private payTable: Sprite;

  constructor() {
    super();

    // tạo infoButton
    this.infoButton = Sprite.from('console/info_btn');
    this.infoButton.scale.set(0.7);
    this.infoButton.x = 0;
    this.infoButton.y = 50;
    this.addChild(this.infoButton);

    // tạo payTable
    this.payTable = Sprite.from('console/paytable_btn');
    this.payTable.scale.set(0.7);
    this.payTable.x = 0;
    this.payTable.y = 150;
    this.addChild(this.payTable);
  }
}

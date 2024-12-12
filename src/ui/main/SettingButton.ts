import { Container, Sprite } from 'pixi.js';

export class SettingButton extends Container {
  private image: Sprite;
  constructor() {
    super();

    this.image = Sprite.from('console/menu_btn');
    this.image.anchor.set(0.5);
    this.image.scale.set(1);
    this.addChild(this.image);
  }
}

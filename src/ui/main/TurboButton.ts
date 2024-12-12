import { Container, Sprite, Text } from 'pixi.js';

export class TurboButton extends Container {
  private text: Text;
  private image: Sprite;

  constructor() {
    super();

    this.image = Sprite.from('console/turbo_btn');
    this.image.anchor.set(0.5);
    this.image.scale.set(0.8);
    this.addChild(this.image);

    this.text = new Text('Turbo', {
      fontFamily: 'Arial',
      fontSize: 25,
      stroke: '#000000',
      strokeThickness: 3,
      fontWeight: '600',
      fill: '#FFBF90',
      align: 'center',
    });
    this.text.anchor.set(0.5);
    this.text.y = this.image.height / 2;
    this.addChild(this.text);
  }
}

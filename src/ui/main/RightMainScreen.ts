import { FancyButton } from '@pixi/ui';
import { Container, Sprite, Text } from 'pixi.js';
import { PlayButton } from './PlayButton';

export class RightMainScreen extends Container {
  private textWays: Text;
  private wildImage: Sprite;
  private freeSpinButton: FancyButton;
  private playButton: Container;

  constructor() {
    super();

    // xử lí tạo text way
    this.textWays = new Text('32400 Ways', {
      fontFamily: 'Arial',
      fontSize: 50,
      stroke: '#000000',
      fontWeight: '600',
      fill: '#FF2A05',
      align: 'center',
    });
    this.textWays.anchor.set(0.5);
    this.addChild(this.textWays);

    // thêm wild image
    this.wildImage = Sprite.from('console/wild_gage');
    this.wildImage.y = this.wildImage.height / 2 + 40;
    this.wildImage.anchor.set(0.5);
    this.addChild(this.wildImage);

    // thêm button free spin
    this.freeSpinButton = new FancyButton({
      defaultView: `console/buyfreespin_btn`,
      hoverView: `console/buyfreespin_btn`,
      pressedView: `console/buyfreespin_btn`,
      text: new Text('Buy Free Spin', {
        fill: '#FFBF90',
        stroke: '#000000',
        strokeThickness: 4,
        fontFamily: 'DB Sharp X Bd',
        align: 'center',
        letterSpacing: 1,
        fontSize: 45,
      }),
      animations: {
        hover: {
          props: {
            scale: { x: 1.03, y: 1.03 },
            y: 0,
          },
          duration: 100,
        },
        pressed: {
          props: {
            scale: { x: 0.9, y: 0.9 },
            y: 10,
          },
          duration: 100,
        },
      },
    });
    this.scale.set(0.9);
    this.freeSpinButton.textOffset = { x: 0, y: -10 };
    this.freeSpinButton.y = this.textWays.height / 2 + this.wildImage.height + 20;
    this.freeSpinButton.x = 0 - this.freeSpinButton.width / 2;
    this.addChild(this.freeSpinButton);

    // tạo button play
    this.playButton = new PlayButton();
    this.playButton.x = 0;
    this.playButton.y = this.freeSpinButton.y + this.freeSpinButton.height + this.playButton.height / 2 + 20;
    this.addChild(this.playButton);

    this.x = window.innerWidth - this.width / 2 - 50;
    this.y = 50;
  }
}

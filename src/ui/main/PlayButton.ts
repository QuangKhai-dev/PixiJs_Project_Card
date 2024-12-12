import { Container, Graphics, Sprite } from 'pixi.js';
import { app } from '../../main';
import { TurboButton } from './TurboButton';
import { AutoButton } from './AutoButton';
import { SettingButton } from './SettingButton';

export class PlayButton extends Container {
  private arrowRotation: Sprite;
  private backgroundButton: Sprite;
  private turboButton: Container;
  private autoButton: Container;
  private settingButton: Container;

  constructor() {
    super();

    this.backgroundButton = Sprite.from('console/spin_btn');
    this.backgroundButton.anchor.set(0.5);
    this.backgroundButton.scale.set(0.8);
    this.addChild(this.backgroundButton);

    this.arrowRotation = Sprite.from('console/spin_arrow');
    this.arrowRotation.anchor.set(0.5);
    this.arrowRotation.scale.set(0.9);
    this.addChild(this.arrowRotation);
    app.ticker.add(() => {
      this.arrowRotation.rotation += 0.01;
    });

    // add Turbo button
    this.turboButton = new TurboButton();
    this.turboButton.x = this.backgroundButton.x - this.backgroundButton.width / 2 - 10;
    this.turboButton.y = this.backgroundButton.y + this.turboButton.height / 2 + 20;
    this.addChild(this.turboButton);

    // add Auto button
    this.autoButton = new AutoButton();
    this.autoButton.x = this.backgroundButton.x + this.backgroundButton.width / 2 + 10;
    this.autoButton.y = this.backgroundButton.y + this.autoButton.height / 2 + 20;
    this.addChild(this.autoButton);

    // add Setting button
    this.settingButton = new SettingButton();
    this.settingButton.x = this.backgroundButton.x + this.backgroundButton.width / 2 + this.autoButton.width / 2 + 10;
    this.settingButton.y = this.backgroundButton.y - this.settingButton.height / 2 - 10;
    this.addChild(this.settingButton);

    // Vẽ đường viền bằng PIXI.Graphics
    // const bounds = this.getBounds();
    // const border = new Graphics();
    // border.lineStyle(2, 0xff0000, 1); // Độ dày 2px, màu đỏ, độ trong suốt 1
    // border.drawRect(bounds.x, bounds.y, bounds.width, bounds.height); // Vẽ một hình chữ nhật với kích thước của Container
    // border.endFill();

    // Thêm đường viền vào container
    // this.addChild(border);
  }
}

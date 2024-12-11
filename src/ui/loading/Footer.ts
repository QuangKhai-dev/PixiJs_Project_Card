import { Container, Sprite, Text } from 'pixi.js';

const textLicense = `www.spinix.com \n2022 © Spinix ™ All rights Reserved`;
export class FooterLoading extends Container {
  private background: Sprite;
  private logoFooter: Sprite;
  private textFooter: Text;

  constructor() {
    super();

    // tạo lớp phủ cho footer
    this.background = Sprite.from('util_black');
    this.background.width = window.innerWidth;
    this.background.height = 120;
    this.background.alpha = 120;
    this.addChild(this.background);

    // tạo logo footer
    this.logoFooter = Sprite.from('logo_xgaming');
    this.logoFooter.x = 0;
    this.addChild(this.logoFooter);

    // xử lí tạo textFooter
    this.textFooter = new Text(textLicense, {
      fill: 0xffffff,
      stroke: '#B51C19',
      strokeThickness: 3,
      fontFamily: 'Kanit-Light',
      align: 'right',
    });
    this.textFooter.x = window.innerWidth - this.textFooter.width - 20;
    this.textFooter.y = 60 - this.textFooter.height / 2;
    this.addChild(this.textFooter);

    // set vị trí x và y cho footer
    this.x = 0;
    this.y = window.innerHeight - 120;
  }
}

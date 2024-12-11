import { FancyButton } from '@pixi/ui';
import { Application, Container, Sprite, Text } from 'pixi.js';
import { FooterLoading } from '../ui/loading/Footer';
import { ParticleLoading } from '../ui/loading/ParticleLoading';

export class LoadScreen extends Container {
  private logoGame: Sprite;
  private btnStart: FancyButton;
  private footer: Container;
  private background: Sprite;
  private animationLogo: ParticleLoading;

  constructor() {
    super();
    // tạo background
    this.background = Sprite.from('startscreen_landscape');
    this.background.anchor.set(0.5);
    this.background.x = window.innerWidth / 2;
    this.background.y = window.innerHeight / 2;
    this.addChild(this.background);

    // tạo hiệu ứng
    this.animationLogo = new ParticleLoading();
    this.addChild(this.animationLogo);

    // // Xử lí tạo logo
    this.logoGame = Sprite.from('logogame');
    this.logoGame.anchor.set(0.5);
    this.logoGame.scale.set(0.9);
    this.logoGame.x = window.innerWidth / 2;
    this.logoGame.y = window.innerHeight / 2;
    this.addChild(this.logoGame);

    // // // Xử lí tạo btn start
    this.btnStart = new FancyButton({
      defaultView: `start_btn`,
      hoverView: `start_btn`,
      pressedView: `start_btn`,
      text: new Text('Start', {
        fill: '#FFCF38',
        stroke: '#250200',
        strokeThickness: 1,
        fontFamily: 'Kanit-Light',
        align: 'center',
        fontSize: 50,
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

    this.btnStart.anchor.set(0.5);
    this.btnStart.scale.set(1);
    this.btnStart.x = window.innerWidth / 2;
    this.btnStart.y = window.innerHeight / 2 + +this.logoGame.height / 2 + 70;
    this.addChild(this.btnStart);

    // // // xử lí tạo footer
    this.footer = new FooterLoading();
    this.addChild(this.footer);
  }

  // update sự kiện click cho nút start
  public onClickStart(callback: () => void) {
    this.btnStart.on('click', callback);
  }
}

import { Container, Sprite, Text } from 'pixi.js';

export class ListInfoUser extends Container {
  private totalBet: Container;
  private changeBet: Container;
  private totalWin: Container;
  private betNumber: number = 1;
  private changeBetText: Text;

  constructor() {
    super();

    // tạo totalBet
    this.totalBet = new Container();
    const backgroundTotalBet = Sprite.from('console/balance_box');
    backgroundTotalBet.anchor.set(0.5);
    this.totalBet.addChild(backgroundTotalBet);
    const totalBetText = new Text('DMO 200000', {
      fontFamily: 'Arial',
      fontSize: 20,
      fill: '#FFBF90',
      align: 'center',
    });
    totalBetText.anchor.set(0.5);
    this.totalBet.addChild(totalBetText);

    // tạo changeBet
    this.changeBet = new Container();
    const backgroundChangeBet = Sprite.from('console/bet_box');
    backgroundChangeBet.anchor.set(0.5);
    this.changeBet.x = backgroundTotalBet.width / 2 + backgroundChangeBet.width / 2 + 10;
    this.changeBet.addChild(backgroundChangeBet);
    // tạo sprite plus and minus
    const minus = Sprite.from('console/minus_btn');
    const plus = Sprite.from('console/plus_btn');
    // set vị trí cho minus and plus nằm trái và phải backgorund
    minus.anchor.set(0.5);
    plus.anchor.set(0.5);
    plus.eventMode = 'static';
    plus.cursor = 'pointer';
    minus.eventMode = 'static';
    minus.cursor = 'pointer';
    plus.x = backgroundChangeBet.width / 2 - plus.width / 2;
    minus.x = -backgroundChangeBet.width / 2 + minus.width / 2;
    plus.on('click', this.increaseBet.bind(this));
    minus.on('click', this.decreaseBet.bind(this));
    this.changeBet.addChild(minus);
    this.changeBet.addChild(plus);
    this.changeBetText = new Text(`DMO ${this.betNumber}`, {
      fontFamily: 'Arial',
      fontSize: 20,
      fill: '#FFBF90',
      align: 'center',
    });
    this.changeBetText.anchor.set(0.5);
    this.changeBet.addChild(this.changeBetText);

    // tạo totalWin
    this.totalWin = new Container();
    const backgroundTotalWin = Sprite.from('console/win_box');
    backgroundTotalWin.anchor.set(0.5);
    this.totalWin.x = backgroundTotalBet.width / 2 + backgroundChangeBet.width + backgroundTotalWin.width / 2 + 20;
    this.totalWin.addChild(backgroundTotalWin);
    const totalWinText = new Text('DMO 20', {
      fontFamily: 'Arial',
      fontSize: 20,
      fill: '#FFBF90',
      align: 'center',
    });
    totalWinText.anchor.set(0.5);
    this.totalWin.addChild(totalWinText);

    this.addChild(this.totalBet);
    this.addChild(this.changeBet);
    this.addChild(this.totalWin);
  }

  private increaseBet() {
    if (this.betNumber < 30) {
      this.betNumber++;
      this.updateBetText();
    }
  }

  private decreaseBet() {
    if (this.betNumber > 1) {
      this.betNumber--;
      this.updateBetText();
    }
  }

  private updateBetText() {
    this.changeBetText.text = `DMO ${this.betNumber}`;
  }
}

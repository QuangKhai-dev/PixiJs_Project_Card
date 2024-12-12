import { Container } from 'pixi.js';
import { ReelContainer } from './reelSystem/ReelContainer';
import { ListInfoUser } from './ListInfoUser';

export class PlayGameView extends Container {
  private listInfoUser: Container;
  private reelPlay: ReelContainer;

  constructor() {
    super();

    // this.listInfoUser = new Container();
    this.reelPlay = new ReelContainer();
    this.reelPlay.x = window.innerWidth / 2;
    this.reelPlay.y = window.innerHeight / 2 - 70;
    this.reelPlay.scale.set(0.7);

    this.listInfoUser = new ListInfoUser();
    this.listInfoUser.scale.set(0.8);
    this.listInfoUser.x = window.innerWidth / 2 - this.listInfoUser.width / 2 + 100;
    this.listInfoUser.y = window.innerHeight - this.listInfoUser.height / 2;

    this.addChild(this.reelPlay);
    this.addChild(this.listInfoUser);
  }
}

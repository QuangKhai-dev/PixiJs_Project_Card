import { Container, Sprite } from 'pixi.js';
import { Character } from './animations/Character';
import { Moon } from './animations/Moon';

export class LeftMainScreen extends Container {
  private moon: Container;
  private character: Container;
  constructor() {
    super();
    // thêm mặt trăng
    // this.moon = Sprite.from('console/multiplier_basegame');
    // this.moon.scale.set(0.8);
    // this.moon.y = -50;
    this.moon = new Moon();
    this.moon.x = this.moon.width / 2;
    this.moon.y = this.moon.height / 2 - 100;
    this.addChild(this.moon);

    // thêm nhân vật
    this.character = new Character();
    this.character.x = this.width / 2;
    this.character.y = window.innerHeight + 70;
    this.addChild(this.character);

    this.x = 100;
  }
}

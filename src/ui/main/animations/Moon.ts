import { Spine } from 'pixi-spine';
import { Assets, Container, Sprite } from 'pixi.js';

export enum MoonState {
  Animate_idle = 'animate_idle',
  Animate_in = 'animate_in',
}

export class Moon extends Container {
  private spine: Spine;
  private moon: Sprite;

  constructor() {
    super();

    const character = Assets.cache.get('main/animation/ui/effect_multiplier.json');
    this.spine = new Spine(character.spineData);
    this.spine.state.setAnimation(0, MoonState.Animate_in, true);
    this.spine.scale.set(0.8);
    this.spine.position.set(0, 0);
    this.addChild(this.spine);

    this.moon = Sprite.from('console/multiplier_basegame');
    this.moon.anchor.set(0.5);
    this.moon.scale.set(0.8);

    this.addChild(this.moon);
  }
}

import { Spine } from 'pixi-spine';
import { Assets, Container } from 'pixi.js';

export enum CharacterState {
  Animate_01 = 'animate_01',
  Animate_02 = 'animate_02',
  Walk_01 = 'animate_walk_01',
  Walk_02 = 'animate_walk_02',
}

export class Character extends Container {
  private spine: Spine;

  constructor() {
    super();

    const character = Assets.cache.get('main/animation/character/character_man_animate.json');
    this.spine = new Spine(character.spineData);
    this.spine.state.setAnimation(0, CharacterState.Animate_01, true);
    this.spine.scale.set(0.8);
    this.addChild(this.spine);
  }
}

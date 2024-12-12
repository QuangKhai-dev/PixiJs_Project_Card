import { Container, Sprite } from 'pixi.js';

export class ReelContainer extends Container {
  private reelBaseContainer: Container;
  private reelFrameBack: Sprite;
  private reelFrameMask: Sprite;
  private reelFrameFront: Sprite;

  constructor() {
    super();

    this.reelBaseContainer = new Container();

    // tạo reelBack
    this.reelFrameBack = Sprite.from('console/reel_back');
    this.reelFrameBack.anchor.set(0.5);
    this.addChild(this.reelFrameBack);

    // tạo reelMask
    this.reelFrameMask = Sprite.from('console/reel_mask');
    this.reelFrameMask.tint = '#2E2727';
    this.reelFrameMask.anchor.set(0.5);
    this.addChild(this.reelFrameMask);

    this.reelFrameFront = Sprite.from('console/reel_front');
    this.reelFrameFront.anchor.set(0.5);
    this.addChild(this.reelFrameFront);
  }
}

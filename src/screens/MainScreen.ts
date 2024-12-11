import { Container, Sprite } from 'pixi.js';
import { LeftMainScreen } from '../ui/main/LeftMainScreen';
import { RightMainScreen } from '../ui/main/RightMainScreen';
export class MainScreen extends Container {
  /** Assets bundles required by this screen */
  public static assetBundles = ['main'];
  private background: Sprite;
  // private multiplier: Multiplier;
  // private characterAnim: Character;
  // private info: Info;
  // private winLineWays: WinLineWays;
  // private wildGage: WildGage;
  // private setting: Setting;
  // private buyFreeSpin: BuyFreeSpin;
  // private bottomBox: BottomBox;
  // private spinContainer: SpinContainer;
  // private reelContainer: ReelContainer;
  // private winSummary: WinSummary;

  constructor() {
    super();
    // Xử lí tạo background cho main
    this.background = Sprite.from('bg_basegame');
    this.background.anchor.set(0.5);
    this.background.x = window.innerWidth / 2;
    this.background.y = window.innerHeight / 2;
    this.addChild(this.background);

    // Tách 3 container để lưu giao diện
    const leftMainScreen = new LeftMainScreen();
    const rightMainScreen = new RightMainScreen();
    this.addChild(leftMainScreen);
    this.addChild(rightMainScreen);
  }
}

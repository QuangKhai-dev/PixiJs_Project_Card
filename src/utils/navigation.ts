import { Container } from 'pixi.js';
import { app } from '../main';

interface AppScreen extends Container {
  // Hiển thị screen
  show?(): Promise<void>;
  resize?(width: number, height: number): void;
}

/** Interface for app screens constructors */
interface AppScreenConstructor {
  new (): AppScreen;
  /** List of assets bundles required by the screen */
  assetBundles?: string[];
}

class Navigation {
  /** Container for screens */
  public container = new Container();

  /** Chiều dài ứng dụng */
  public width = 0;

  /** Chiều cao ứng dụng */
  public height = 0;

  /** Nền cho mọi màn hình */
  public background?: AppScreen;

  /**  Screen hiện tại đang hiển thị */
  public currentScreen?: AppScreen;

  /** Popup hiện tại đang hiển thị */
  public currentPopup?: AppScreen;

  /** Set background mặc định load screen */
  public setBackground(ctor: AppScreenConstructor) {
    this.background = new ctor();
    this.addAndShowScreen(this.background);
  }

  private async addAndShowScreen(screen: AppScreen) {
    /**Nếu chưa có cha thì sẽ thêm container này vào app */
    if (!this.container.parent) {
      app.stage.addChild(this.container);
    }

    /** Thêm screen vào  */
    this.container.addChild(screen);

    // Add screen's resize handler, if available
    if (screen.resize) {
      // Trigger a first resize
      screen.resize(this.width, this.height);
    }
  }

  public async showScreen(ctor: AppScreenConstructor) {
    await this.addAndShowScreen(this.currentScreen);
  }
}

//
export const navigation = new Navigation();

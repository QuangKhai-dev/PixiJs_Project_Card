// Initialize the application with pixi.js

import { Application } from 'pixi.js';
import { loadAllAssets } from './utils/assets';
import { getTime } from './utils/utils';
import { LoadScreen } from './screens/LoadScreen';
import { MainScreen } from './screens/MainScreen';
import { navigation } from './utils/navigation';

export const app = new Application<HTMLCanvasElement>({
  backgroundColor: '0xffffff',
  // resolution: Math.max(window.devicePixelRatio, 2),
  resizeTo: window,
});

async function init() {
  // start the application
  document.body.appendChild(app.view);
  console.log('init project pixijs');

  // Load assets
  await loadAllAssets();

  // // Add LoadScreen
  // const loadScreen = new LoadScreen();
  // app.stage.addChild(loadScreen);

  // Add MainScreen
  const mainScreen = new MainScreen();
  app.stage.addChild(mainScreen);
}

init();

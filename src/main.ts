// Initialize the application with pixi.js

import { Application } from 'pixi.js';

const app = new Application<HTMLCanvasElement>({
  resizeTo: window,
  antialias: true,
  backgroundColor: 0x000000,
});

async function init() {
  // start the application
  document.body.appendChild(app.view);
}

init();

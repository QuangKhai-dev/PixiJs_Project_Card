import { Assets, AssetsManifest } from 'pixi.js';

/** List of assets grouped in bundles, for dynamic loading */
let assetsManifest: AssetsManifest = { bundles: [] };

let progressLoading: number = 0;

async function fechAssetsManifest(url: string) {
  const response = await fetch(url);
  const manifest = await response.json();
  console.log(manifest);
  // if (!manifest.bundles) {
  //   throw new Error('[Assets] Invalid assets manifest');
  // }
  return manifest;
}

export async function loadAllAssets() {
  // Load assets manifest
  assetsManifest = await fechAssetsManifest('assets-manifest.json');
  // Init PixiJS assets with this asset manifest
  await Assets.init({ manifest: assetsManifest, basePath: 'assets' });

  // Load assets for the load screen
  for (const bundle of assetsManifest.bundles) {
    await Assets.loadBundle(bundle.name);
  }
}

export function getProgressLoading(): number {
  // All provided bundles are loaded
  return progressLoading;
}

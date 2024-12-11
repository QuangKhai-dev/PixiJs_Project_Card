import { Container, ParticleContainer, Sprite, Texture } from 'pixi.js';
import { randomRange } from '../../utils/random';

const MAX_PARTICALE_OBJECT = 500;
export class ParticleLoading extends Container {
  private particleContainer: ParticleContainer;
  private listSpotlight: Spotlight[] = [];
  constructor() {
    super();
    // Tạo ParticleContainer
    this.particleContainer = new ParticleContainer(MAX_PARTICALE_OBJECT, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });

    // chạy vòng lặp thêm sprite vào particleContainer
    this.addChild(this.particleContainer);

    for (let i = 0; i < MAX_PARTICALE_OBJECT; i++) {
      const spotlight: Spotlight = new Spotlight();
      this.listSpotlight.push(spotlight);
      this.particleContainer.addChild(spotlight.dust);
    }

    this.x = window.innerWidth / 2 - 170;
    this.y = window.innerHeight / 2;
  }

  public async updateTransform() {
    super.updateTransform();
    for (let i = 0; i < MAX_PARTICALE_OBJECT; i++) {
      const dust = this.listSpotlight[i];
      dust.dust.x += dust.vx;
      dust.dust.y += dust.vy;
      dust.dust.alpha -= dust.alphaRatio;
      if (dust.dust.alpha <= 0 || dust.dust.x > window.innerWidth || dust.dust.y > window.innerHeight) {
        dust.dust.x = dust.start_x;
        dust.dust.y = dust.start_y;
        dust.dust.alpha = 1;
      }
    }
  }
}

class Spotlight extends Container {
  public size: number;
  public alphaRatio: number;
  public speed: number;
  public start_x: number = 0;
  public start_y: number = 0;
  public vx: number = 0;
  public vy: number = 0;
  public dust: Sprite;
  constructor() {
    super();
    this.dust = Sprite.from('dust');
    this.dust.tint = '#FFCF38';
    this.size = Math.random() * (0.1 - 0.01) + 0.01;
    this.dust.scale.set(this.size);
    this.addChild(this.dust);

    this.alphaRatio = randomRange(0.0009, 0.005);
    this.start_x = randomRange(-10, 10);
    this.start_y = randomRange(-10, 10);
    this.dust.x = this.start_x;
    this.dust.y = this.start_y;

    this.speed = randomRange(0.01, 1);
    const angle = Math.random() * Math.PI * 2; // Random angle between 0 and 2 * PI
    this.vx = Math.cos(angle) * this.speed; // Calculate horizontal velocity
    this.vy = Math.sin(angle) * this.speed; // Calculate vertical velocity
  }
}

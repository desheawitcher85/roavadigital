/**
 * Generates derived image assets:
 * - public/apple-touch-icon.png (180x180, chevron on cream background)
 * - public/og-default.png (1200x630, full logo centered on teal background)
 * - public/roava-logo-inverse.png (teal pixels replaced with cream for dark backgrounds)
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const TEAL = { r: 3, g: 71, b: 83 };
const CREAM = { r: 250, g: 247, b: 241 };

async function generateOgDefault() {
  const logoPath = join(publicDir, 'roava-logo.png');
  const logoBuffer = readFileSync(logoPath);

  const logoMeta = await sharp(logoBuffer).metadata();
  const targetLogoWidth = 480;
  const scale = targetLogoWidth / logoMeta.width;
  const targetLogoHeight = Math.round(logoMeta.height * scale);

  const resizedLogo = await sharp(logoBuffer)
    .resize(targetLogoWidth, targetLogoHeight, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const canvasWidth = 1200;
  const canvasHeight = 630;
  const logoLeft = Math.round((canvasWidth - targetLogoWidth) / 2);
  const logoTop = Math.round((canvasHeight - targetLogoHeight) / 2) - 40;

  const taglineWidth = 600;
  const taglineSvg = `<svg width="${taglineWidth}" height="40" xmlns="http://www.w3.org/2000/svg">
    <text x="${taglineWidth / 2}" y="28" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#C09F40" text-anchor="middle" letter-spacing="2">ROANOKE ROOFING LEAD GENERATION</text>
  </svg>`;

  const taglineLeft = Math.round((canvasWidth - taglineWidth) / 2);
  const taglineTop = logoTop + targetLogoHeight + 24;

  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 3, g: 71, b: 83, alpha: 1 },
    },
  })
    .composite([
      { input: resizedLogo, left: logoLeft, top: logoTop },
      { input: Buffer.from(taglineSvg), left: taglineLeft, top: taglineTop },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, 'og-default.png'));

  console.log('og-default.png generated');
}

async function generateAppleTouchIcon() {
  const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));

  const size = 180;
  const padding = 30;
  const innerSize = size - padding * 2;

  const svgResized = await sharp(faviconSvg)
    .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 250, g: 247, b: 241, alpha: 1 },
    },
  })
    .composite([{ input: svgResized, left: padding, top: padding }])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  console.log('apple-touch-icon.png generated');
}

async function generateLogoInverse() {
  const logoPath = join(publicDir, 'roava-logo.png');
  const { data, info } = await sharp(logoPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  const threshold = 40;

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (a < 10) continue;

    const isTeal =
      Math.abs(r - TEAL.r) < threshold &&
      Math.abs(g - TEAL.g) < threshold &&
      Math.abs(b - TEAL.b) < threshold;

    if (isTeal) {
      pixels[i] = CREAM.r;
      pixels[i + 1] = CREAM.g;
      pixels[i + 2] = CREAM.b;
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, 'roava-logo-inverse.png'));

  console.log('roava-logo-inverse.png generated');
}

async function main() {
  try {
    await Promise.all([generateOgDefault(), generateAppleTouchIcon(), generateLogoInverse()]);
    console.log('All assets generated successfully.');
  } catch (err) {
    console.error('Asset generation error:', err);
    process.exit(1);
  }
}

main();

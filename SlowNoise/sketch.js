let grain;
let step = 5;
let speedo = 1/10;

function setup() {
  colorMode(RGB);
  pixelDensity(1);
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  translate(-width, -height);

  for(let x = 0; x < width * 2; x = x + step) {
    for(let y = 0; y < height * 2; y = y + step) {
      grain = noise((y * x) + frameCount * speedo) * 255;
      let c = color(map(grain, 0, 255, 0, 360), 100, 100);
      fill(c);
      rect(x, y, step, step);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

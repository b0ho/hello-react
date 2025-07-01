// Global variables
let particles = [];
let waves = [];
let pattern = 0;
let colorPalette = [];
let time = 0;
let mouseTrail = [];
let backgroundLayer;
let particleSystem;

// Animation modes
const PATTERNS = {
  PARTICLE_EXPLOSION: 0,
  FLOWING_WAVES: 1,
  SPIRALING_GALAXY: 2,
  GEOMETRIC_DANCE: 3,
  AURORA_BOREALIS: 4
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  
  // Initialize color palette
  generateColorPalette();
  
  // Initialize particle system
  initializeParticles();
  initializeWaves();
  
  // Create background layer
  backgroundLayer = createGraphics(width, height);
  backgroundLayer.colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  time += 0.02;
  
  // Dynamic background
  drawBackground();
  
  // Update mouse trail
  updateMouseTrail();
  
  // Draw current pattern
  switch(pattern) {
    case PATTERNS.PARTICLE_EXPLOSION:
      drawParticleExplosion();
      break;
    case PATTERNS.FLOWING_WAVES:
      drawFlowingWaves();
      break;
    case PATTERNS.SPIRALING_GALAXY:
      drawSpiralingGalaxy();
      break;
    case PATTERNS.GEOMETRIC_DANCE:
      drawGeometricDance();
      break;
    case PATTERNS.AURORA_BOREALIS:
      drawAuroraBorealis();
      break;
  }
  
  // Draw mouse trail
  drawMouseTrail();
  
  // Add interactive elements
  drawInteractiveElements();
}

function drawBackground() {
  // Animated gradient background
  backgroundLayer.clear();
  
  for(let y = 0; y < height; y += 2) {
    let inter = map(y, 0, height, 0, 1);
    let c1 = color(
      (time * 50 + y * 0.1) % 360,
      30 + sin(time + y * 0.01) * 20,
      10 + sin(time * 0.5 + y * 0.005) * 5
    );
    let c2 = color(
      (time * 30 + y * 0.05 + 180) % 360,
      40 + cos(time * 0.7 + y * 0.02) * 15,
      15 + cos(time * 0.3 + y * 0.008) * 8
    );
    let c = lerpColor(c1, c2, inter);
    
    backgroundLayer.stroke(c);
    backgroundLayer.line(0, y, width, y);
  }
  
  image(backgroundLayer, 0, 0);
}

function drawParticleExplosion() {
  // Update and draw particles
  for(let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    
    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Add mouse attraction
    let mouseForce = createVector(mouseX - p.x, mouseY - p.y);
    mouseForce.mult(0.0001);
    p.vx += mouseForce.x;
    p.vy += mouseForce.y;
    
    // Add some noise
    p.vx += noise(p.x * 0.01, p.y * 0.01, time) * 0.1 - 0.05;
    p.vy += noise(p.x * 0.01 + 1000, p.y * 0.01, time) * 0.1 - 0.05;
    
    // Damping
    p.vx *= 0.99;
    p.vy *= 0.99;
    
    // Update life
    p.life--;
    
    // Draw particle with trail
    push();
    translate(p.x, p.y);
    
    let alpha = map(p.life, 0, p.maxLife, 0, 100);
    fill(p.hue, 80, 90, alpha);
    noStroke();
    
    // Pulsing size based on life and time
    let size = p.size * (1 + sin(time * 10 + p.offset) * 0.3) * (p.life / p.maxLife);
    ellipse(0, 0, size);
    
    // Outer glow
    fill(p.hue, 60, 100, alpha * 0.3);
    ellipse(0, 0, size * 2);
    
    pop();
    
    // Remove dead particles
    if(p.life <= 0) {
      particles.splice(i, 1);
    }
  }
  
  // Add new particles based on mouse movement
  if(mouseIsPressed || particles.length < 50) {
    addParticles(mouseX, mouseY, 5);
  }
}

function drawFlowingWaves() {
  // Draw flowing wave patterns
  for(let i = 0; i < waves.length; i++) {
    let wave = waves[i];
    
    push();
    stroke(wave.hue, 70, 80, 60);
    strokeWeight(2);
    noFill();
    
    beginShape();
    for(let x = 0; x < width + 20; x += 5) {
      let y = wave.baseY + 
              sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
              sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * wave.amplitude * 0.3;
      
      // Add mouse influence
      let mouseDistance = dist(mouseX, mouseY, x, y);
      if(mouseDistance < 150) {
        let influence = map(mouseDistance, 0, 150, 30, 0);
        y += sin(time * 5) * influence;
      }
      
      vertex(x, y);
    }
    endShape();
    pop();
    
    // Update wave
    wave.offset += wave.speed * 0.5;
    wave.baseY += sin(time * 0.3 + i) * 0.2;
  }
}

function drawSpiralingGalaxy() {
  push();
  translate(width/2, height/2);
  
  let numArms = 6;
  let armLength = min(width, height) * 0.4;
  
  for(let arm = 0; arm < numArms; arm++) {
    let armAngle = (TWO_PI / numArms) * arm + time * 0.5;
    
    for(let i = 0; i < 100; i++) {
      let t = i / 100;
      let radius = t * armLength;
      let angle = armAngle + t * TWO_PI * 3;
      
      // Add mouse influence
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      
      let mouseDistance = dist(mouseX - width/2, mouseY - height/2, x, y);
      if(mouseDistance < 100) {
        let influence = map(mouseDistance, 0, 100, 50, 0);
        x += cos(angle + PI/2) * influence;
        y += sin(angle + PI/2) * influence;
      }
      
      let hue = (time * 100 + t * 360 + arm * 60) % 360;
      let alpha = map(t, 0, 1, 100, 20);
      
      fill(hue, 80, 90, alpha);
      noStroke();
      
      let size = (1 - t) * 8 + sin(time * 5 + i * 0.1) * 2;
      ellipse(x, y, size);
    }
  }
  pop();
}

function drawGeometricDance() {
  let numShapes = 12;
  let centerX = width / 2;
  let centerY = height / 2;
  
  push();
  translate(centerX, centerY);
  
  for(let i = 0; i < numShapes; i++) {
    push();
    
    let angle = (TWO_PI / numShapes) * i + time;
    let radius = 100 + sin(time * 2 + i) * 50;
    
    // Add mouse influence
    let mouseAngle = atan2(mouseY - centerY, mouseX - centerX);
    let mouseDist = dist(mouseX, mouseY, centerX, centerY);
    if(mouseDist < 200) {
      let influence = map(mouseDist, 0, 200, 0.5, 0);
      angle += (mouseAngle - angle) * influence;
      radius += influence * 100;
    }
    
    translate(cos(angle) * radius, sin(angle) * radius);
    rotate(time * 2 + i);
    
    let hue = (time * 50 + i * 30) % 360;
    fill(hue, 70, 90, 70);
    stroke(hue, 90, 100, 90);
    strokeWeight(2);
    
    // Draw rotating geometric shapes
    if(i % 3 === 0) {
      // Triangle
      let size = 20 + sin(time * 3 + i) * 10;
      triangle(-size/2, size/2, size/2, size/2, 0, -size/2);
    } else if(i % 3 === 1) {
      // Square
      let size = 15 + cos(time * 2.5 + i) * 8;
      rectMode(CENTER);
      rect(0, 0, size, size);
    } else {
      // Hexagon
      let size = 12 + sin(time * 4 + i) * 6;
      drawHexagon(0, 0, size);
    }
    
    pop();
  }
  pop();
}

function drawAuroraBorealis() {
  // Draw aurora-like ribbons
  for(let ribbon = 0; ribbon < 8; ribbon++) {
    let baseY = height * 0.3 + ribbon * 40;
    
    push();
    stroke((time * 30 + ribbon * 45) % 360, 60, 80, 40);
    strokeWeight(15);
    noFill();
    
    beginShape();
    for(let x = -50; x < width + 50; x += 10) {
      let y = baseY + 
              sin(x * 0.01 + time * 2 + ribbon) * 60 +
              sin(x * 0.02 + time * 1.5) * 30 +
              sin(x * 0.005 + time * 0.8) * 100;
      
      // Add mouse influence
      let mouseDistance = dist(mouseX, mouseY, x, y);
      if(mouseDistance < 200) {
        let influence = map(mouseDistance, 0, 200, 80, 0);
        y += sin(time * 8) * influence;
      }
      
      vertex(x, y);
    }
    endShape();
    pop();
  }
  
  // Add sparkling stars
  for(let i = 0; i < 50; i++) {
    let x = (noise(i * 100, time * 0.1) * width);
    let y = (noise(i * 100 + 1000, time * 0.1) * height * 0.7);
    
    let alpha = sin(time * 5 + i) * 50 + 50;
    fill(60, 30, 100, alpha);
    noStroke();
    
    let size = 2 + sin(time * 3 + i) * 1;
    ellipse(x, y, size);
  }
}

function updateMouseTrail() {
  mouseTrail.push({x: mouseX, y: mouseY, life: 30});
  
  for(let i = mouseTrail.length - 1; i >= 0; i--) {
    mouseTrail[i].life--;
    if(mouseTrail[i].life <= 0) {
      mouseTrail.splice(i, 1);
    }
  }
}

function drawMouseTrail() {
  if(mouseTrail.length > 1) {
    push();
    strokeWeight(3);
    noFill();
    
    for(let i = 1; i < mouseTrail.length; i++) {
      let alpha = map(mouseTrail[i].life, 0, 30, 0, 80);
      stroke(time * 100 % 360, 80, 100, alpha);
      line(mouseTrail[i-1].x, mouseTrail[i-1].y, mouseTrail[i].x, mouseTrail[i].y);
    }
    pop();
  }
}

function drawInteractiveElements() {
  // Draw interactive cursor effect
  if(mouseX > 0 && mouseY > 0) {
    push();
    translate(mouseX, mouseY);
    
    for(let i = 0; i < 5; i++) {
      let angle = time * 5 + i * TWO_PI / 5;
      let radius = 20 + sin(time * 8 + i) * 10;
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      
      fill((time * 200 + i * 72) % 360, 70, 90, 60);
      noStroke();
      ellipse(x, y, 5);
    }
    pop();
  }
}

function initializeParticles() {
  particles = [];
}

function initializeWaves() {
  waves = [];
  for(let i = 0; i < 8; i++) {
    waves.push({
      baseY: random(height),
      amplitude: random(20, 80),
      frequency: random(0.005, 0.02),
      speed: random(0.5, 2),
      offset: random(TWO_PI),
      hue: random(360)
    });
  }
}

function addParticles(x, y, count) {
  for(let i = 0; i < count; i++) {
    particles.push({
      x: x + random(-10, 10),
      y: y + random(-10, 10),
      vx: random(-2, 2),
      vy: random(-2, 2),
      size: random(3, 12),
      hue: colorPalette[floor(random(colorPalette.length))],
      life: random(60, 120),
      maxLife: random(60, 120),
      offset: random(TWO_PI)
    });
  }
}

function generateColorPalette() {
  colorPalette = [];
  let baseHue = random(360);
  
  // Generate harmonious color palette
  for(let i = 0; i < 6; i++) {
    colorPalette.push((baseHue + i * 60) % 360);
  }
}

function drawHexagon(x, y, radius) {
  beginShape();
  for(let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let hx = x + cos(angle) * radius;
    let hy = y + sin(angle) * radius;
    vertex(hx, hy);
  }
  endShape(CLOSE);
}

// Interaction functions
function mousePressed() {
  // Add explosion of particles at mouse position
  addParticles(mouseX, mouseY, 20);
  
  // Change pattern on click
  pattern = (pattern + 1) % Object.keys(PATTERNS).length;
}

function keyPressed() {
  if(key === ' ') {
    // Generate new color palette
    generateColorPalette();
  } else if(key === 'r' || key === 'R') {
    // Reset animation
    initializeParticles();
    initializeWaves();
    time = 0;
  } else if(key === 'p' || key === 'P') {
    // Change pattern
    pattern = (pattern + 1) % Object.keys(PATTERNS).length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  backgroundLayer = createGraphics(width, height);
  backgroundLayer.colorMode(HSB, 360, 100, 100, 100);
  initializeWaves();
}
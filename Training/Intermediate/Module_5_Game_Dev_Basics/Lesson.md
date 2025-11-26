# Module 5: Game Development Basics

**Duration**: 5-7 hours | **Level**: Intermediate

## 🎯 Learning Objectives

- Understand the Canvas API for graphics
- Implement game loops with requestAnimationFrame
- Handle animation and movement
- Detect collisions between game objects
- Build a simple interactive game

## 📖 Key Concepts

### Canvas API
```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'yellow';
ctx.fillRect(x, y, width, height);

// Draw circle (for Pac-Man)
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fill();

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### Game Loop
```javascript
function gameLoop(currentTime) {
    // 1. Update game state
    updatePositions();
    checkCollisions();
    
    // 2. Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 3. Draw everything
    drawBackground();
    drawPlayer();
    drawEnemies();
    
    // 4. Continue loop
    requestAnimationFrame(gameLoop);
}

// Start the loop
requestAnimationFrame(gameLoop);
```

### Movement
```javascript
// Position and velocity
let x = 100, y = 100;
let velocityX = 2, velocityY = 0;

function update() {
    x += velocityX;
    y += velocityY;
    
    // Keep in bounds
    if (x < 0) x = 0;
    if (x > canvas.width) x = canvas.width;
}
```

### Collision Detection
```javascript
// Rectangle collision
function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Circle collision
function checkCircleCollision(circle1, circle2) {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
}
```

## 🔑 Pac-Man Example

```javascript
// From game.js
gameLoop(currentTime) {
    if (this.state !== GameState.PLAYING) return;
    
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    
    this.update();
    this.draw();
    
    this.animationId = requestAnimationFrame((time) => this.gameLoop(time));
}
```

## 📝 Practice

[Worksheet](Worksheet.md) - Build your first game!

Next: [Module 6](../Module_6_Interactive_Elements/Lesson.md)

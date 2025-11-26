# Module 6: Building Interactive Elements

**Duration**: 5-6 hours | **Level**: Intermediate

## 🎯 Learning Objectives

- Implement keyboard and mouse controls
- Manage game states (Start, Playing, Paused, Game Over)
- Track and display scores and lives
- Use localStorage for persistent data
- Build complete user interfaces

## 📖 Key Concepts

### Keyboard Controls
```javascript
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    
    if (e.key === ' ') {  // Spacebar
        togglePause();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// In update loop
if (keys['ArrowUp']) moveUp();
if (keys['ArrowDown']) moveDown();
```

### State Management
```javascript
const GameState = {
    START: 'start',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'game_over'
};

let currentState = GameState.START;

function update() {
    switch(currentState) {
        case GameState.PLAYING:
            updateGame();
            break;
        case GameState.PAUSED:
            // Do nothing
            break;
        case GameState.GAME_OVER:
            showGameOver();
            break;
    }
}
```

### Score Tracking
```javascript
let score = 0;
const scoreElement = document.getElementById('score');

function addPoints(points) {
    score += points;
    updateUI();
}

function updateUI() {
    scoreElement.textContent = score;
}
```

### LocalStorage
```javascript
// Save high score
function saveHighScore() {
    localStorage.setItem('pacman-highscore', score);
}

// Load high score
function loadHighScore() {
    return localStorage.getItem('pacman-highscore') || 0;
}
```

## 📝 Practice

[Worksheet](Worksheet.md)

Next: [Module 7: OOP](../../Advanced/Module_7_OOP/Lesson.md)

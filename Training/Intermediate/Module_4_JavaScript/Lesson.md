# Module 4: JavaScript Fundamentals

**Duration**: 5-7 hours  
**Level**: Intermediate  
**Prerequisites**: Modules 1-3 completed

## 🎯 Learning Objectives

- Understand JavaScript variables, data types, and operators
- Write functions and control flow statements
- Manipulate the DOM (Document Object Model)
- Handle events and user interactions
- Debug JavaScript code using console and DevTools

---

## 📖 Key Concepts

### Variables and Data Types
```javascript
// Variables
let score = 0;
const MAX_LIVES = 3;
var oldWay = "avoid using var";

// Data types
let name = "Pac-Man";        // String
let level = 1;               // Number
let isPlaying = true;        // Boolean
let ghosts = ["Blinky", "Pinky", "Inky", "Clyde"];  // Array
let player = { x: 10, y: 10, lives: 3 };  // Object
```

### Functions
```javascript
// Function declaration
function startGame() {
    score = 0;
    lives = 3;
}

// Arrow function
const eatPellet = () => {
    score += 10;
};

// Function with parameters
function updateScore(points) {
    score += points;
    return score;
}
```

### Control Flow
```javascript
// If statements
if (lives > 0) {
    continueGame();
} else {
    gameOver();
}

// For loops
for (let i = 0; i < ghosts.length; i++) {
    ghosts[i].update();
}

// While loops
while (pelletsRemaining > 0) {
    playGame();
}
```

### DOM Manipulation
```javascript
// Get elements
const canvas = document.getElementById('gameCanvas');
const button = document.querySelector('.arcade-button');
const allButtons = document.querySelectorAll('button');

// Modify elements
button.textContent = "Start Game";
button.style.color = "yellow";
button.classList.add('active');

// Create elements
const newDiv = document.createElement('div');
newDiv.className = 'ghost';
document.body.appendChild(newDiv);
```

### Event Handling
```javascript
// Click events
button.addEventListener('click', function() {
    console.log("Button clicked!");
    startGame();
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        moveUp();
    }
});
```

---

## 🔑 Key Takeaways

1. JavaScript adds interactivity to HTML/CSS
2. Variables store data, functions perform actions
3. Control flow directs program logic
4. The DOM connects JavaScript to HTML
5. Events respond to user interactions

---

## 📝 Practice

Complete the [Worksheet](Worksheet.md) to practice JavaScript fundamentals!

Next: [Module 5: Game Development Basics](../Module_5_Game_Dev_Basics/Lesson.md)

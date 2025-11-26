# Module 7: Object-Oriented Programming

**Duration**: 5-8 hours | **Level**: Advanced

## 🎯 Learning Objectives

- Understand classes and objects
- Use constructors and methods
- Implement inheritance
- Apply encapsulation principles
- Build the Pac-Man character system

## 📖 Key Concepts

### Classes and Objects
```javascript
class Pacman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.speed = 2;
        this.direction = {x: 0, y: 0};
    }
    
    move() {
        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;
    }
    
    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create instance
const pacman = new Pacman(100, 100);
pacman.move();
pacman.draw(ctx);
```

### Inheritance
```javascript
class Ghost {
    constructor(name, color, x, y) {
        this.name = name;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    
    update() {
        // Base behavior
    }
}

class Blinky extends Ghost {
    constructor(x, y) {
        super('Blinky', '#FF0000', x, y);
    }
    
    update() {
        // Blinky-specific behavior
        this.chasePlayer();
    }
    
    chasePlayer() {
        // Chase algorithm
    }
}
```

### Encapsulation
```javascript
class Player {
    #lives = 3;  // Private field
    
    getLives() {
        return this.#lives;
    }
    
    loseLife() {
        if (this.#lives > 0) {
            this.#lives--;
        }
    }
}
```

## 📝Pac-Man Class Structure

```javascript
// Ghost base class with shared behavior
class Ghost {
    constructor(name, color, startX, startY, scatterTarget, maze) {
        this.name = name;
        this.color = color;
        this.x = startX * TILE_SIZE;
        this.y = startY * TILE_SIZE;
        // ... more properties
    }
    
    update(pacman, ghosts) {
        // Update logic
    }
    
    getTarget(pacman, ghosts) {
        // Override in subclasses
    }
}

// Blinky chases directly
class Blinky extends Ghost {
    getTarget(pacman) {
        return {x: pacman.tileX, y: pacman.tileY};
    }
}

// Pinky targets ahead
class Pinky extends Ghost {
    getTarget(pacman) {
        return {
            x: pacman.tileX + pacman.direction.x * 4,
            y: pacman.tileY + pacman.direction.y * 4
        };
    }
}
```

## 🔑 Key Takeaways

1. Classes are blueprints for objects
2. Inheritance promotes code reuse
3. Encapsulation hides implementation details
4. Polymorphism allows different behaviors from same interface
5. OOP makes complex systems manageable

[Worksheet](Worksheet.md)

Next: [Module 8](../Module_8_Game_AI/Lesson.md)

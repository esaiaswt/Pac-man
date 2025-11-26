# Challenge 3: Power-Up System

**Difficulty**: ⭐⭐⭐⭐☆  
**Estimated Time**: 6-8 hours  
**Prerequisites**: Modules 1-8 completed

## 🎯 Objective

Implement a power-up system with multiple collectible items that grant special abilities.

## 📋 Requirements

### Part 1: Design Power-Ups

Create at least 3 different power-ups:

1. **Speed Boost**: Temporary speed increase
2. **Ghost Magnet**: Attracts ghosts to a specific location
3. **Shield**: One-time protection from ghost collision
4. **Slow Motion**: Slows down all ghosts
5. **Point Multiplier**: 2x points for limited time

### Part 2: Create PowerUp Class

```javascript
class PowerUp {
    constructor(x, y, type, duration) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.duration = duration;
        this.active = false;
        this.collected = false;
    }
    
    draw(ctx) {
        if (!this.collected) {
            // Draw power-up icon
            ctx.fillStyle = this.getColor();
            ctx.fillRect(this.x - 8, this.y - 8, 16, 16);
        }
    }
    
    activate(game) {
        this.active = true;
        this.collected = true;
        
        switch(this.type) {
            case 'speed':
                game.pacman.speed *= 1.5;
                setTimeout(() => {
                    game.pacman.speed /= 1.5;
                    this.active = false;
                }, this.duration);
                break;
            // Add more power-up types
        }
    }
    
    getColor() {
        const colors = {
            'speed': '#00FF00',
            'shield': '#0000FF',
            'multiplier': '#FFD700'
        };
        return colors[this.type] || '#FFFFFF';
    }
}
```

### Part 3: Integrate into Game

1. Add power-up spawning logic
2. Add collision detection
3. Add visual feedback when active
4. Add UI indicators

### Part 4: Balance and Polish

1. Test spawn rates
2. Adjust durations
3. Add sound effects
4. Add particle effects

## 🏆 Bonus Challenges

- [ ] Random power-up spawning
- [ ] Combo system (multiple power-ups active)
- [ ] Rare "super" power-ups
- [ ] Power-up upgrade system
- [ ] Power-up timer display

## ✅ Completion Criteria

- [ ] At least 3 power-ups implemented
- [ ] Spawn and collection systems working
- [ ] Visual feedback for active power-ups
- [ ] No game-breaking bugs
- [ ] Balanced and fun gameplay

## 🎓 Learning Outcomes

- Complex state management
- Timer and duration handling
- Game balance design
- User feedback systems

# Challenge 2: Custom Ghost

**Difficulty**: ⭐⭐⭐☆☆  
**Estimated Time**: 4-6 hours  
**Prerequisites**: Modules 1-7 completed

## 🎯 Objective

Create a new ghost character with unique AI behavior and personality.

## 📋 Requirements

### Part 1: Design Your Ghost
1. Choose a name and color
2. Design a unique behavior pattern
3. Define scatter target location

**Ghost Personality Ideas**:
- **Sneaky**: Tries to flank the player
- **Teleporter**: Jumps to random locations near player
- **Guard**: Patrols specific area aggressively
- **Mimic**: Copies player's last movements
- **Speedster**: Moves faster but less intelligently

### Part 2: Implement the Ghost Class
1. Create a new class extending `Ghost`
2. Override the `getTarget()` method
3. Add unique behavior logic

**Template**:
```javascript
class YourGhost extends Ghost {
    constructor(maze) {
        super('YourName', '#YOURCOLOR', startX, startY, {x: scatterX, y: scatterY}, maze);
    }
    
    getTarget(pacman, ghosts) {
        if (this.mode === GhostMode.SCATTER) {
            return this.scatterTarget;
        }
        
        // Your unique targeting logic here
        // Example: Target position perpendicular to Pac-Man's direction
        return {
            x: pacman.tileX + pacman.direction.y * 5,
            y: pacman.tileY + pacman.direction.x * 5
        };
    }
    
    getReleaseTime() {
        return 15000;  // Release after 15 seconds
    }
}
```

### Part 3: Add to Game
1. Open `game.js`
2. Add your ghost to the ghosts array:
```javascript
this.ghosts = [
    new Blinky(this.maze),
    new Pinky(this.maze),
    new Inky(this.maze),
    new Clyde(this.maze),
    new YourGhost(this.maze)  // Add here
];
```

### Part 4: Test and Balance
1. Test the ghost's behavior
2. Adjust difficulty/speed if needed
3. Ensure it's challenging but fair

## 🏆 Bonus Challenges

- [ ] Add a special ability (speed boost, teleport, etc.)
- [ ] Create a "boss ghost" with multiple phases
- [ ] Add visual effects for your ghost
- [ ] Create sound effects for your ghost
- [ ] Make the ghost learn player patterns

## ✅ Completion Criteria

- [ ] New ghost class created
- [ ] Unique targeting algorithm implemented
- [ ] Ghost integrated into game
- [ ] Behavior is distinct from other ghosts
- [ ] Game balance maintained
- [ ] No bugs or errors

## 🎓 Learning Outcomes

- Inheritance and polymorphism
- Algorithm design
- Game balance
- Testing and debugging

---

**Document your ghost's behavior and share it!**

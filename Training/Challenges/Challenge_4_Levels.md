# Challenge 4: Level Progression

**Difficulty**: ⭐⭐⭐⭐☆  
**Estimated Time**: 5-7 hours  
**Prerequisites**: Modules 1-8 completed

## 🎯 Objective

Implement a multi-level system with increasing difficulty and varied mazes.

## 📋 Requirements

### Part 1: Multiple Maze Layouts
Create 3-5 different maze designs with increasing complexity.

### Part 2: Difficulty Scaling
```javascript
class Game {
    loadLevel(levelNumber) {
        this.currentLevel = levelNumber;
        this.maze.loadLayout(this.getLevelLayout(levelNumber));
        
        // Increase difficulty
        this.ghostSpeed = 1 + (levelNumber * 0.1);
        this.ghostReleaseTime = Math.max(1000, 5000 - (levelNumber * 500));
        this.frightenedDuration = Math.max(3000, 8000 - (levelNumber * 500));
    }
    
    getLevelLayout(levelNumber) {
        const layouts = [MAZE_1, MAZE_2, MAZE_3];
        return layouts[levelNumber % layouts.length];
    }
}
```

### Part 3: Level Transitions
- Clear animation between levels
- Victory screen
- Level start countdown

### Part 4: Progression Features
- [ ] Bonus levels
- [ ] Boss levels (super fast ghosts)
- [ ] Level skip feature
- [ ] Level selection menu

## ✅ Completion Criteria

- [ ] 3+ unique levels
- [ ] Smooth transitions
- [ ] Increasing difficulty
- [ ] Level metadata (name, par score, etc.)
- [ ] Save/load progress

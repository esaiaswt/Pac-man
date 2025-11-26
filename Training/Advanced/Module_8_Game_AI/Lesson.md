# Module 8: Game AI & Complex Logic

**Duration**: 5-9 hours | **Level**: Advanced

## 🎯 Learning Objectives

- Implement pathfinding algorithms
- Create AI behavior patterns
- Build state machines
- Implement target calculation
- Create the Pac-Man ghost AI

## 📖 Key Concepts

### Pathfinding Basics
```javascript
// Calculate distance to target
function getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Choose best direction
function getBestDirection(currentPos, target, possibleDirs) {
    let bestDir = null;
    let shortestDist = Infinity;
    
    for (const dir of possibleDirs) {
        const newX = currentPos.x + dir.x;
        const newY = currentPos.y + dir.y;
        const dist = getDistance(newX, newY, target.x, target.y);
        
        if (dist < shortestDist) {
            shortestDist = dist;
            bestDir = dir;
        }
    }
    
    return bestDir;
}
```

### State Machine
```javascript
const GhostMode = {
    CHASE: 'chase',
    SCATTER: 'scatter',
    FRIGHTENED: 'frightened',
    EATEN: 'eaten'
};

class Ghost {
    constructor() {
        this.mode = GhostMode.SCATTER;
    }
    
    update() {
        switch(this.mode) {
            case GhostMode.CHASE:
                this.chasePlayer();
                break;
            case GhostMode.SCATTER:
                this.scatterToCorner();
                break;
            case GhostMode.FRIGHTENED:
                this.runAway();
                break;
        }
    }
}
```

### Ghost AI Behaviors

**Blinky (Aggressive)**:
```javascript
getTarget(pacman) {
    // Chase Pac-Man directly
    return {x: pacman.tileX, y: pacman.tileY};
}
```

**Pinky (Ambusher)**:
```javascript
getTarget(pacman) {
    // Target 4 tiles ahead
    return {
        x: pacman.tileX + pacman.direction.x * 4,
        y: pacman.tileY + pacman.direction.y * 4
    };
}
```

**Inky (Complex)**:
```javascript
getTarget(pacman, ghosts) {
    // Uses both Pac-Man and Blinky positions
    const vector = {
        x: (pacman.tileX + pacman.direction.x * 2) - blinky.tileX,
        y: (pacman.tileY + pacman.direction.y * 2) - blinky.tileY
    };
    return {
        x: blinky.tileX + vector.x * 2,
        y: blinky.tileY + vector.y * 2
    };
}
```

**Clyde (Shy)**:
```javascript
getTarget(pacman) {
    const dist = getDistance(this.tileX, this.tileY, pacman.tileX, pacman.tileY);
    // If far, chase; if close, scatter
    return dist > 8 ? 
        {x: pacman.tileX, y: pacman.tileY} :
        this.scatterTarget;
}
```

## 🔑 Key Takeaways

1. AI creates illusion of intelligence
2. State machines manage complex behaviors
3. Pathfinding finds optimal routes
4. Different AI personalities make games interesting
5. Simple rules create emergent complexity

[Worksheet](Worksheet.md)

Next: [Module 9](../Module_9_Audio_APIs/Lesson.md)

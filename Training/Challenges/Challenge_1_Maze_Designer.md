# Challenge 1: Maze Designer

**Difficulty**: ⭐⭐☆☆☆  
**Estimated Time**: 3-5 hours  
**Prerequisites**: Modules 1-3 completed

## 🎯 Objective

Create a custom maze layout for the Pac-Man game and modify the `maze.js` file to use your design.

## 📋 Requirements

### Part 1: Design Your Maze
1. Create a 28x31 grid on graph paper or digital tool
2. Follow Pac-Man maze rules:
   - Walls represented by `1`
   - Paths represented by `0`
   - Pellets represented by `2`
   - Power pellets represented by `3`
   - Ghost house in the center
   - Symmetrical design (optional but recommended)

### Part 2: Implement in Code
1. Open `maze.js`
2. Replace the `MAZE_LAYOUT` array with your design
3. Ensure proper formatting

**Example**:
```javascript
const MAZE_LAYOUT = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    // ... continue for 31 rows
];
```

### Part 3: Test and Refine
1. Load the game and test your maze
2. Ensure Pac-Man and ghosts can navigate
3. Check that pellets are collectible
4. Verify no unreachable areas

## 🎨 Design Tips

- Keep paths at least 1 tile wide
- Create interesting turns and corners
- Add dead ends for strategy
- Place power pellets in corners for balance
- Make sure there's a clear path around the entire maze

## 🏆 Bonus Challenges

- [ ] Create multiple maze layouts (levels)
- [ ] Add a maze selection screen
- [ ] Design a completely asymmetric maze
- [ ] Create a "mirror maze" that flips halfway through
- [ ] Add visual themes (different colors for different areas)

## ✅ Completion Criteria

- [ ] Custom 28x31 maze designed
- [ ] Maze implemented in `maze.js`
- [ ] Game runs without errors
- [ ] All ghosts can navigate the maze
- [ ] All pellets are reachable
- [ ] Gameplay feels balanced and fun

## 🎓 Learning Outcomes

- Understanding 2D arrays in JavaScript
- Game level design principles
- Balance and player experience
- Testing and iteration

---

**Share your maze design with classmates and try each other's creations!**

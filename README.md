# 🎮 Retro PAC-MAN Arcade Game - Build by using Google's Antigravity

A fully-functional, retro-styled Pac-Man arcade game built with vanilla HTML, CSS, and JavaScript. Features authentic gameplay mechanics, ghost AI, retro aesthetics with neon effects, and dynamic audio using the Web Audio API.

![Pac-Man Game](https://img.shields.io/badge/Game-Pac--Man-yellow?style=for-the-badge&logo=pacman)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Features

- **Classic Gameplay**: Authentic Pac-Man maze layout and mechanics
- **Smart Ghost AI**: 4 unique ghosts with distinct behaviors
  - **Blinky (Red)**: Directly chases Pac-Man
  - **Pinky (Pink)**: Targets 4 tiles ahead of Pac-Man
  - **Inky (Cyan)**: Uses complex targeting based on Blinky and Pac-Man
  - **Clyde (Orange)**: Alternates between chasing and fleeing
- **Retro Aesthetics**: 
  - Neon colors and glow effects
  - Scanline overlay for CRT effect
  - Smooth animations and transitions
  - Arcade cabinet-inspired UI
- **Dynamic Audio**: 
  - Background music loop
  - Sound effects (wakka wakka, power pellet, ghost eating, death, etc.)
  - Generated using Web Audio API (no external files needed)
- **Game Features**:
  - Lives system
  - Scoring and high score (saved in localStorage)
  - Level progression
  - Power pellets with frightened ghost mode
  - Pause functionality
  - Responsive design

## 🕹️ How to Play

### Controls
- **Arrow Keys**: Move Pac-Man (Up, Down, Left, Right)
- **Spacebar**: Pause/Resume game
- **M**: Mute/Unmute audio
- **Enter**: Start game (from start screen)

### Objective
- Eat all pellets to complete the level
- Avoid ghosts (unless you eat a power pellet)
- Eat power pellets to turn ghosts blue and vulnerable
- Eat vulnerable ghosts for bonus points
- Survive with your 3 lives!

### Scoring
- Small pellet: **10 points**
- Power pellet: **50 points**
- 1st ghost: **200 points**
- 2nd ghost: **400 points**
- 3rd ghost: **800 points**
- 4th ghost: **1600 points**

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy your Pac-Man game to GitHub Pages:

### 1. Create a GitHub Repository

```bash
# Navigate to your project directory
cd c:/projects/Pac-man

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Retro Pac-Man game"

# Create repository on GitHub (replace YOUR_USERNAME with your GitHub username)
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/Pac-man.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your game will be available at: `https://YOUR_USERNAME.github.io/Pac-man/`

### 3. Alternative: Quick Deploy

If you already have a repository:

```bash
cd c:/projects/Pac-man
git add .
git commit -m "Deploy Pac-Man game"
git push
```

The game will automatically update on GitHub Pages within a few minutes.

## 🎨 Technical Details

### Architecture
- **Component-based design**: Separate classes for Maze, Pac-Man, Ghosts, and Game
- **Game loop**: Uses `requestAnimationFrame` for smooth 60 FPS gameplay
- **State management**: Clean state transitions (Start → Playing → Paused → Game Over)
- **Collision detection**: Grid-based with pixel-perfect accuracy

### Files Structure
```
Pac-man/
├── index.html          # Main HTML structure
├── styles.css          # Retro arcade styling
├── game.js            # Main game engine
├── maze.js            # Maze layout and rendering
├── pacman.js          # Pac-Man character logic
├── ghost.js           # Ghost AI and behaviors
├── audio.js           # Web Audio API sound system
└── README.md          # This file
```

### Browser Compatibility
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Older browsers may have limited Web Audio API support

## 🎵 Audio System

The game uses the **Web Audio API** to generate all sounds dynamically:
- No external audio files required
- Retro 8-bit style sound effects
- Background music loop
- All sounds are procedurally generated using oscillators

## 🎓 Credits

Created as a modern recreation of the classic Pac-Man arcade game originally developed by Namco in 1980.

This implementation is built from scratch using vanilla web technologies and is intended for educational and entertainment purposes.

## 📝 License

This project is open source and available for personal and educational use.

---

**Enjoy the game! 🎮👾**

*Wakka wakka wakka...*

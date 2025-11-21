// Game state management
const GameState = {
    START: 'start',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'game_over',
    LEVEL_COMPLETE: 'level_complete'
};

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = MAZE_WIDTH * TILE_SIZE;
        this.canvas.height = MAZE_HEIGHT * TILE_SIZE;

        this.state = GameState.START;
        this.score = 0;
        this.highScore = this.loadHighScore();
        this.level = 1;
        this.lives = 3;

        this.maze = new Maze();
        this.pacman = new PacMan(this.maze);
        this.ghosts = [
            new Blinky(this.maze),
            new Pinky(this.maze),
            new Inky(this.maze),
            new Clyde(this.maze)
        ];

        this.modeTimer = 0;
        this.currentMode = GhostMode.SCATTER;
        this.readyTimer = 0;
        this.powerPelletActive = false;
        this.powerPelletTimer = 0;
        this.ghostCombo = 0;
        this.chompSoundTimer = 0;

        this.initializeUI();
        this.initializeControls();

        this.lastTime = 0;
        this.gameLoop = this.gameLoop.bind(this);
    }

    initializeUI() {
        // Start button
        document.getElementById('startButton').addEventListener('click', () => {
            this.startGame();
        });

        // Restart button
        document.getElementById('restartButton').addEventListener('click', () => {
            this.restartGame();
        });

        // Menu button
        document.getElementById('menuButton').addEventListener('click', async () => {
            await audioManager.init();
            audioManager.stopBackgroundMusic();
            audioManager.play('startScreenMusic');
            this.showScreen('startScreen');
            this.state = GameState.START;
        });

        // Mute button
        document.getElementById('muteButton').addEventListener('click', () => {
            const isMuted = audioManager.toggleMute();
            document.getElementById('muteButton').textContent = isMuted ? '🔇' : '🔊';
            document.getElementById('muteButton').classList.toggle('muted', isMuted);
        });

        this.updateUI();

        // Initialize audio and play start screen music
        this.initStartScreenAudio();
    }

    async initStartScreenAudio() {
        // Try to init audio (may require user interaction)
        try {
            await audioManager.init();
            audioManager.play('startScreenMusic');
        } catch (e) {
            // Audio will be initialized on first user interaction (start button click)
        }
    }

    initializeControls() {
        document.addEventListener('keydown', (e) => {
            if (this.state === GameState.PLAYING) {
                switch (e.key) {
                    case 'ArrowUp':
                        this.pacman.setDirection({ x: 0, y: -1 });
                        e.preventDefault();
                        break;
                    case 'ArrowDown':
                        this.pacman.setDirection({ x: 0, y: 1 });
                        e.preventDefault();
                        break;
                    case 'ArrowLeft':
                        this.pacman.setDirection({ x: -1, y: 0 });
                        e.preventDefault();
                        break;
                    case 'ArrowRight':
                        this.pacman.setDirection({ x: 1, y: 0 });
                        e.preventDefault();
                        break;
                    case ' ':
                        this.togglePause();
                        e.preventDefault();
                        break;
                }
            }

            // Mute toggle
            if (e.key === 'm' || e.key === 'M') {
                const isMuted = audioManager.toggleMute();
                document.getElementById('muteButton').textContent = isMuted ? '🔇' : '🔊';
                document.getElementById('muteButton').classList.toggle('muted', isMuted);
            }

            // Start game from start screen
            if (this.state === GameState.START && e.key === 'Enter') {
                this.startGame();
            }
        });
    }

    async startGame() {
        await audioManager.init();

        audioManager.stopStartScreenMusic();

        this.state = GameState.PLAYING;
        this.score = 0;
        this.level = 1;
        this.lives = 3;

        this.resetLevel();
        this.showScreen('gameScreen');
        this.showReadyMessage();

        audioManager.play('gameStart');

        setTimeout(() => {
            audioManager.play('bgMusic');
        }, 1500);

        requestAnimationFrame(this.gameLoop);
    }

    restartGame() {
        this.score = 0;
        this.level = 1;
        this.lives = 3;
        this.state = GameState.PLAYING;

        this.resetLevel();
        this.showScreen('gameScreen');
        this.showReadyMessage();

        audioManager.play('bgMusic');
        requestAnimationFrame(this.gameLoop);
    }

    resetLevel() {
        this.maze.reset();
        this.pacman.reset();
        this.ghosts.forEach(ghost => ghost.reset());
        this.modeTimer = 0;
        this.currentMode = GhostMode.SCATTER;
        this.powerPelletActive = false;
        this.powerPelletTimer = 0;
        this.ghostCombo = 0;
        this.updateUI();
    }

    showReadyMessage() {
        this.readyTimer = 180; // 3 seconds at 60fps
        document.getElementById('readyOverlay').classList.add('active');
    }

    hideReadyMessage() {
        document.getElementById('readyOverlay').classList.remove('active');
    }

    showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    togglePause() {
        if (this.state === GameState.PLAYING) {
            this.state = GameState.PAUSED;
            document.getElementById('pauseOverlay').classList.add('active');
            audioManager.stopBackgroundMusic();
        } else if (this.state === GameState.PAUSED) {
            this.state = GameState.PLAYING;
            document.getElementById('pauseOverlay').classList.remove('active');
            audioManager.play('bgMusic');
        }
    }

    gameLoop(currentTime) {
        if (this.state === GameState.GAME_OVER || this.state === GameState.START) {
            return;
        }

        // Handle ready message
        if (this.readyTimer > 0) {
            this.readyTimer--;
            if (this.readyTimer === 0) {
                this.hideReadyMessage();
            }
        }

        if (this.state === GameState.PLAYING && this.readyTimer === 0) {
            this.update();
        }

        this.draw();
        requestAnimationFrame(this.gameLoop);
    }

    update() {
        // Update ghost mode (scatter/chase alternation)
        this.updateGhostMode();

        // Update power pellet timer
        if (this.powerPelletActive) {
            this.powerPelletTimer--;
            if (this.powerPelletTimer <= 0) {
                this.powerPelletActive = false;
            }
        }

        // Update Pac-Man
        this.pacman.update();

        // Check if Pac-Man is dead
        if (this.pacman.isDead) {
            if (this.pacman.isDeathAnimationComplete()) {
                this.lives--;
                this.updateUI();

                if (this.lives <= 0) {
                    this.gameOver();
                } else {
                    this.pacman.reset();
                    this.ghosts.forEach(ghost => ghost.reset());
                    this.showReadyMessage();
                }
            }
            return;
        }

        // Eat pellets
        const pellet = this.maze.eatPellet(this.pacman.x, this.pacman.y);
        if (pellet === 2) {
            this.score += 10;
            this.updateUI();

            // Play chomp sound with throttling
            this.chompSoundTimer++;
            if (this.chompSoundTimer > 5) {
                audioManager.play('chomp');
                this.chompSoundTimer = 0;
            }
        } else if (pellet === 3) {
            this.score += 50;
            this.powerPelletActive = true;
            this.powerPelletTimer = 300; // 5 seconds
            this.ghostCombo = 0;
            this.ghosts.forEach(ghost => ghost.setFrightened());
            this.updateUI();
            audioManager.play('powerPellet');
        }

        // Check for level complete
        if (this.maze.isAllPelletsEaten()) {
            this.levelComplete();
            return;
        }

        // Update ghosts
        this.ghosts.forEach(ghost => {
            ghost.update(this.pacman, this.ghosts);

            // Check collision with Pac-Man
            if (this.pacman.collidesWith(ghost)) {
                if (ghost.mode === GhostMode.FRIGHTENED) {
                    // Eat ghost
                    ghost.eat();
                    this.ghostCombo++;
                    const points = 200 * Math.pow(2, this.ghostCombo - 1);
                    this.score += points;
                    this.updateUI();
                    audioManager.play('eatGhost');
                } else if (ghost.mode !== GhostMode.EATEN) {
                    // Pac-Man dies
                    this.pacman.die();
                }
            }
        });
    }

    updateGhostMode() {
        this.modeTimer++;

        // Mode timings (in frames at 60fps)
        const modes = [
            { mode: GhostMode.SCATTER, duration: 420 },  // 7 seconds
            { mode: GhostMode.CHASE, duration: 1200 },   // 20 seconds
            { mode: GhostMode.SCATTER, duration: 420 },  // 7 seconds
            { mode: GhostMode.CHASE, duration: 1200 },   // 20 seconds
            { mode: GhostMode.SCATTER, duration: 300 },  // 5 seconds
            { mode: GhostMode.CHASE, duration: Infinity } // Chase forever
        ];

        let totalTime = 0;
        for (const modeConfig of modes) {
            totalTime += modeConfig.duration;
            if (this.modeTimer < totalTime) {
                if (this.currentMode !== modeConfig.mode) {
                    this.currentMode = modeConfig.mode;
                    // Update ghosts unless they're frightened or eaten
                    this.ghosts.forEach(ghost => {
                        if (ghost.mode !== GhostMode.FRIGHTENED && ghost.mode !== GhostMode.EATEN) {
                            ghost.mode = this.currentMode;
                            // Reverse direction when mode changes
                            ghost.direction = { x: -ghost.direction.x, y: -ghost.direction.y };
                        }
                    });
                }
                break;
            }
        }
    }

    levelComplete() {
        this.state = GameState.LEVEL_COMPLETE;
        audioManager.play('levelComplete');

        setTimeout(() => {
            this.level++;
            this.state = GameState.PLAYING;
            this.resetLevel();
            this.showReadyMessage();
        }, 2000);
    }

    gameOver() {
        this.state = GameState.GAME_OVER;
        audioManager.stopBackgroundMusic();

        // Update high score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore();
        }

        // Show game over screen
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalLevel').textContent = this.level;
        this.showScreen('gameOverScreen');
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw maze
        this.maze.draw(this.ctx);

        // Draw ghosts
        this.ghosts.forEach(ghost => ghost.draw(this.ctx));

        // Draw Pac-Man
        this.pacman.draw(this.ctx);
    }

    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('highScore').textContent = this.highScore;
        document.getElementById('level').textContent = this.level;

        // Update lives display
        const livesContainer = document.getElementById('lives');
        livesContainer.innerHTML = '';
        for (let i = 0; i < this.lives; i++) {
            const lifeIcon = document.createElement('div');
            lifeIcon.className = 'life-icon';
            livesContainer.appendChild(lifeIcon);
        }
    }

    saveHighScore() {
        try {
            localStorage.setItem('pacman_high_score', this.highScore.toString());
        } catch (e) {
            console.warn('Could not save high score:', e);
        }
    }

    loadHighScore() {
        try {
            const saved = localStorage.getItem('pacman_high_score');
            return saved ? parseInt(saved, 10) : 0;
        } catch (e) {
            console.warn('Could not load high score:', e);
            return 0;
        }
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    const game = new Game();
});

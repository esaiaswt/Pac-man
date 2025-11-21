// Ghost AI modes
const GhostMode = {
    CHASE: 'chase',
    SCATTER: 'scatter',
    FRIGHTENED: 'frightened',
    EATEN: 'eaten',
    IN_HOUSE: 'in_house'
};

// Base Ghost class
class Ghost {
    constructor(name, color, startX, startY, scatterTarget, maze) {
        this.name = name;
        this.color = color;
        this.maze = maze;
        this.startX = startX;
        this.startY = startY;
        this.scatterTarget = scatterTarget;
        this.reset();
    }

    reset() {
        this.x = this.startX * TILE_SIZE;
        this.y = this.startY * TILE_SIZE;
        this.speed = 1.5;
        this.direction = { x: -1, y: 0 };
        this.mode = GhostMode.IN_HOUSE;
        this.frightenedTimer = 0;
        this.releaseTimer = 0;
        this.eyeDirection = { x: -1, y: 0 };
    }

    update(pacman, ghosts) {
        this.releaseTimer++;

        // Release from ghost house
        if (this.mode === GhostMode.IN_HOUSE && this.releaseTimer > this.getReleaseTime()) {
            this.mode = GhostMode.SCATTER;
        }

        // Update frightened timer
        if (this.mode === GhostMode.FRIGHTENED) {
            this.frightenedTimer--;
            if (this.frightenedTimer <= 0) {
                this.mode = GhostMode.CHASE;
            }
        }

        // Return to chase after being eaten
        if (this.mode === GhostMode.EATEN) {
            const homeX = 10 * TILE_SIZE;
            const homeY = 10 * TILE_SIZE;
            const dx = Math.abs(this.x - homeX);
            const dy = Math.abs(this.y - homeY);

            if (dx < TILE_SIZE && dy < TILE_SIZE) {
                this.mode = GhostMode.CHASE;
            }
        }

        // Move
        this.move(pacman, ghosts);

        // Handle tunnel wrapping - allow passage at the tunnel row (y coordinate around row 10)
        const tunnelY = 10 * TILE_SIZE;
        const isInTunnel = Math.abs(this.y - tunnelY) < TILE_SIZE / 2;

        if (isInTunnel) {
            // Wrap at the edges when in the tunnel
            if (this.x < -TILE_SIZE / 2) {
                this.x = MAZE_WIDTH * TILE_SIZE - TILE_SIZE / 2;
            } else if (this.x > MAZE_WIDTH * TILE_SIZE - TILE_SIZE / 2) {
                this.x = -TILE_SIZE / 2;
            }
        }
    }

    move(pacman, ghosts) {
        const target = this.getTarget(pacman, ghosts);

        // At intersection, choose best direction
        if (this.isAtIntersection()) {
            const possibleDirections = this.getPossibleDirections();

            if (possibleDirections.length === 0) {
                // No possible directions - shouldn't happen but handle it
                return;
            }

            let bestDirection = this.direction;
            let bestDistance = Infinity;
            let foundNonReverse = false;

            // First pass - try to find direction that's not a reverse
            for (const dir of possibleDirections) {
                // Don't reverse direction unless it's the only option
                const isReverse = dir.x === -this.direction.x && dir.y === -this.direction.y;

                if (!isReverse) {
                    const nextX = this.x + dir.x * TILE_SIZE;
                    const nextY = this.y + dir.y * TILE_SIZE;

                    let distance;
                    if (this.mode === GhostMode.FRIGHTENED) {
                        // Random direction when frightened
                        distance = Math.random();
                    } else {
                        const dx = nextX - target.x;
                        const dy = nextY - target.y;
                        distance = dx * dx + dy * dy;
                    }

                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestDirection = dir;
                        foundNonReverse = true;
                    }
                }
            }

            // If we only found reverse directions, allow it
            if (!foundNonReverse) {
                for (const dir of possibleDirections) {
                    const nextX = this.x + dir.x * TILE_SIZE;
                    const nextY = this.y + dir.y * TILE_SIZE;

                    let distance;
                    if (this.mode === GhostMode.FRIGHTENED) {
                        distance = Math.random();
                    } else {
                        const dx = nextX - target.x;
                        const dy = nextY - target.y;
                        distance = dx * dx + dy * dy;
                    }

                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestDirection = dir;
                    }
                }
            }

            this.direction = bestDirection;
            this.eyeDirection = bestDirection;
        }

        // Move in current direction
        const speed = this.mode === GhostMode.FRIGHTENED ? this.speed * 0.6 :
            this.mode === GhostMode.EATEN ? this.speed * 2 : this.speed;

        if (this.maze.canMove(this.x, this.y, this.direction)) {
            this.x += this.direction.x * speed;
            this.y += this.direction.y * speed;
        } else {
            // If can't move in current direction, try to find a new one
            const possibleDirections = this.getPossibleDirections();
            if (possibleDirections.length > 0) {
                // Pick a random direction when stuck
                this.direction = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
                this.eyeDirection = this.direction;
            }
        }
    }

    isAtIntersection() {
        const tileX = Math.round(this.x / TILE_SIZE);
        const tileY = Math.round(this.y / TILE_SIZE);

        const atCenterX = Math.abs(this.x - tileX * TILE_SIZE) < 2;
        const atCenterY = Math.abs(this.y - tileY * TILE_SIZE) < 2;

        return atCenterX && atCenterY;
    }

    getPossibleDirections() {
        const directions = [
            { x: 1, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: -1 }
        ];

        return directions.filter(dir =>
            this.maze.canMove(this.x, this.y, dir)
        );
    }

    getTarget(pacman, ghosts) {
        // Override in subclasses
        return { x: pacman.x, y: pacman.y };
    }

    setFrightened() {
        if (this.mode !== GhostMode.EATEN) {
            this.mode = GhostMode.FRIGHTENED;
            this.frightenedTimer = 300; // 5 seconds at 60fps
            // Reverse direction
            this.direction = { x: -this.direction.x, y: -this.direction.y };
        }
    }

    eat() {
        this.mode = GhostMode.EATEN;
        this.frightenedTimer = 0;
    }

    getReleaseTime() {
        // Override in subclasses
        return 0;
    }

    draw(ctx) {
        const centerX = this.x + TILE_SIZE / 2;
        const centerY = this.y + TILE_SIZE / 2;
        const radius = TILE_SIZE / 2 - 2;

        ctx.save();

        // Draw ghost body
        if (this.mode === GhostMode.FRIGHTENED) {
            // Flash between blue and white when timer is low
            const flash = this.frightenedTimer < 120 && Math.floor(this.frightenedTimer / 10) % 2 === 0;
            ctx.fillStyle = flash ? '#FFF' : '#2121FF';
            ctx.shadowBlur = 10;
            ctx.shadowColor = flash ? '#FFF' : '#2121FF';
        } else if (this.mode === GhostMode.EATEN) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
        } else {
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.color;
        }

        if (this.mode !== GhostMode.EATEN) {
            // Draw body (rounded top)
            ctx.beginPath();
            ctx.arc(centerX, centerY - radius / 2, radius, Math.PI, 0);
            ctx.lineTo(centerX + radius, centerY + radius);

            // Draw wavy bottom
            const waveTime = Date.now() / 100;
            for (let i = 3; i >= 0; i--) {
                const waveX = centerX + radius - (i * radius / 2);
                const waveY = centerY + radius + Math.sin(waveTime + i) * 2;
                ctx.lineTo(waveX, waveY);
            }

            ctx.lineTo(centerX - radius, centerY + radius);
            ctx.closePath();
            ctx.fill();
        }

        // Draw eyes
        this.drawEyes(ctx, centerX, centerY, radius);

        ctx.shadowBlur = 0;
        ctx.restore();
    }

    drawEyes(ctx, centerX, centerY, radius) {
        const eyeRadius = radius / 4;
        const eyeOffsetX = radius / 3;
        const eyeOffsetY = radius / 4;

        // White of eyes
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(centerX - eyeOffsetX, centerY - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(centerX + eyeOffsetX, centerY - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Pupils (looking in direction of movement)
        const pupilRadius = eyeRadius / 2;
        const pupilOffsetX = this.eyeDirection.x * 2;
        const pupilOffsetY = this.eyeDirection.y * 2;

        ctx.fillStyle = this.mode === GhostMode.EATEN ? this.color : '#2121DE';
        ctx.beginPath();
        ctx.arc(centerX - eyeOffsetX + pupilOffsetX, centerY - eyeOffsetY + pupilOffsetY, pupilRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(centerX + eyeOffsetX + pupilOffsetX, centerY - eyeOffsetY + pupilOffsetY, pupilRadius, 0, Math.PI * 2);
        ctx.fill();
    }

    getTilePosition() {
        return {
            x: Math.floor(this.x / TILE_SIZE),
            y: Math.floor(this.y / TILE_SIZE)
        };
    }
}

// Blinky (Red) - Chases Pac-Man directly
class Blinky extends Ghost {
    constructor(maze) {
        super('Blinky', '#FF0000', 10, 9, { x: 25, y: 0 }, maze);
    }

    getTarget(pacman, ghosts) {
        if (this.mode === GhostMode.SCATTER) {
            return { x: this.scatterTarget.x * TILE_SIZE, y: this.scatterTarget.y * TILE_SIZE };
        } else if (this.mode === GhostMode.EATEN) {
            return { x: 10 * TILE_SIZE, y: 10 * TILE_SIZE };
        }
        return { x: pacman.x, y: pacman.y };
    }

    getReleaseTime() {
        return 0; // Released immediately
    }
}

// Pinky (Pink) - Targets 4 tiles ahead of Pac-Man
class Pinky extends Ghost {
    constructor(maze) {
        super('Pinky', '#FFB8FF', 10, 10, { x: 2, y: 0 }, maze);
    }

    getTarget(pacman, ghosts) {
        if (this.mode === GhostMode.SCATTER) {
            return { x: this.scatterTarget.x * TILE_SIZE, y: this.scatterTarget.y * TILE_SIZE };
        } else if (this.mode === GhostMode.EATEN) {
            return { x: 10 * TILE_SIZE, y: 10 * TILE_SIZE };
        }

        const offset = 4 * TILE_SIZE;
        return {
            x: pacman.x + pacman.direction.x * offset,
            y: pacman.y + pacman.direction.y * offset
        };
    }

    getReleaseTime() {
        return 60;
    }
}

// Inky (Cyan) - Complex targeting based on Blinky and Pac-Man
class Inky extends Ghost {
    constructor(maze) {
        super('Inky', '#00FFFF', 9, 10, { x: 27, y: 32 }, maze);
    }

    getTarget(pacman, ghosts) {
        if (this.mode === GhostMode.SCATTER) {
            return { x: this.scatterTarget.x * TILE_SIZE, y: this.scatterTarget.y * TILE_SIZE };
        } else if (this.mode === GhostMode.EATEN) {
            return { x: 10 * TILE_SIZE, y: 10 * TILE_SIZE };
        }

        const blinky = ghosts.find(g => g.name === 'Blinky');
        if (!blinky) return { x: pacman.x, y: pacman.y };

        const offset = 2 * TILE_SIZE;
        const pivotX = pacman.x + pacman.direction.x * offset;
        const pivotY = pacman.y + pacman.direction.y * offset;

        return {
            x: pivotX + (pivotX - blinky.x),
            y: pivotY + (pivotY - blinky.y)
        };
    }

    getReleaseTime() {
        return 120;
    }
}

// Clyde (Orange) - Chases Pac-Man when far, scatters when close
class Clyde extends Ghost {
    constructor(maze) {
        super('Clyde', '#FFB852', 11, 10, { x: 0, y: 32 }, maze);
    }

    getTarget(pacman, ghosts) {
        if (this.mode === GhostMode.SCATTER) {
            return { x: this.scatterTarget.x * TILE_SIZE, y: this.scatterTarget.y * TILE_SIZE };
        } else if (this.mode === GhostMode.EATEN) {
            return { x: 10 * TILE_SIZE, y: 10 * TILE_SIZE };
        }

        const dx = this.x - pacman.x;
        const dy = this.y - pacman.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If within 8 tiles, go to scatter corner
        if (distance < 8 * TILE_SIZE) {
            return { x: this.scatterTarget.x * TILE_SIZE, y: this.scatterTarget.y * TILE_SIZE };
        }

        return { x: pacman.x, y: pacman.y };
    }

    getReleaseTime() {
        return 180;
    }
}

// Maze configuration - Classic Pac-Man layout
// 0 = path, 1 = wall, 2 = pellet, 3 = power pellet, 4 = ghost house, 5 = tunnel

const MAZE_LAYOUT = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 3, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 3, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 0, 1, 1, 4, 4, 4, 1, 1, 0, 1, 2, 1, 1, 1, 1],
    [5, 0, 0, 0, 2, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 2, 0, 0, 0, 5],
    [1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 3, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 2, 3, 1],
    [1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const TILE_SIZE = 24;
const MAZE_WIDTH = MAZE_LAYOUT[0].length;
const MAZE_HEIGHT = MAZE_LAYOUT.length;

class Maze {
    constructor() {
        this.layout = JSON.parse(JSON.stringify(MAZE_LAYOUT)); // Deep copy
        this.pelletsRemaining = 0;
        this.totalPellets = 0;
        this.powerPellets = [];
        this.countPellets();
    }

    countPellets() {
        this.pelletsRemaining = 0;
        this.totalPellets = 0;
        this.powerPellets = [];

        for (let y = 0; y < MAZE_HEIGHT; y++) {
            for (let x = 0; x < MAZE_WIDTH; x++) {
                if (this.layout[y][x] === 2) {
                    this.pelletsRemaining++;
                    this.totalPellets++;
                } else if (this.layout[y][x] === 3) {
                    this.pelletsRemaining++;
                    this.totalPellets++;
                    this.powerPellets.push({ x, y });
                }
            }
        }
    }

    reset() {
        this.layout = JSON.parse(JSON.stringify(MAZE_LAYOUT));
        this.countPellets();
    }

    getTile(x, y) {
        const tileX = Math.floor(x / TILE_SIZE);
        const tileY = Math.floor(y / TILE_SIZE);

        if (tileY < 0 || tileY >= MAZE_HEIGHT || tileX < 0 || tileX >= MAZE_WIDTH) {
            return 1; // Wall
        }

        return this.layout[tileY][tileX];
    }

    isWall(x, y) {
        return this.getTile(x, y) === 1;
    }

    canMove(x, y, direction) {
        const nextX = x + direction.x * TILE_SIZE;
        const nextY = y + direction.y * TILE_SIZE;

        // Check all corners of the character
        const size = TILE_SIZE - 2;
        const offset = 1;

        return !this.isWall(nextX + offset, nextY + offset) &&
            !this.isWall(nextX + size - offset, nextY + offset) &&
            !this.isWall(nextX + offset, nextY + size - offset) &&
            !this.isWall(nextX + size - offset, nextY + size - offset);
    }

    eatPellet(x, y) {
        const tileX = Math.floor(x / TILE_SIZE);
        const tileY = Math.floor(y / TILE_SIZE);

        if (tileY < 0 || tileY >= MAZE_HEIGHT || tileX < 0 || tileX >= MAZE_WIDTH) {
            return 0;
        }

        const tile = this.layout[tileY][tileX];

        if (tile === 2) {
            this.layout[tileY][tileX] = 0;
            this.pelletsRemaining--;
            return 2; // Regular pellet
        } else if (tile === 3) {
            this.layout[tileY][tileX] = 0;
            this.pelletsRemaining--;
            return 3; // Power pellet
        }

        return 0;
    }

    draw(ctx) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, MAZE_WIDTH * TILE_SIZE, MAZE_HEIGHT * TILE_SIZE);

        for (let y = 0; y < MAZE_HEIGHT; y++) {
            for (let x = 0; x < MAZE_WIDTH; x++) {
                const tile = this.layout[y][x];
                const posX = x * TILE_SIZE;
                const posY = y * TILE_SIZE;

                switch (tile) {
                    case 1: // Wall
                        this.drawWall(ctx, posX, posY);
                        break;
                    case 2: // Pellet
                        this.drawPellet(ctx, posX, posY);
                        break;
                    case 3: // Power pellet
                        this.drawPowerPellet(ctx, posX, posY);
                        break;
                    case 4: // Ghost house
                        this.drawGhostHouse(ctx, posX, posY);
                        break;
                }
            }
        }
    }

    drawWall(ctx, x, y) {
        // Draw blue maze walls with gradient
        const gradient = ctx.createLinearGradient(x, y, x + TILE_SIZE, y + TILE_SIZE);
        gradient.addColorStop(0, '#2828FF');
        gradient.addColorStop(1, '#1E1EBB');

        ctx.fillStyle = gradient;
        ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);

        // Add border for classic look
        ctx.strokeStyle = '#4848FF';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
    }

    drawPellet(ctx, x, y) {
        ctx.fillStyle = '#FFB897';
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#FFB897';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    drawPowerPellet(ctx, x, y) {
        const time = Date.now() / 200;
        const pulse = Math.sin(time) * 0.3 + 0.7;

        ctx.fillStyle = '#FFF';
        ctx.shadowBlur = 10 * pulse;
        ctx.shadowColor = '#FFF';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 5 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    drawGhostHouse(ctx, x, y) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

        // Draw pink gate
        ctx.strokeStyle = '#FFB8FF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y + TILE_SIZE / 2);
        ctx.lineTo(x + TILE_SIZE, y + TILE_SIZE / 2);
        ctx.stroke();
    }

    isAllPelletsEaten() {
        return this.pelletsRemaining === 0;
    }
}

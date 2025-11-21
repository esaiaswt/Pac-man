// Pac-Man character class
class PacMan {
    constructor(maze) {
        this.maze = maze;
        this.reset();
    }

    reset() {
        this.x = 10 * TILE_SIZE;
        this.y = 16 * TILE_SIZE;
        this.speed = 2;
        this.direction = { x: 0, y: 0 };
        this.nextDirection = { x: 0, y: 0 };
        this.mouthAngle = 0.2;
        this.mouthOpening = true;
        this.isDead = false;
        this.deathAnimationFrame = 0;
    }

    update() {
        if (this.isDead) {
            this.updateDeathAnimation();
            return;
        }

        // Try to change direction if a new direction was requested
        if (this.nextDirection.x !== 0 || this.nextDirection.y !== 0) {
            if (this.maze.canMove(this.x, this.y, this.nextDirection)) {
                this.direction = { ...this.nextDirection };
            }
        }

        // Move in current direction
        if (this.maze.canMove(this.x, this.y, this.direction)) {
            this.x += this.direction.x * this.speed;
            this.y += this.direction.y * this.speed;
        }

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

        // Animate mouth
        this.animateMouth();

        // Align to grid for smoother movement
        this.alignToGrid();
    }

    alignToGrid() {
        const tileX = Math.round(this.x / TILE_SIZE) * TILE_SIZE;
        const tileY = Math.round(this.y / TILE_SIZE) * TILE_SIZE;

        const distX = Math.abs(this.x - tileX);
        const distY = Math.abs(this.y - tileY);

        // Only snap if very close and not moving in that direction
        if (distX < 1 && this.direction.x === 0) {
            this.x = tileX;
        }
        if (distY < 1 && this.direction.y === 0) {
            this.y = tileY;
        }
    }

    animateMouth() {
        const speed = 0.08;

        if (this.mouthOpening) {
            this.mouthAngle += speed;
            if (this.mouthAngle >= 0.8) {
                this.mouthOpening = false;
            }
        } else {
            this.mouthAngle -= speed;
            if (this.mouthAngle <= 0.2) {
                this.mouthOpening = true;
            }
        }
    }

    setDirection(dir) {
        this.nextDirection = dir;
    }

    getTilePosition() {
        return {
            x: Math.floor(this.x / TILE_SIZE),
            y: Math.floor(this.y / TILE_SIZE)
        };
    }

    die() {
        this.isDead = true;
        this.deathAnimationFrame = 0;
        this.direction = { x: 0, y: 0 };
        this.nextDirection = { x: 0, y: 0 };
        audioManager.play('death');
    }

    updateDeathAnimation() {
        this.deathAnimationFrame += 0.05;
    }

    isDeathAnimationComplete() {
        return this.deathAnimationFrame >= Math.PI * 2;
    }

    draw(ctx) {
        const centerX = this.x + TILE_SIZE / 2;
        const centerY = this.y + TILE_SIZE / 2;
        const radius = TILE_SIZE / 2 - 2;

        if (this.isDead) {
            this.drawDeathAnimation(ctx, centerX, centerY, radius);
            return;
        }

        // Calculate mouth direction based on movement
        let rotation = 0;
        if (this.direction.x === 1) rotation = 0;
        else if (this.direction.x === -1) rotation = Math.PI;
        else if (this.direction.y === 1) rotation = Math.PI / 2;
        else if (this.direction.y === -1) rotation = -Math.PI / 2;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        // Draw Pac-Man body
        ctx.fillStyle = '#FFFF00';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FFFF00';

        ctx.beginPath();
        ctx.arc(0, 0, radius, this.mouthAngle * Math.PI / 2, -this.mouthAngle * Math.PI / 2);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.restore();
    }

    drawDeathAnimation(ctx, centerX, centerY, radius) {
        const progress = this.deathAnimationFrame;

        if (progress >= Math.PI * 2) return;

        ctx.save();
        ctx.fillStyle = '#FFFF00';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFFF00';

        // Death animation - closing mouth effect
        const mouthAngle = Math.PI - progress;

        if (mouthAngle > 0) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, mouthAngle / 2, -mouthAngle / 2);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();
            ctx.fill();
        }

        ctx.shadowBlur = 0;
        ctx.restore();
    }

    collidesWith(ghost) {
        const dx = this.x - ghost.x;
        const dy = this.y - ghost.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < TILE_SIZE * 0.8;
    }
}

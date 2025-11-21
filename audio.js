// Audio Manager using Web Audio API
class AudioManager {
    constructor() {
        this.context = null;
        this.gainNode = null;
        this.isMuted = false;
        this.sounds = {};
        this.bgMusic = null;
        this.initialized = false;
    }

    async init() {
        if (this.initialized) return;

        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.context.createGain();
            this.gainNode.connect(this.context.destination);
            this.initialized = true;

            // Create all sound effects
            this.createSounds();
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
        }
    }

    createSounds() {
        // Start screen ambient music
        this.sounds.startScreenMusic = () => this.playStartScreenMusic();

        // Background music - simple retro melody
        this.sounds.bgMusic = () => this.playBackgroundMusic();

        // Wakka wakka (pellet eating)
        this.sounds.chomp = () => this.playChomp();

        // Power pellet eaten
        this.sounds.powerPellet = () => this.playPowerPellet();

        // Ghost eaten
        this.sounds.eatGhost = () => this.playEatGhost();

        // Death sound
        this.sounds.death = () => this.playDeath();

        // Level complete
        this.sounds.levelComplete = () => this.playLevelComplete();

        // Game start siren
        this.sounds.gameStart = () => this.playGameStart();
    }

    // Create oscillator for sound effects
    createOscillator(frequency, type = 'square', duration = 0.1, volume = 0.3) {
        if (!this.initialized || this.isMuted) return;

        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.gainNode);

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);

        gainNode.gain.setValueAtTime(volume, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);

        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + duration);
    }

    // Wakka wakka sound
    playChomp() {
        if (!this.initialized || this.isMuted) return;

        const time = this.context.currentTime;
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();

        osc.connect(gain);
        gain.connect(this.gainNode);

        osc.type = 'square';
        osc.frequency.setValueAtTime(400, time);
        osc.frequency.exponentialRampToValueAtTime(100, time + 0.08);

        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);

        osc.start(time);
        osc.stop(time + 0.08);
    }

    // Power pellet sound
    playPowerPellet() {
        if (!this.initialized || this.isMuted) return;

        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.createOscillator(200 + i * 100, 'sine', 0.05, 0.15);
            }, i * 40);
        }
    }

    // Ghost eaten sound
    playEatGhost() {
        if (!this.initialized || this.isMuted) return;

        const time = this.context.currentTime;
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();

        osc.connect(gain);
        gain.connect(this.gainNode);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, time);
        osc.frequency.exponentialRampToValueAtTime(1600, time + 0.3);

        gain.gain.setValueAtTime(0.3, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

        osc.start(time);
        osc.stop(time + 0.3);
    }

    // Death sound
    playDeath() {
        if (!this.initialized || this.isMuted) return;

        const frequencies = [659, 622, 587, 554, 523, 494, 466, 440, 415, 392, 370, 349];
        frequencies.forEach((freq, i) => {
            setTimeout(() => {
                this.createOscillator(freq, 'sine', 0.15, 0.25);
            }, i * 80);
        });
    }

    // Level complete sound
    playLevelComplete() {
        if (!this.initialized || this.isMuted) return;

        const melody = [523, 587, 659, 784, 880, 988, 1047];
        melody.forEach((freq, i) => {
            setTimeout(() => {
                this.createOscillator(freq, 'triangle', 0.2, 0.2);
            }, i * 100);
        });
    }

    // Game start siren
    playGameStart() {
        if (!this.initialized || this.isMuted) return;

        const time = this.context.currentTime;
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();

        osc.connect(gain);
        gain.connect(this.gainNode);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, time);
        osc.frequency.linearRampToValueAtTime(600, time + 0.5);
        osc.frequency.linearRampToValueAtTime(200, time + 1.0);
        osc.frequency.linearRampToValueAtTime(600, time + 1.5);

        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 1.5);

        osc.start(time);
        osc.stop(time + 1.5);
    }

    // Start screen ambient music
    playStartScreenMusic() {
        if (!this.initialized || this.isMuted) return;

        this.stopBackgroundMusic();
        this.stopStartScreenMusic();

        const playNote = (freq, startTime, duration, volume = 0.06) => {
            const osc = this.context.createOscillator();
            const gain = this.context.createGain();

            osc.connect(gain);
            gain.connect(this.gainNode);

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, startTime);

            gain.gain.setValueAtTime(volume, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

            osc.start(startTime);
            osc.stop(startTime + duration);
        };

        // Gentle ambient melody for start screen
        const melody = [
            { freq: 523.25, duration: 0.4 },  // C5
            { freq: 659.25, duration: 0.4 },  // E5
            { freq: 783.99, duration: 0.4 },  // G5
            { freq: 659.25, duration: 0.4 },  // E5
            { freq: 523.25, duration: 0.4 },  // C5
            { freq: 587.33, duration: 0.4 },  // D5
            { freq: 659.25, duration: 0.8 },  // E5
        ];

        const startTime = this.context.currentTime;
        let currentTime = startTime;

        const playMelody = () => {
            if (this.isMuted) return;

            melody.forEach((note) => {
                playNote(note.freq, currentTime, note.duration);
                currentTime += note.duration + 0.1;
            });

            // Loop the music
            this.startScreenMusicTimeout = setTimeout(() => {
                currentTime = this.context.currentTime;
                playMelody();
            }, (melody.length * 0.5) * 1000);
        };

        playMelody();
    }

    stopStartScreenMusic() {
        if (this.startScreenMusicTimeout) {
            clearTimeout(this.startScreenMusicTimeout);
            this.startScreenMusicTimeout = null;
        }
    }

    // Background music loop
    playBackgroundMusic() {
        if (!this.initialized || this.isMuted) return;

        this.stopBackgroundMusic();

        const playNote = (freq, startTime, duration) => {
            const osc = this.context.createOscillator();
            const gain = this.context.createGain();

            osc.connect(gain);
            gain.connect(this.gainNode);

            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, startTime);

            gain.gain.setValueAtTime(0.08, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

            osc.start(startTime);
            osc.stop(startTime + duration);
        };

        // Classic Pac-Man inspired melody
        const melody = [
            { freq: 493.88, duration: 0.15 }, // B4
            { freq: 587.33, duration: 0.15 }, // D5
            { freq: 493.88, duration: 0.15 }, // B4
            { freq: 392.00, duration: 0.15 }, // G4
            { freq: 493.88, duration: 0.15 }, // B4
            { freq: 587.33, duration: 0.15 }, // D5
            { freq: 493.88, duration: 0.15 }, // B4
            { freq: 659.25, duration: 0.3 },  // E5
        ];

        const startTime = this.context.currentTime;
        let currentTime = startTime;

        const playMelody = () => {
            if (this.isMuted) return;

            melody.forEach((note) => {
                playNote(note.freq, currentTime, note.duration);
                currentTime += note.duration + 0.05;
            });

            // Loop the music
            this.bgMusicTimeout = setTimeout(() => {
                currentTime = this.context.currentTime;
                playMelody();
            }, (melody.length * 0.2) * 1000);
        };

        playMelody();
    }

    stopBackgroundMusic() {
        if (this.bgMusicTimeout) {
            clearTimeout(this.bgMusicTimeout);
            this.bgMusicTimeout = null;
        }
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

// Global audio manager instance
const audioManager = new AudioManager();

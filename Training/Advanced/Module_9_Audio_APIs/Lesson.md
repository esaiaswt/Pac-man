# Module 9: Audio APIs & Advanced Features

**Duration**: 5-8 hours | **Level**: Advanced

## 🎯 Learning Objectives

- Understand Web Audio API
- Generate procedural sounds
- Create oscillators and effects
- Manage audio context
- Build retro game sound effects

## 📖 Key Concepts

### Web Audio API Basics
```javascript
// Create audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create oscillator (sound generator)
const oscillator = audioContext.createOscillator();
oscillator.type = 'square';  // square, sine, triangle, sawtooth
oscillator.frequency.value = 440;  // A note (Hz)

// Create gain (volume control)
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.3;

// Connect nodes
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

// Play sound
oscillator.start();
oscillator.stop(audioContext.currentTime + 0.5);  // Play for 0.5s
```

### Sound Effects
```javascript
// Beep sound
function playBeep(frequency, duration) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.type = 'square';
    osc.frequency.value = frequency;
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.start();
    osc.stop(audioContext.currentTime + duration);
}

// Usage
playBeep(440, 0.2);  // Play A note for 0.2 seconds
```

### Pac-Man Wakka  Sound
```javascript
playWakka() {
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, this.audioContext.currentTime);
    osc.frequency.setValueAtTime(150, this.audioContext.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.15, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 0.1);
}
```

### Power Pellet Sound
```javascript
playPowerPellet() {
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 0.3);
}
```

### Background Music Loop
```javascript
function playBackgroundMusic() {
    const notes = [200, 250, 300, 250];  // Frequencies
    let currentNote = 0;
    
    function playNote() {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.frequency.value = notes[currentNote];
        osc.type = 'square';
        gain.gain.value = 0.1;
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start();
        osc.stop(audioContext.currentTime + 0.2);
        
        currentNote = (currentNote + 1) % notes.length;
        setTimeout(playNote, 200);
    }
    
    playNote();
}
```

## 🔑 Key Takeaways

1. Web Audio API generates sounds without files
2. Oscillators create different wave types
3. Gain nodes control volume
4. Frequency changes create pitch variation
5. Connect nodes to build audio graphs

[Worksheet](Worksheet.md)

**Congratulations! You've completed all 9 modules! 🎉**

Check out the [Challenges](../../../Challenges/) for advanced projects!

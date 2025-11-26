# Module 3: CSS Styling Fundamentals

**Duration**: 4-7 hours  
**Level**: Basic  
**Prerequisites**: Modules 1-2 completed

## 🎯 Learning Objectives

By the end of this module, you will:
- Understand CSS syntax and how it works
- Use selectors to target HTML elements
- Apply colors, fonts, and spacing
- Create layouts with the box model
- Build animations and visual effects
- Recreate retro arcade styling

---

## 📖 Lesson Content

### Part 1: What is CSS?

**CSS** (Cascading Style Sheets) controls how HTML elements look. While HTML is the structure, CSS is the style.

**Without CSS**: Plain text, Times New Roman font, black and white
**With CSS**: Colors, custom fonts, animations, layouts, and visual effects!

### Part 2: CSS Syntax

```css
selector {
    property: value;
    another-property: another-value;
}
```

**Example**:
```css
h1 {
    color: yellow;
    font-size: 64px;
    text-shadow: 0 0 20px yellow;
}
```

**Breakdown**:
- `h1` = selector (what to style)
- `color`, `font-size`, `text-shadow` = properties (what aspect to change)
- `yellow`, `64px`, `0 0 20px yellow` = values (how to change it)

### Part 3: Adding CSS to HTML

**Method 1: External Stylesheet** (Best Practice)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Method 2: Internal Stylesheet**
```html
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>
```

**Method 3: Inline Styles** (Avoid when possible)
```html
<h1 style="color: blue;">Title</h1>
```

### Part 4: CSS Selectors

**Element Selector** (targets all elements of a type):
```css
p { color: blue; }
```

**Class Selector** (targets elements with specific class):
```css
.arcade-button { background: green; }
```
```html
<button class="arcade-button">Start</button>
```

**ID Selector** (targets one unique element):
```css
#startButton { font-size: 20px; }
```
```html
<button id="startButton">Start</button>
```

**Multiple Selectors**:
```css
h1, h2, h3 { color: yellow; }
```

**Descendant Selector**:
```css
div p { color: red; }  /* p inside div */
```

**Chaining Selectors**:
```css
button.arcade-button { /* button with class arcade-button */ }
```

### Part 5: Colors

**Named Colors**:
```css
color: red;
background-color: blue;
```

**Hex Colors**:
```css
color: #FFFF00;  /* Yellow */
color: #FF0000;  /* Red */
```

**RGB Colors**:
```css
color: rgb(255, 255, 0);  /* Yellow */
```

**RGBA (with transparency)**:
```css
background-color: rgba(0, 0, 0, 0.8);  /* Black with 80% opacity */
```

**CSS Variables** (like the Pac-Man project):
```css
:root {
    --pacman-yellow: #FFFF00;
    --neon-green: #00FF41;
}

h1 {
    color: var(--pacman-yellow);
}
```

### Part 6: Typography

```css
/* Font family */
font-family: 'Press Start 2P', cursive;

/* Font size */
font-size: 24px;
font-size: 1.5em;
font-size: 2rem;

/* Font weight */
font-weight: bold;
font-weight: 700;

/* Text alignment */
text-align: center;
text-align: left;
text-align: right;

/* Text decoration */
text-decoration: underline;
text-decoration: none;  /* removes underline from links */

/* Letter spacing */
letter-spacing: 4px;

/* Line height */
line-height: 1.6;
```

### Part 7: The Box Model

Every HTML element is a rectangular box with:

```
╔═══════════════════════════════╗
║         MARGIN                ║
║  ╔═══════════════════════╗    ║
║  ║      BORDER           ║    ║
║  ║  ╔═══════════════╗    ║    ║
║  ║  ║   PADDING     ║    ║    ║
║  ║  ║  ╔═══════╗    ║    ║    ║
║  ║  ║  ║CONTENT║    ║    ║    ║
║  ║  ║  ╚═══════╝    ║    ║    ║
║  ║  ╚═══════════════╝    ║    ║
║  ╚═══════════════════════╝    ║
╚═══════════════════════════════╝
```

**CSS Properties**:
```css
/* Content size */
width: 200px;
height: 100px;

/* Padding (space inside) */
padding: 20px;
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
padding: 10px 15px;  /* top/bottom left/right */

/* Border */
border: 2px solid black;
border-radius: 10px;  /* rounded corners */

/* Margin (space outside) */
margin: 20px;
margin: 0 auto;  /* center element */
```

### Part 8: Display and Layout

```css
/* Display types */
display: block;     /* Takes full width */
display: inline;    /* Stays on same line */
display: none;      /* Hides element */
display: flex;      /* Flexible container */

/* Flexbox (modern layout) */
.container {
    display: flex;
    justify-content: center;  /* horizontal alignment */
    align-items: center;      /* vertical alignment */
    gap: 20px;               /* space between items */
}
```

### Part 9: Positioning

```css
position: static;    /* Default */
position: relative;  /* Relative to normal position */
position: absolute;  /* Relative to parent */
position: fixed;     /* Relative to viewport */

/* With positioning */
.element {
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: 10;  /* Stack order */
}
```

### Part 10: Visual Effects

**Box Shadow**:
```css
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
box-shadow: 0 0 20px yellow;  /* Glow effect */
```

**Text Shadow**:
```css
text-shadow: 2px 2px 4px black;
text-shadow: 0 0 20px yellow, 0 0 40px yellow;  /* Neon glow */
```

**Gradients**:
```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
background: radial-gradient(circle, #1a1a1a 0%, black 100%);
```

**Opacity**:
```css
opacity: 0.5;  /* 50% transparent */
```

### Part 11: Animations

**Transitions** (smooth changes):
```css
.button {
    background: green;
    transition: all 0.3s ease;
}

.button:hover {
    background: lime;
    transform: scale(1.1);
}
```

**Keyframe Animations**:
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.title {
    animation: pulse 2s ease-in-out infinite;
}
```

### Part 12: Pseudo-Classes and Pseudo-Elements

**Pseudo-classes** (special states):
```css
button:hover { background: yellow; }
button:active { transform: translateY(4px); }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
```

**Pseudo-elements** (special parts):
```css
p::first-letter { font-size: 2em; }
.element::before { content: "→ "; }
.element::after { content: " ←"; }
```

### Part 13: Retro Arcade Styling (Pac-Man Style)

Let's analyze the Pac-Man CSS:

**Neon Glow Effect**:
```css
.game-title {
    color: var(--pacman-yellow);
    text-shadow: 
        0 0 20px var(--pacman-yellow),
        0 0 40px var(--pacman-yellow);
}
```

**Retro Button**:
```css
.arcade-button {
    font-family: 'Press Start 2P', cursive;
    background: linear-gradient(145deg, var(--neon-green), #00cc33);
    box-shadow: 
        0 0 20px var(--neon-green),
        0 4px 0 #00aa2a,
        0 8px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
```

**Scanline Effect** (CRT screen):
```css
.scanlines {
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0px,
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
    );
}
```

---

## 🔑 Key Takeaways

1. CSS **selectors** target HTML elements to style
2. The **box model** includes content, padding, border, and margin
3. **Colors** can be named, hex, RGB, or CSS variables
4. **Flexbox** makes layout easy
5. **Animations** and **transitions** create smooth effects
6. **Pseudo-classes** like `:hover` style special states
7. Combining effects creates stunning retro aesthetics

---

## 🎓 Quick Quiz

1. What's the difference between a class and an ID selector?
2. Name the four parts of the box model
3. How do you create a neon glow effect?
4. What does `display: flex` do?
5. What's the difference between margin and padding?

---

## 🚀 Next Steps

Practice your CSS skills in the [Worksheet](Worksheet.md)!

After this module, you'll move to [Module 4: JavaScript Fundamentals](../../Intermediate/Module_4_JavaScript/Lesson.md).

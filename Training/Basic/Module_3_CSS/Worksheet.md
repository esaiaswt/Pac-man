# Module 3 Worksheet: CSS Styling Fundamentals

**Name**: _______________  
**Date**: _______________

---

## Part 1: CSS Basics ✏️

### Task 1: Create Your First Stylesheet

1. Create `style-practice.html` with basic HTML structure
2. Create `style-practice.css`
3. Link them together

**In HTML**:
```html
<link rel="stylesheet" href="style-practice.css">
```

- [ ] Created both files
- [ ] Linked CSS to HTML
- [ ] Styles are applying

### Task 2: Color All the Things!

Add CSS to style:
- Make all `<h1>` elements yellow
- Make all `<p>` elements white
- Set body background to dark blue (#0a0a0a)

```css
/* Write your CSS here */



```

---

## Part 2: Selectors Practice 🎯

### Task 3: Target Different Elements

Create HTML with:
- A div with class="game-area"
- A button with id="startBtn"
- Multiple paragraphs with class="info"

Write CSS to:
```css
/* Style all buttons */


/* Style the specific start button */


/* Style only elements with class info */


/* Style paragraphs inside game-area */


```

---

## Part 3: The Box Model 📦

### Task 4: Build a Button

Create a button and style it with:
- Width: 200px, Height: 60px
- Padding: 15px
- Border: 3px solid green
- Margin: 20px
- Border-radius: 10px

```css
.my-button {
    /* Write your styles */







}
```

- [ ] Button created and styled
- [ ] Opens in browser and looks good

**Draw your button's box model**:
```
(Draw or describe the margin, border, padding, and content)




```

---

## Part 4: Typography 🔤

### Task 5: Make It Retro!

Style an `<h1>` to look retro:
- Font-family: 'Press Start 2P' (you'll need to add Google Fonts)
- Font-size: 48px
- Color: #FFFF00 (yellow)
- Text-align: center
- Letter-spacing: 4px

```css
h1 {
    /* Your styles */






}
```

---

## Part 5: Neon Glow Effects ✨

### Task 6: Create a Neon Title

Make a glowing neon text effect:

```css
.neon-title {
    color: #00FF41;
    text-shadow: 
        0 0 10px #00FF41,
        0 0 20px #00FF41,
        0 0 30px #00FF41;
}
```

- [ ] Created HTML element with class="neon-title"
- [ ] Applied the CSS
- [ ] Text has a glowing effect

**Experiment**: Change the color values. What happens?
```
________________________________________________________________
```

---

## Part 6: Layout with Flexbox 📐

### Task 7: Center Everything

Create a container that centers its content:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #1a1a1a;
}
```

Inside, add 3 colored boxes:
```css
.box {
    width: 100px;
    height: 100px;
    margin: 10px;
}
```

- [ ] Container centers content
- [ ] Boxes appear in a row
- [ ] Everything is centered

---

## Part 7: Hover Effects 🖱️

### Task 8: Interactive Button

Create a button that changes on hover:

```css
.hover-button {
    background: #00FF41;
    transition: all 0.3s ease;
}

.hover-button:hover {
    background: #00cc33;
    transform: scale(1.1);
    box-shadow: 0 0 20px #00FF41;
}
```

- [ ] Button changes color on hover
- [ ] Button scales up slightly
- [ ] Button has a glow effect
- [ ] Transition is smooth

---

## Part 8: Animations 🎬

### Task 9: Pulse Animation

Create a pulsing effect:

```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pulsing-element {
    animation: pulse 2s ease-in-out infinite;
}
```

Apply to an element and watch it pulse!

- [ ] Animation is working
- [ ] Element pulses continuously

**Challenge**: Create a different animation (fade, rotate, slide)
```css
@keyframes my-animation {
    /* Your keyframes */


}
```

---

## Part 9: Analyze Pac-Man CSS 🔍

### Task 10: Pac-Man Style Investigation

Open `styles.css` from the Pac-Man project and answer:

1. **What CSS variable stores the Pac-Man yellow color?**
   ```
   ___________________________________________________________
   ```

2. **Find the `.arcade-button` class. What creates the 3D button effect?**
   ```
   ___________________________________________________________
   ```

3. **What animation is applied to the game title?**
   ```
   ___________________________________________________________
   ```

4. **How does the scanline effect work? (Hint: repeating-linear-gradient)**
   ```
   ___________________________________________________________
   ___________________________________________________________
   ```

5. **Find a gradient. Write it here**:
   ```css
   ___________________________________________________________
   ```

---

## Part 10: Recreate Arcade Styling 🎮

### Task 11: Build an Arcade Button

Recreate the Pac-Man button style:

```css
.arcade-style-button {
    /* Font */
    
    /* Size and spacing */
    
    /* Color and background */
    
    /* Border and border-radius */
    
    /* Shadow for 3D effect */
    
    /* Hover effect */
    
}
```

- [ ] Button looks retro
- [ ] Has 3D effect
- [ ] Hover state works
- [ ] Neon glow present

---

## Part 11: Complete Page Styling 🎨

### Task 12: Style a Game Menu

Create `game-menu.html` and `game-menu.css`:

**Requirements**:
- Dark background with gradient
- Centered content
- Retro font for title
- Styled buttons with hover effects
- Neon color scheme
- Good use of spacing (margins/padding)

**Bonus**:
- Add glowing effects
- Include animations
- Add a scanline overlay
- Use CSS variables

---

## Part 12: Responsive Design 📱

### Task 13: Media Queries (Optional)

Make your game menu responsive:

```css
/* Desktop styles */
.container {
    width: 800px;
}

/* Tablet */
@media (max-width: 768px) {
    .container {
        width: 600px;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .container {
        width: 100%;
    }
}
```

---

## 🎯 Self-Assessment

Rate your understanding (1-5):

- [ ] I can write CSS selectors: ___/5
- [ ] I understand the box model: ___/5
- [ ] I can create layouts with flexbox: ___/5
- [ ] I can add animations and effects: ___/5
- [ ] I can recreate retro arcade styling: ___/5

---

## ✅ Completion Checklist

- [ ] Created at least 3 styled HTML pages
- [ ] Used classes and IDs effectively
- [ ] Applied box model properties
- [ ] Created hover effects and animations
- [ ] Analyzed Pac-Man CSS
- [ ] Built at least one complete styled page

---

**Fantastic! 🎉 Basic Level Complete!**

**Next**: [Module 4: JavaScript Fundamentals](../../Intermediate/Module_4_JavaScript/Lesson.md)

**Need help?** Check the [Answer Key](../../../Answer_Keys/Basic/Module_3_Answers.md).

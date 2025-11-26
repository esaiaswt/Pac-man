# Module 2 Worksheet: HTML Basics

**Name**: _______________  
**Date**: _______________

---

## Part 1: HTML Structure Practice ✏️

### Task 1: Create Your First HTML Page

Create a file called `my-first-page.html` in the Exercises folder with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page!</p>
</body>
</html>
```

- [ ] File created
- [ ] Opened in browser successfully
- [ ] Can see the heading and paragraph

---

## Part 2: Text Elements 📝

### Task 2: Build a Game Info Page

Create `game-info.html` with information about Pac-Man:

**Requirements**:
- [ ] An `<h1>` main heading with "PAC-MAN Game Guide"
- [ ] At least three `<h2>` subheadings (e.g., "History", "How to Play", "Characters")
- [ ] Multiple paragraphs with game information
- [ ] Use `<strong>` to make important words bold
- [ ] Use `<em>` to emphasize certain phrases
- [ ] Include at least one `<hr>` to separate sections

**Extra credit**: Add a `<br>` tag where appropriate

---

## Part 3: Lists 📋

### Task 3: Create Character Lists

In your `game-info.html`, add two lists:

**Unordered List of Ghost Names**:
```html
<h2>The Ghosts</h2>
<ul>
    <!-- Add the four ghosts here -->
</ul>
```

**Ordered List of Game Instructions**:
```html
<h2>How to Play</h2>
<ol>
    <!-- Add at least 5 steps -->
</ol>
```

- [ ] Unordered list completed with all 4 ghosts
- [ ] Ordered list completed with at least 5 steps

---

## Part 4: Attributes and IDs 🏷️

### Task 4: Add IDs and Classes

Modify your `game-info.html`:

1. Add `id="main-title"` to your h1
2. Add `class="ghost-info"` to the ghost list
3. Add `class="instructions"` to the how-to-play list
4. Add `id="blinky"` to the Blinky list item

**Write the code for step 4**:
```html
________________________________________________________________
```

---

## Part 5: Links and Buttons 🔗

### Task 5: Create Navigation

Create a simple navigation menu in your HTML:

```html
<nav>
    <a href="#main-title">Top</a>
    <a href="#ghosts">Ghosts</a>
    <a href="#instructions">How to Play</a>
</nav>
```

Then add a button:
```html
<button id="playButton">Start Playing!</button>
```

- [ ] Navigation menu added
- [ ] All links work (they jump to sections)
- [ ] Button created with correct ID

**What happens when you click the button?**
```
________________________________________________________________
```

---

## Part 6: Analyze the Pac-Man HTML 🔍

### Task 6: Element Scavenger Hunt

Open the Pac-Man `index.html` file and find:

1. **How many `<div>` elements are in the file?**
   ```
   Count: ___________
   ```

2. **What ID is given to the start button?**
   ```
   ID: ___________
   ```

3. **What class is applied to the main game title "PAC-MAN"?**
   ```
   Class: ___________
   ```

4. **Find the canvas element and write its complete tag here**:
   ```html
   ________________________________________________________________
   ```

5. **How many `<script>` tags are at the bottom?**
   ```
   Count: ___________
   ```

6. **What external font is being loaded? (Hint: look in the `<head>`)**
   ```
   Font name: ___________
   ```

### Task 7: Understanding Structure

Look at the three main screens in `index.html`:
- Start Screen
- Game Screen
- Game Over Screen

**What do they all have in common?** (Hint: look at their classes)
```
________________________________________________________________
________________________________________________________________
```

**How does the game know which screen to show?**
```
________________________________________________________________
________________________________________________________________
```

---

## Part 7: Build From Scratch 🏗️

### Task 8: Create a Simple Game Page

Create `simple-game.html` with the following structure:

```
- Title: "My Simple Game"
- A container div with class="game-area"
  - A heading "Welcome to My Game!"
  - A paragraph explaining the game
  - A canvas element (600x400)
  - Two buttons: "Start" and "Reset"
```

**Write your complete HTML here**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your head content -->
</head>
<body>
    <!-- Your game structure -->
</body>
</html>
```

---

## Part 8: Semantic HTML 🎯

### Task 9: Improve Structure with Semantic Tags

Rewrite this code using semantic HTML:

**Before** (non-semantic):
```html
<div class="top">
    <div class="nav">Menu</div>
</div>
<div class="content">
    <div class="post">Article content</div>
</div>
<div class="bottom">
    Copyright 2025
</div>
```

**After** (semantic) - Write your answer:
```html
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
```

---

## Part 9: Canvas Element 🎨

### Task 10: Canvas Exploration

Create `canvas-test.html` with a canvas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas Test</title>
    <style>
        canvas {
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <h1>My Canvas</h1>
    <canvas id="myCanvas" width="400" height="300"></canvas>
</body>
</html>
```

- [ ] File created
- [ ] Canvas displays with a border
- [ ] Canvas is the correct size

**What do you see on the canvas?**
```
________________________________________________________________
```

*Note: Blank is correct! Canvas needs JavaScript to draw on it.*

---

## Part 10: HTML Comments 💬

### Task 11: Add Comments

Go back to your `game-info.html` and add:
- [ ] A comment at the top explaining what the page is about
- [ ] A comment before each major section
- [ ] A comment explaining what your button does

**Write an example comment**:
```html
________________________________________________________________
```

---

## Part 11: Practice Reading HTML 👀

### Task 12: Code Interpretation

What will this HTML display?

```html
<div>
    <h2>Score: <span id="score">0</span></h2>
    <ul>
        <li>High Score: <strong>1000</strong></li>
        <li>Lives: <span id="lives">3</span></li>
    </ul>
    <button id="reset">Reset Game</button>
</div>
```

**Draw or describe what you'll see**:
```
________________________________________________________________
________________________________________________________________
________________________________________________________________
________________________________________________________________
________________________________________________________________
```

---

## Part 12: Challenge Tasks 🌟

### Task 13: Build a Complete Game Menu (Challenge)

Create `game-menu.html` that includes:
- A main title with arcade game styling
- Four buttons: "Start Game", "Instructions", "High Scores", "Settings"
- A footer with "Press any button to begin"
- All buttons should have unique IDs
- Use a container div for layout

**Bonus**: Add comments explaining each section!

### Task 14: Create a Scoreboard (Challenge)

Create `scoreboard.html` with:
- A table structure (you may need to look up `<table>`, `<tr>`, `<td>`)
- Columns: Rank, Name, Score
- At least 5 rows of sample data
- A heading "Top Scores"

---

## 🎯 Self-Assessment

Rate your understanding (1-5, where 5 is "I totally get it!"):

- [ ] I can create a basic HTML document: ___/5
- [ ] I understand HTML elements and tags: ___/5
- [ ] I know how to use IDs and classes: ___/5
- [ ] I can create lists, links, and buttons: ___/5
- [ ] I understand the Pac-Man HTML structure: ___/5

---

## ✅ Completion Checklist

Before moving to Module 3, make sure you've:

- [ ] Created at least 3 HTML files
- [ ] Used headings, paragraphs, lists, and buttons
- [ ] Added IDs and classes to elements
- [ ] Analyzed the Pac-Man HTML structure
- [ ] Completed at least one challenge task

---

**Excellent work! 🎉 You're ready for [Module 3: CSS Styling Fundamentals](../Module_3_CSS/Lesson.md)!**

**Need help?** Check the [Answer Key](../../../Answer_Keys/Basic/Module_2_Answers.md).

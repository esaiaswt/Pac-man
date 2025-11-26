# Module 1 Worksheet: Introduction to Web Development

**Name**: _______________  
**Date**: _______________

---

## Part 1: Environment Setup ✅

Complete each task and check the box when done.

### Task 1: Install Your Tools
- [ ] Downloaded and installed VS Code (or another text editor)
- [ ] Confirmed you have a modern browser (Chrome, Firefox, or Edge)
- [ ] Created a "Projects" folder on your computer

**Note your Projects folder location**: ___________________________________

### Task 2: Open the Pac-Man Project
- [ ] Located the Pac-Man folder
- [ ] Opened the folder in VS Code
- [ ] Successfully ran `index.html` in a browser
- [ ] The game loads and you can see the start screen

**Screenshot checkpoint**: Take a screenshot of the game running and save it!

---

## Part 2: Browser DevTools Exploration 🔍

### Task 3: Open and Navigate DevTools

1. With the Pac-Man game open in your browser, press `F12` to open DevTools
2. Click through each of the following tabs and write what you observe:

**Elements Tab**:
```
What do you see?
_________________________________________________________________
_________________________________________________________________
```

**Console Tab**:
```
Are there any messages? (It's okay if there aren't!)
_________________________________________________________________
_________________________________________________________________
```

**Sources Tab**:
```
How many .js files do you see listed?
_________________________________________________________________
```

### Task 4: Console Experiments

In the Console tab, type each command and record what happens:

1. `console.log("Hello, Pac-Man!")`
   - **Result**: _____________________________________________________

2. `console.log(10 + 25)`
   - **Result**: _____________________________________________________

3. `console.log(5 * 7)`
   - **Result**: _____________________________________________________

4. `console.log("My favorite color is blue")`
   - **Result**: _____________________________________________________

5. **Try your own!** Type a message of your choice:
   - **Command**: ____________________________________________________
   - **Result**: _____________________________________________________

---

## Part 3: File Structure Exploration 📂

### Task 5: Identify Files

Open the Pac-Man folder and list all the files you see:

1. ___________________
2. ___________________
3. ___________________
4. ___________________
5. ___________________
6. ___________________
7. ___________________
8. ___________________

### Task 6: Match Files to Their Purpose

Draw a line connecting each file to its purpose:

```
index.html          •           • Sound effects and music
styles.css          •           • Pac-Man character logic
game.js             •           • Page structure and content
maze.js             •           • Main game engine
pacman.js           •           • Maze layout and rendering
ghost.js            •           • Visual styling
audio.js            •           • Ghost AI and behaviors
```

---

## Part 4: Understanding the Three Technologies 🏗️

### Task 7: Technology Roles

Fill in the blanks using: **HTML**, **CSS**, **JavaScript**

1. _____________ defines the structure and content of a web page
2. _____________ makes the page look attractive with colors and fonts
3. _____________ makes the page interactive and responsive to user actions
4. The file extension for _____________ is `.css`
5. To create a button, you would use _____________
6. To make that button do something when clicked, you would use _____________
7. To make that button glow with a neon effect, you would use _____________

### Task 8: Building a House Analogy

Complete the analogy:

| House Part | Web Technology | Reason |
|------------|----------------|--------|
| Walls and rooms | _____________ | Provides structure |
| Paint and decorations | _____________ | _________________ |
| Electricity | _____________ | _________________ |

---

## Part 5: Code Reading 👀

### Task 9: Spot the Technology

For each code snippet, identify if it's HTML, CSS, or JavaScript:

**Snippet A**:
```
h1 {
    color: yellow;
    font-size: 64px;
}
```
**This is**: _______________

**Snippet B**:
```
<button id="startButton">PRESS START</button>
```
**This is**: _______________

**Snippet C**:
```
function startGame() {
    score = 0;
    lives = 3;
}
```
**This is**: _______________

**Snippet D**:
```
.arcade-button {
    background: green;
    border-radius: 10px;
}
```
**This is**: _______________

**Snippet E**:
```
<div class="game-container">
    <canvas id="gameCanvas"></canvas>
</div>
```
**This is**: _______________

---

## Part 6: Observation and Exploration 🎮

### Task 10: Play and Observe

1. Play the Pac-Man game for 2-3 minutes
2. Answer these questions:

**What happens when you press the START button?**
```
_________________________________________________________________
_________________________________________________________________
```

**What keys do you use to control Pac-Man?**
```
_________________________________________________________________
```

**What happens when Pac-Man touches a ghost?**
```
_________________________________________________________________
_________________________________________________________________
```

**What happens when you eat a power pellet (big dot)?**
```
_________________________________________________________________
_________________________________________________________________
```

### Task 11: Inspect an Element

1. Open DevTools (F12)
2. Click the "Elements" tab
3. Click the "Select element" tool (arrow icon in top-left of DevTools)
4. Click on the "PAC-MAN" title in the game
5. Look at the highlighted code

**What HTML tag is used for the title?**
```
_________________________________________________________________
```

**What CSS property makes the text yellow?**
```
_________________________________________________________________
```

---

## Part 7: Reflection Questions 💭

### Task 12: Thinking Deeper

Answer in complete sentences:

1. **Why do you think the Pac-Man project is split into multiple files instead of putting all the code in one file?**
```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

2. **What's one thing that surprised you about how websites work?**
```
_________________________________________________________________
_________________________________________________________________
```

3. **What are you most excited to learn in this course?**
```
_________________________________________________________________
_________________________________________________________________
```

---

## Part 8: Challenge Tasks 🌟

### Task 13: DevTools Experiment (Optional)

1. Open the game in your browser
2. Open DevTools (F12) → Elements tab
3. Find the `<h1 class="game-title">PAC-MAN</h1>` element
4. In the Styles panel on the right, find `color: var(--pacman-yellow);`
5. Click on the color value and change it to `red`

**What happened?**
```
_________________________________________________________________
```

**Did this change the actual file, or just what you see right now?**
```
_________________________________________________________________
```

### Task 14: Console Creativity (Optional)

Use the console to calculate:

1. Your age in days (approximate): _____________
   - **Command used**: ________________________________________

2. How many hours you've been alive (approximate): _____________
   - **Command used**: ________________________________________

3. The number of seconds in a week: _____________
   - **Command used**: ________________________________________

---

## 🎯 Self-Assessment

Rate your understanding (1-5, where 5 is "I totally get it!"):

- [ ] I understand what HTML, CSS, and JavaScript do: ___/5
- [ ] I can open and use DevTools: ___/5
- [ ] I understand the Pac-Man project structure: ___/5
- [ ] I feel confident to move to Module 2: ___/5

---

## ✅ Completion Checklist

Before moving to Module 2, make sure you've:

- [ ] Completed all tasks in Parts 1-7
- [ ] Tried at least one challenge task
- [ ] Practiced using DevTools
- [ ] Can open the Pac-Man game and see it running
- [ ] Understand the role of HTML, CSS, and JavaScript

---

**Great job! 🎉 You're ready for [Module 2: HTML Basics](../../Basic/Module_2_HTML/Lesson.md)!**

**Need help?** Check the [Answer Key](../../../Answer_Keys/Basic/Module_1_Answers.md) if you're stuck.

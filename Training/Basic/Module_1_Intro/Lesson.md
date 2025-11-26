# Module 1: Introduction to Web Development

**Duration**: 2-3 hours  
**Level**: Basic  
**Prerequisites**: None

## 🎯 Learning Objectives

By the end of this module, you will:
- Understand what web development is and how websites work
- Know the roles of HTML, CSS, and JavaScript
- Set up your development environment
- Open and run the Pac-Man game
- Use browser developer tools

---

## 📖 Lesson Content

### Part 1: What is Web Development?

Web development is the process of creating websites and web applications that run in your browser. Every website you visit—YouTube, Google, Instagram—is built using web technologies.

**Key Concept**: A website is just a collection of files that your browser reads and displays!

### Part 2: The Three Core Technologies

Think of building a website like building a house:

#### 🏗️ HTML (HyperText Markup Language)
- **Role**: The structure and content (like the walls and rooms of a house)
- **What it does**: Defines what's on the page (text, images, buttons)
- **File extension**: `.html`

**Example**:
```html
<h1>Welcome to Pac-Man!</h1>
<p>This is a retro arcade game.</p>
<button>Start Game</button>
```

#### 🎨 CSS (Cascading Style Sheets)
- **Role**: The appearance and style (like paint, furniture, and decorations)
- **What it does**: Makes things look good (colors, fonts, layout, animations)
- **File extension**: `.css`

**Example**:
```css
h1 {
    color: yellow;
    font-size: 64px;
    text-shadow: 0 0 20px yellow;
}
```

#### ⚡ JavaScript
- **Role**: The behavior and interactivity (like electricity and plumbing)
- **What it does**: Makes things interactive and dynamic (clicking buttons, moving Pac-Man)
- **File extension**: `.js`

**Example**:
```javascript
function startGame() {
    console.log("Game starting!");
    score = 0;
}
```

### Part 3: How Websites Work

When you visit a website:

1. **You type a URL** (like `www.example.com`)
2. **Browser requests files** from a server
3. **Server sends HTML, CSS, and JavaScript files**
4. **Browser reads and displays** the files as a website

```
You → Browser → Server → Files → Browser displays website
```

### Part 4: The Pac-Man Project Structure

Let's look at how our Pac-Man game is organized:

```
Pac-man/
├── index.html          ← Main HTML file (structure)
├── styles.css          ← Styling (appearance)
├── game.js             ← Main game logic
├── maze.js             ← Maze layout
├── pacman.js           ← Pac-Man character
├── ghost.js            ← Ghost characters
└── audio.js            ← Sound effects
```

**Key Point**: Each file has a specific job. This keeps code organized and easier to understand!

### Part 5: Setting Up Your Development Environment

#### Step 1: Choose a Text Editor

A text editor is where you write code. We recommend **Visual Studio Code (VS Code)**:

- **Download**: https://code.visualstudio.com/
- **Why VS Code?**: 
  - Free and easy to use
  - Color-codes your code
  - Shows errors
  - Has helpful extensions

**Other options**: Sublime Text, Atom, or even Notepad (but VS Code is best!)

#### Step 2: Install a Modern Browser

You need a browser with good developer tools:
- **Chrome** (recommended)
- **Firefox**
- **Edge**

#### Step 3: Organize Your Files

Create a folder for your coding projects:
- Windows: `C:\Users\YourName\Projects\`
- Mac: `/Users/YourName/Projects/`

### Part 6: Running the Pac-Man Game

#### Method 1: Double-click `index.html`
1. Navigate to the Pac-Man folder
2. Double-click `index.html`
3. The game opens in your default browser!

#### Method 2: Open in Browser
1. Open your browser
2. Press `Ctrl+O` (Windows) or `Cmd+O` (Mac)
3. Navigate to `index.html` and open it

#### Method 3: Use VS Code (Best for Development)
1. Open VS Code
2. Open the Pac-Man folder
3. Right-click `index.html`
4. Select "Open with Live Server" (if you have the extension)

### Part 7: Browser Developer Tools

Developer Tools (DevTools) are your best friend! They let you inspect, debug, and experiment with code.

#### Opening DevTools:
- **Windows/Linux**: Press `F12` or `Ctrl+Shift+I`
- **Mac**: Press `Cmd+Option+I`

#### Key Panels:

1. **Elements Tab**: See and edit HTML and CSS in real-time
2. **Console Tab**: View messages and errors from JavaScript
3. **Sources Tab**: See all files and debug JavaScript
4. **Network Tab**: See what files are loading

**Try it now**: 
1. Open the Pac-Man game
2. Press F12 to open DevTools
3. Click the "Console" tab
4. Type: `console.log("Hello, world!")`
5. Press Enter

You just ran JavaScript code!

### Part 8: Understanding the Console

The console is where JavaScript can print messages. It's super useful for debugging!

```javascript
console.log("This is a message");
console.log(10 + 5);  // Shows: 15
console.log("Score:", score);  // Shows the score variable
```

**Vocabulary**:
- **console.log()**: Prints a message to the console
- **debugging**: Finding and fixing errors in code

---

## 🔑 Key Takeaways

1. Websites are built with **HTML** (structure), **CSS** (style), and **JavaScript** (interactivity)
2. You write code in a **text editor** and view it in a **browser**
3. **Developer Tools** help you inspect and debug websites
4. The Pac-Man project is organized into **multiple files**, each with a specific purpose
5. You can run a website by opening the HTML file in a browser

---

## 📝 Vocabulary

| Term | Definition |
|------|------------|
| **HTML** | Markup language for structuring web content |
| **CSS** | Stylesheet language for styling web pages |
| **JavaScript** | Programming language for web interactivity |
| **Browser** | Software that displays websites (Chrome, Firefox, etc.) |
| **Text Editor** | Software for writing code (VS Code, Sublime, etc.) |
| **DevTools** | Built-in browser tools for inspecting and debugging |
| **Console** | Panel in DevTools where JavaScript messages appear |
| **File Extension** | The letters after the dot in a filename (.html, .css, .js) |

---

## 🎓 Quick Quiz

Test your understanding:

1. What are the three core web technologies?
2. Which technology is responsible for styling a website?
3. What keyboard shortcut opens Developer Tools?
4. What does `console.log()` do?
5. Which file extension is used for JavaScript files?

**Answers**: (1) HTML, CSS, JavaScript (2) CSS (3) F12 or Ctrl+Shift+I (4) Prints messages to the console (5) .js

---

## 🚀 Next Steps

Now that you understand the basics, head over to the [Worksheet](Worksheet.md) to practice what you've learned!

After completing the worksheet, move on to [Module 2: HTML Basics](../../Basic/Module_2_HTML/Lesson.md).

---

*Remember: Every expert was once a beginner. Don't be afraid to experiment and make mistakes—that's how you learn!* 💪

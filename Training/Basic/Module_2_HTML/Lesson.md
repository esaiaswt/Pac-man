# Module 2: HTML Basics

**Duration**: 4-5 hours  
**Level**: Basic  
**Prerequisites**: Module 1 completed

## 🎯 Learning Objectives

By the end of this module, you will:
- Understand HTML document structure
- Use common HTML elements
- Create semantic HTML
- Build a simple web page from scratch
- Understand the Pac-Man game's HTML structure

---

## 📖 Lesson Content

### Part 1: What is HTML?

**HTML** (HyperText Markup Language) is the standard language for creating web pages. It uses **tags** to define different types of content.

**Key Concept**: HTML describes the structure and content, not the appearance!

### Part 2: HTML Syntax

HTML uses **tags** wrapped in angle brackets:

```html
<tagname>Content goes here</tagname>
```

**Anatomy of an HTML element**:
- `<tagname>` = Opening tag
- `Content` = What's displayed
- `</tagname>` = Closing tag

**Example**:
```html
<h1>Welcome to Pac-Man!</h1>
<p>This is a paragraph about the game.</p>
```

**Self-closing tags** don't have closing tags:
```html
<img src="pacman.png">
<br>
<hr>
```

### Part 3: Basic HTML Document Structure

Every HTML page follows this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

**Let's break it down**:

| Tag | Purpose |
|-----|---------|
| `<!DOCTYPE html>` | Tells the browser this is HTML5 |
| `<html>` | Root element containing all HTML |
| `<head>` | Metadata (not visible on page) |
| `<title>` | Page title (shows in browser tab) |
| `<body>` | Visible page content |
| `<meta>` | Additional information about the page |

### Part 4: Common HTML Elements

#### Text Elements

```html
<!-- Headings (h1 is biggest, h6 is smallest) -->
<h1>Level 1 Heading</h1>
<h2>Level 2 Heading</h2>
<h3>Level 3 Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Line break -->
This is line one<br>
This is line two

<!-- Horizontal rule -->
<hr>

<!-- Text formatting -->
<strong>Bold text</strong>
<em>Italic text</em>
<u>Underlined text</u>
```

#### Container Elements

```html
<!-- Generic container -->
<div class="container">
    <p>Content inside a div</p>
</div>

<!-- Inline container -->
<span class="highlight">This is highlighted</span>
```

**Difference between div and span**:
- `<div>`: Block element (starts on new line, takes full width)
- `<span>`: Inline element (stays on same line)

#### Lists

```html
<!-- Unordered list (bullets) -->
<ul>
    <li>Blinky (Red Ghost)</li>
    <li>Pinky (Pink Ghost)</li>
    <li>Inky (Cyan Ghost)</li>
    <li>Clyde (Orange Ghost)</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>Eat all pellets</li>
    <li>Avoid ghosts</li>
    <li>Get high score</li>
</ol>
```

#### Links and Images

```html
<!-- Link -->
<a href="https://www.example.com">Click here</a>

<!-- Image -->
<img src="pacman.png" alt="Pac-Man character">

<!-- Link with image -->
<a href="game.html">
    <img src="start-button.png" alt="Start Game">
</a>
```

#### Buttons

```html
<button>Click Me</button>
<button id="startButton" class="arcade-button">PRESS START</button>
```

#### Canvas

The `<canvas>` element is special—it creates a drawing surface for graphics:

```html
<canvas id="gameCanvas" width="672" height="864"></canvas>
```

### Part 5: HTML Attributes

Attributes provide additional information about elements:

```html
<tag attribute="value">Content</tag>
```

**Common attributes**:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `id` | Unique identifier | `<div id="gameScreen">` |
| `class` | Category/group | `<button class="arcade-button">` |
| `src` | Source file | `<img src="image.png">` |
| `href` | Link destination | `<a href="page.html">` |
| `alt` | Alternative text | `<img alt="Description">` |
| `style` | Inline CSS | `<p style="color: red;">` |

**Important**:
- `id` must be unique (only one element with that id)
- `class` can be reused (many elements can share a class)

### Part 6: Semantic HTML

Semantic HTML uses tags that describe their meaning:

```html
<!-- Non-semantic (doesn't describe content) -->
<div>
    <div>Menu</div>
    <div>Main content here</div>
    <div>Footer info</div>
</div>

<!-- Semantic (describes content) -->
<header>
    <nav>Menu</nav>
</header>
<main>
    <article>Main content here</article>
</main>
<footer>
    <p>Footer info</p>
</footer>
```

**Common semantic tags**:
- `<header>`: Top of page or section
- `<nav>`: Navigation menu
- `<main>`: Main content
- `<article>`: Self-contained content
- `<section>`: Themed grouping
- `<footer>`: Bottom of page or section
- `<aside>`: Sidebar content

**Why use semantic HTML?**
- Makes code easier to read
- Better for accessibility (screen readers)
- Helps search engines understand your page

### Part 7: Comments in HTML

Comments are notes in your code that browsers ignore:

```html
<!-- This is a comment -->
<!-- Comments can span
     multiple lines -->
     
<div>
    <!-- TODO: Add game instructions here -->
</div>
```

### Part 8: The Pac-Man HTML Structure

Let's examine `index.html` from the Pac-Man game:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAC-MAN | Retro Arcade Game</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="arcade-cabinet">
        <div class="screen-bezel">
            <div class="game-container">
                <!-- Start Screen -->
                <div id="startScreen" class="screen active">
                    <div class="title-container">
                        <h1 class="game-title">PAC-MAN</h1>
                        <p class="subtitle">RETRO ARCADE</p>
                    </div>
                    <div class="menu">
                        <button id="startButton" class="arcade-button pulse">PRESS START</button>
                    </div>
                </div>
                
                <!-- Game Screen -->
                <div id="gameScreen" class="screen">
                    <canvas id="gameCanvas"></canvas>
                </div>
                
                <!-- Game Over Screen -->
                <div id="gameOverScreen" class="screen">
                    <h1 class="game-over-title">GAME OVER</h1>
                    <button id="restartButton">PLAY AGAIN</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Scripts -->
    <script src="audio.js"></script>
    <script src="maze.js"></script>
    <script src="pacman.js"></script>
    <script src="ghost.js"></script>
    <script src="game.js"></script>
</body>
</html>
```

**Key observations**:
1. **External links**: Google Fonts for the retro font
2. **Multiple screens**: Start, Game, and Game Over (controlled by CSS/JS)
3. **IDs for JavaScript**: Elements like `startButton` are referenced in JavaScript
4. **Classes for styling**: Elements like `arcade-button` get styled by CSS
5. **Canvas for graphics**: The game is drawn on the canvas element
6. **Scripts at bottom**: JavaScript files loaded after HTML

### Part 9: Linking CSS and JavaScript

HTML connects to CSS and JavaScript using:

**CSS (in `<head>`)**:
```html
<link rel="stylesheet" href="styles.css">
```

**JavaScript (before `</body>`)**:
```html
<script src="game.js"></script>
```

**Why JavaScript at the bottom?**
- HTML loads first, so users see content faster
- JavaScript can access HTML elements that are already loaded

---

## 🔑 Key Takeaways

1. HTML uses **tags** to define content structure
2. Every HTML page has `<html>`, `<head>`, and `<body>`
3. **Attributes** like `id` and `class` provide additional information
4. **Semantic HTML** makes code more meaningful and accessible
5. The `<canvas>` element is perfect for game graphics
6. CSS links go in `<head>`, JavaScript links go before `</body>`

---

## 📝 Vocabulary

| Term | Definition |
|------|------------|
| **Element** | An HTML tag with its content: `<p>Text</p>` |
| **Tag** | The markup itself: `<p>` and `</p>` |
| **Attribute** | Extra info in a tag: `id="main"` |
| **Semantic** | Tags that describe their content's meaning |
| **Self-closing** | Tags without closing tags: `<img>`, `<br>` |
| **Block element** | Takes full width, starts on new line (div, p, h1) |
| **Inline element** | Stays on same line (span, a, strong) |
| **Canvas** | Drawing surface for graphics and games |

---

## 🎓 Quick Quiz

1. What does HTML stand for?
2. What's the difference between `<div>` and `<span>`?
3. Which attribute makes an element uniquely identifiable?
4. Why do we put JavaScript `<script>` tags at the bottom?
5. What does the `<canvas>` element do?

**Answers**: (1) HyperText Markup Language (2) div is block, span is inline (3) id (4) So HTML loads first (5) Creates a drawing surface for graphics

---

## 🚀 Next Steps

Head to the [Worksheet](Worksheet.md) to practice building with HTML!

After completing the worksheet, move on to [Module 3: CSS Styling Fundamentals](../Module_3_CSS/Lesson.md).

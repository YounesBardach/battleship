<p align="center">
  <img src="https://i.postimg.cc/Dy9BWQvM/Chat-GPT-Image-Aug-14-2025-03-51-35-AM.png" alt="Battleship Game Banner" width="900" />
</p>

<div align="center">

## Battleship Game (JavaScript)

A complete Battleship game implementation with comprehensive testing using Jest,
completed for The Odin Project.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=000)
![Topic: Game Development](https://img.shields.io/badge/Topic-Game%20Development-1f6feb)
![Testing: Jest](https://img.shields.io/badge/Testing-Jest-1f6feb)
![Status: Learning Project](https://img.shields.io/badge/Status-Learning%20Project-00b894)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Testing](#testing)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)

## About

This repository contains a complete Battleship game implementation in JavaScript with
comprehensive testing using Jest. The project focuses on:

- **Game Logic**: Complete Battleship game mechanics with ship placement and attack systems
- **Testing & Mocking**: Extensive Jest testing with proper mocking techniques
- **Modular Design**: Clean separation of concerns with factory functions
- **Interactive UI**: Web-based interface with ship placement and game visualization

Built as part of The Odin Project's Battleship lesson.

- Lesson:
  [The Odin Project — Project: Battleship](https://www.theodinproject.com/lessons/node-path-javascript-battleship)

## Features

### Core Game Components

- **Ship Factory**: Creates ships with customizable length, hit tracking, and sunk status
- **Gameboard Factory**: Manages ship placement, attack reception, and game state
- **Player Factory**: Human and computer player implementations with different strategies
- **Game Logic**: Complete turn-based gameplay with win condition detection

### Ship Management

- **Dynamic Placement**: Ships can be placed horizontally or vertically
- **Collision Detection**: Prevents overlapping ship placement
- **Hit Tracking**: Individual ship damage tracking
- **Sunk Detection**: Automatic detection when ships are destroyed

### Game Features

- **Two-Player Mode**: Human vs Human gameplay
- **Computer Opponent**: AI player with random move generation
- **Visual Interface**: Interactive web-based game board
- **Game State Management**: Tracks turns, attacks, and win conditions

### Testing Features

- **Comprehensive Test Suite**: Full coverage of game logic
- **Mock Testing**: Proper isolation of components for testing
- **Factory Function Testing**: Tests for all factory functions
- **Game State Testing**: Validation of game progression and win conditions

## Requirements

- **Node.js** 18+ (for development and testing)
- **Modern browser** (for gameplay)

## Quick start

Development setup:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build for production
npm run build

# Watch mode for development
npm run watch
```

Play the game:

```bash
# Open in your default browser
xdg-open dist/index.html   # Linux
open dist/index.html       # macOS
start dist/index.html      # Windows
```

## Testing

The project includes comprehensive Jest testing with proper mocking:

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- gameboard.test.js
```

### Test Coverage

- **Ship Tests**: Factory function, hit mechanics, sunk detection
- **Gameboard Tests**: Ship placement, attack reception, game state
- **Player Tests**: Human and computer player functionality
- **Integration Tests**: Full game flow and win conditions

### Example Test

```js
import gameboardMaker from "./gameboard";

test("create a ship, attach it to gameboard and give it coordinates and length", () => {
  expect(gameboardMaker().place(1, 2, 4)).toMatchObject([
    { length: 4, x1: 1, y1: 2 },
  ]);
});

test("accept coordinates and return ship if touched", () => {
  const testGameboard = gameboardMaker();
  testGameboard.place(1, 2, 4);
  
  expect(testGameboard.receiveAttack(1, 2)).toMatchObject({
    length: 4,
    x1: 1,
    y1: 2,
    hits: 1,
  });
});
```

## Tech stack

- **Language:** Vanilla JavaScript (ES6+)
- **Testing:** Jest with jsdom environment
- **Build Tool:** Webpack with Babel
- **Styling:** CSS with Sanitize.css
- **Development:** ESLint, Prettier
- **Game Logic:** Factory functions with modular design

## Project structure

```
battleship/
├── src/
│   ├── index.html          # Main HTML file
│   ├── index.js            # Entry point with imports
│   ├── gameboard.js        # Gameboard factory and logic
│   ├── gameboard.test.js   # Gameboard tests
│   ├── ship.js             # Ship factory and mechanics
│   ├── ship.test.js        # Ship tests
│   ├── player.js           # Player and computer factories
│   ├── player.test.js      # Player tests
│   ├── populate.js         # UI population and game logic
│   ├── style.css           # Game styling
│   └── tank.svg            # Game assets
├── dist/                   # Built files (generated)
├── package.json            # Dependencies and scripts
├── webpack.config.js       # Webpack configuration
├── babel.config.js         # Babel configuration
└── README.md               # This file
```



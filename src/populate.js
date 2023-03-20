import gameboardMaker from "./gameboard";
import { playerMaker, computerMaker } from "./player";

const start = document.querySelector(".start-button");
const reset = document.querySelector(".reset-button");
const opponent = document.querySelector(".opponent-button");
const modal = document.querySelector(".modal");
const shipPlacement = document.querySelector(".ship-placement");
const selectionContainerOne = document.querySelector(".player-one-container");
const selectionContainerTwo = document.querySelector(".player-two-container");
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
const indicator = document.querySelector(".indicator");
const playerTwoTitle = document.querySelector(".player-two");
const hideButtonOne = document.querySelector(".hide-button-one");
const hideButtonTwo = document.querySelector(".hide-button-two");
const createdModalOne = document.createElement('div')
const createdModalTwo = document.createElement('div')
createdModalOne.classList.add('modal-two')
createdModalTwo.classList.add('modal-three')

let GameboardOne;
let GameboardTwo;
let playerOne;
let playerTwo;
let counterOne = 5;
let counterTwo = 5;

const computerShipsRandomizer = () => {
  let duplicateX = [];
  let duplicateY = [];
  const length = [1, 2, 3, 4, 5];
  for (let i = 1, j = 5; i <= j; i += 1) {
    const Pos =
      GameboardTwo.positions[
        Math.floor(Math.random() * GameboardTwo.positions.length)
      ];
    const direction = [`h`, `v`];
    const randomPositionX = Pos[0];
    const randomPositionY = Pos[1];
    const randomLength = length[Math.floor(Math.random() * length.length)];
    const randomDirection =
      direction[Math.floor(Math.random() * direction.length)];

    GameboardTwo.place(
      randomPositionX,
      randomPositionY,
      randomLength,
      randomDirection
    );
    const lastShip = GameboardTwo.ships[GameboardTwo.ships.length - 1];
    if (duplicateX.length !== 0 && duplicateY.length !== 0) {
      const test1 = duplicateX.some(
        (value) =>
          value === lastShip.x1 ||
          value === lastShip.x2 ||
          value === lastShip.x3 ||
          value === lastShip.x4 ||
          value === lastShip.x5
      );
      const test2 = duplicateY.some(
        (value) =>
          value === lastShip.y1 ||
          value === lastShip.y2 ||
          value === lastShip.y3 ||
          value === lastShip.y4 ||
          value === lastShip.y5
      );
      if (test1 && test2) {
        GameboardTwo.remove();
        j += 1;
      } else {
        const lengthToRemove = length.findIndex(
          (removableLength) => removableLength === randomLength
        );
        length.splice(lengthToRemove, 1);

        duplicateX.push(
          lastShip.x1,
          lastShip.x2,
          lastShip.x3,
          lastShip.x4,
          lastShip.x5
        );
        duplicateY.push(
          lastShip.y1,
          lastShip.y2,
          lastShip.y3,
          lastShip.y4,
          lastShip.y5
        );
        duplicateX = duplicateX.filter((value) => value !== undefined);
        duplicateY = duplicateY.filter((value) => value !== undefined);
      }
    } else {
      const lengthToRemove = length.findIndex(
        (removableLength) => removableLength === randomLength
      );
      length.splice(lengthToRemove, 1);

      duplicateX.push(
        lastShip.x1,
        lastShip.x2,
        lastShip.x3,
        lastShip.x4,
        lastShip.x5
      );
      duplicateY.push(
        lastShip.y1,
        lastShip.y2,
        lastShip.y3,
        lastShip.y4,
        lastShip.y5
      );
      duplicateX = duplicateX.filter((value) => value !== undefined);
      duplicateY = duplicateY.filter((value) => value !== undefined);
    }
  }
};

const game = (div) => {
  div.addEventListener("click", (e) => {
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);
    if (containerOne.contains(e.target)) {
      containerOne.classList.remove("red-border");
      containerTwo.classList.remove("disabled");
      containerOne.classList.add("disabled");
      containerTwo.classList.add("red-border");
      if (playerTwo.identity === `player`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        playerTwo.play(GameboardOne, Number(x), Number(y));
        if (
          GameboardOne.touch.some(
            (move) => move[0] === Number(x) && move[1] === Number(y)
          )
        ) {
          indicator.children[0].textContent = `Player 2 hit Player 1!`;
          e.target.classList.add("hit-boat", "disabled");
        } else {
          indicator.children[0].textContent = `Player 2 missed!`;
          e.target.classList.add("miss-boat", "disabled");
        }
        if (GameboardOne.gameOver() === `Game Over`) {
          indicator.children[0].textContent = `Player 2 won!`;
          containerOne.classList.add("disabled");
          containerTwo.classList.add("disabled");
          return;
        }
      }
      if (playerTwo.identity === `computer`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        const lastMove = GameboardOne.plays[GameboardOne.plays.length - 1];
        if (
          GameboardOne.touch.some(
            (move) => move[0] === lastMove[0] && move[1] === lastMove[1]
          )
        ) {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer hit Player 1!`;
          }, 200);

          e.target.classList.add("hit-boat", "disabled");
        } else {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer missed!`;
          }, 200);
          e.target.classList.add("miss-boat", "disabled");
        }
        if (GameboardOne.gameOver() === `Game Over`) {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer won!`;
          }, 200);
          containerOne.classList.add("disabled");
          containerTwo.classList.add("disabled");
          return;
        }
      }
    }
    if (containerTwo.contains(e.target)) {
      containerOne.classList.add("red-border");
      containerOne.classList.remove("disabled");
      containerTwo.classList.remove("red-border");
      containerTwo.classList.add("disabled");

      playerOne.play(GameboardTwo, Number(x), Number(y));
      if (
        GameboardTwo.touch.some(
          (move) => move[0] === Number(x) && move[1] === Number(y)
        )
      ) {
        if (playerTwo.identity === `computer`) {
          indicator.children[0].textContent = `Player 1 hit Computer!`;
        } else {
          indicator.children[0].textContent = `Player 1 hit Player 2!`;
        }
        e.target.classList.add("hit-boat", "disabled");
      } else {
        indicator.children[0].textContent = `Player 1 missed!`;
        e.target.classList.add("miss-boat", "disabled");
      }
      if (GameboardTwo.gameOver() === `Game Over`) {
        indicator.children[0].textContent = `Player 1 won!`;
        containerOne.classList.add("disabled");
        containerTwo.classList.add("disabled");
        return;
      }
      if (playerTwo.identity === `computer`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        playerTwo.play(GameboardOne);
        const lastMove = GameboardOne.plays[GameboardOne.plays.length - 1];
        const squareToClick = containerOne.querySelector(
          `.square${lastMove[0]}${lastMove[1]}`
        );
        setTimeout(() => {
          squareToClick.click();
        }, 200);
      }
    }
  });
};

const colorShips = (gameboard, container) => {
  gameboard.ships.map((ship) => {
    const squareToColorOne = container.querySelector(
      `.square${ship.x1}${ship.y1}`
    );
    squareToColorOne.classList.add("ship-square");
    if (ship.direction === `h`) {
      if (ship.x2 !== undefined) {
        const squareToColorTwo = container.querySelector(
          `.square${ship.x2}${ship.y1}`
        );
        squareToColorTwo.classList.add("ship-square");
      }
      if (ship.x3 !== undefined) {
        const squareToColorThree = container.querySelector(
          `.square${ship.x3}${ship.y1}`
        );
        squareToColorThree.classList.add("ship-square");
      }
      if (ship.x4 !== undefined) {
        const squareToColorFour = container.querySelector(
          `.square${ship.x4}${ship.y1}`
        );
        squareToColorFour.classList.add("ship-square");
      }
      if (ship.x5 !== undefined) {
        const squareToColorFive = container.querySelector(
          `.square${ship.x5}${ship.y1}`
        );
        squareToColorFive.classList.add("ship-square");
      }
    } else {
      if (ship.y2 !== undefined) {
        const squareToColorTwo = container.querySelector(
          `.square${ship.x1}${ship.y2}`
        );
        squareToColorTwo.classList.add("ship-square");
      }
      if (ship.y3 !== undefined) {
        const squareToColorThree = container.querySelector(
          `.square${ship.x1}${ship.y3}`
        );
        squareToColorThree.classList.add("ship-square");
      }
      if (ship.y4 !== undefined) {
        const squareToColorFour = container.querySelector(
          `.square${ship.x1}${ship.y4}`
        );
        squareToColorFour.classList.add("ship-square");
      }
      if (ship.y5 !== undefined) {
        const squareToColorFive = container.querySelector(
          `.square${ship.x1}${ship.y5}`
        );
        squareToColorFive.classList.add("ship-square");
      }
    }
    return ship;
  });
};

const selection = (div, container) => {
  div.addEventListener("click", (e) => {
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);
    if (container === selectionContainerOne) {
      if (counterOne === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardOne.place(Number(x), Number(y), counterOne, `h`);
      colorShips(GameboardOne, selectionContainerOne);
      counterOne -= 1;
    }
    if (container === selectionContainerTwo) {
      if (counterTwo === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardTwo.place(Number(x), Number(y), counterTwo, `h`);
      colorShips(GameboardTwo, selectionContainerTwo);
      counterTwo -= 1;
    }
  });
  div.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);

    if (container === selectionContainerOne) {
      if (counterOne === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardOne.place(Number(x), Number(y), counterOne, `v`);
      colorShips(GameboardOne, selectionContainerOne);
      counterOne -= 1;
    }
    if (container === selectionContainerTwo) {
      if (counterTwo === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardTwo.place(Number(x), Number(y), counterTwo, `v`);
      colorShips(GameboardTwo, selectionContainerTwo);
      counterTwo -= 1;
    }
  });
};

const populateSquare = (container, gameboard) => {
  for (let i = 0; i < 10; i += 1) {
    const div = document.createElement("div");
    div.classList.add(`row${i}`, `row`);
    container.appendChild(div);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (container === containerOne || container === containerTwo) {
        gameboard.positions.push([j, i]);
        const div = document.createElement("div");
        div.classList.add(`square${j}${i}`, `square`);
        game(div);
        const row = container.querySelector(`.row${i}`);
        row.appendChild(div);
      } else {
        const div = document.createElement("div");
        div.classList.add(`square${j}${i}`, `square`);
        selection(div, container);
        const row = container.querySelector(`.row${i}`);
        row.appendChild(div);
      }
    }
  }
};

const chooseOpponent = () => {
  if (opponent.textContent === `Player`) {
    opponent.textContent = `Computer`;
    playerTwoTitle.textContent = `Player 2`;
    playerTwo = playerMaker();
  } else {
    opponent.textContent = `Player`;
    playerTwoTitle.textContent = `Computer`;
    playerTwo = computerMaker();
  }
};

const reseter = () => {
  counterOne = 5;
  counterTwo = 5;
  containerOne.innerHTML = "";
  containerTwo.innerHTML = "";
  selectionContainerOne.innerHTML = "";
  selectionContainerTwo.innerHTML = "";
  selectionContainerOne.appendChild(createdModalOne)
  selectionContainerTwo.appendChild(createdModalTwo)
  selectionContainerOne.classList.remove("disabled");
  selectionContainerTwo.classList.remove("disabled");
  containerOne.classList.remove("red-border", "disabled");
  containerTwo.classList.remove("red-border", "disabled");
};

const initiateGame = () => {
  reseter();
  GameboardOne = gameboardMaker();
  GameboardTwo = gameboardMaker();
  playerOne = playerMaker();
  populateSquare(containerOne, GameboardOne);
  populateSquare(containerTwo, GameboardTwo);
  if (playerTwoTitle.textContent === `Player 2`) {
    playerTwo = playerMaker();
  } else {
    playerTwo = computerMaker();
  }
  modal.classList.add("scale-visible");
  shipPlacement.classList.add("visible");
  if (playerTwo.identity === `player`) {
    populateSquare(selectionContainerOne);
    populateSquare(selectionContainerTwo);
  }
  if (playerTwo.identity === `computer`) {
    populateSquare(selectionContainerOne);
    computerShipsRandomizer();
  }
};

start.addEventListener("click", () => {
  initiateGame();
  reset.classList.remove("disabled");
  start.classList.add("disabled");
});

reset.addEventListener("click", () => {
  initiateGame();
});

opponent.addEventListener("click", () => {
  containerOne.classList.add("disabled");
  containerTwo.classList.add("disabled");
  chooseOpponent();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("scale-visible");
  }
});

hideButtonOne.addEventListener("click", () => {
  if (hideButtonOne.textContent === `Hide`) {
    createdModalOne.classList.add("scale-visible");
    hideButtonOne.textContent = `Show`;
  } else {
    createdModalOne.classList.remove("scale-visible");
    hideButtonOne.textContent = `Hide`;
  }
});

hideButtonTwo.addEventListener("click", () => {
  if (hideButtonTwo.textContent === `Hide`) {
    createdModalTwo.classList.add("scale-visible");
    hideButtonTwo.textContent = `Show`;
  } else {
    createdModalTwo.classList.remove("scale-visible");
    hideButtonTwo.textContent = `Hide`;
  }
});

export default { populateSquare };

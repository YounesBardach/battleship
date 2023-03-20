import shipMaker from "./ship";

const gameboardMaker = () => {
  const gameboard = {};
  gameboard.ships = [];
  gameboard.plays = [];
  gameboard.positions = [];
  gameboard.touch = [];
  gameboard.place = (x, y, length, direction, hits = 0, sunk = false) => {
    const ship = shipMaker(length, hits, sunk);
    ship.x1 = x;
    ship.y1 = y;
    ship.direction = direction;
    if (direction === `v`) {
      if (
        (ship.y1 === 9 && length > 1) ||
        (ship.y1 === 8 && length > 2) ||
        (ship.y1 === 7 && length > 3) ||
        (ship.y1 === 6 && length > 4)
      ) {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`y${i}`] = y - j;
        }
      } else {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`y${i}`] = y + j;
        }
      }
    }
    if (direction === `h`) {
      if (
        (ship.x1 === 9 && length > 1) ||
        (ship.x1 === 8 && length > 2) ||
        (ship.x1 === 7 && length > 3) ||
        (ship.x1 === 6 && length > 4)
      ) {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`x${i}`] = x - j;
        }
      } else {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`x${i}`] = x + j;
        }
      }
    }
    gameboard.ships.push(ship);
    return gameboard.ships;
  };
  gameboard.remove = () => {
    gameboard.ships.pop();
  };
  gameboard.receiveAttack = (x, y, identity) => {
    let touch = null;
    if (identity === `computer`) {
      const restrictMove = gameboard.positions.findIndex(
        (position) => position[0] === x && position[1] === y
      );
      gameboard.positions.splice(restrictMove, 1);
    }
    gameboard.ships.map((ship) => {
      if (
        (ship.x1 === x ||
          ship.x2 === x ||
          ship.x3 === x ||
          ship.x4 === x ||
          ship.x5 === x) &&
        (ship.y1 === y ||
          ship.y2 === y ||
          ship.y3 === y ||
          ship.y4 === y ||
          ship.y5 === y)
      ) {
        ship.hit();
        if (ship.isSunk() === 0) {
          ship.sunk = true;
        }
        gameboard.touch.push([x, y]);
        touch = ship;
      }
      return touch;
    });
    gameboard.plays.push([x, y]);
    return touch;
  };
  gameboard.gameOver = () => {
    const gameState = gameboard.ships.filter((ship) => ship.sunk === false);
    if (gameState.length === 0) {
      return `Game Over`;
    }
    return `Game On`;
  };
  return gameboard;
};

export default gameboardMaker;

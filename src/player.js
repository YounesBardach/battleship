export const playerMaker = () => {
  const player = {};
  player.identity = `player`;
  player.play = (gameboard, x, y) => {
    // changed later
    gameboard.receiveAttack(x, y, player.identity);
    return gameboard.plays.some((play) => play[0] === x && play[1] === y);
  };
  return player;
};

export const computerMaker = () => {
  const player = {};
  player.identity = `computer`;
  player.play = (gameboard) => {
    let Pos
    if (player.testing) {
      Pos = [1, 1];
    } else {
      Pos = gameboard.positions[Math.floor(Math.random() * gameboard.positions.length)];
    }
    if (Pos === undefined) {return false}
    gameboard.receiveAttack(Pos[0], Pos[1], player.identity);
    return gameboard.plays.some(
      (play) => play[0] === Pos[0] && play[1] === Pos[1]
    );
  };
  return player;
};

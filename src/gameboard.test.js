import gameboardMaker from "./gameboard";

test("return a gameboard object with ships", () => {
  expect(gameboardMaker()).toMatchObject({ ships: [] });
});

test("create a ship, attach it to gameboard and give it coordinates and length", () => {
  expect(gameboardMaker().place(1, 2, 4)).toMatchObject([
    { length: 4, x1: 1, y1: 2 },
  ]);
});

const testGameboard = gameboardMaker();
testGameboard.place(1, 2, 4);

test("accept coordinates and return null or ship if touched", () => {
  expect(testGameboard.receiveAttack(1, 2)).toMatchObject({
    length: 4,
    x1: 1,
    y1: 2,
    hits: 1,
  });
});

test("accept coordinates and return null or ship if touched", () => {
  expect(testGameboard.receiveAttack(5, 2)).toEqual(null);
});

test("return game over or game on depending on how many ships has been sunk", () => {
  expect(testGameboard.gameOver()).toEqual(`Game On`);
});


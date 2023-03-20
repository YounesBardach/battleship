import { playerMaker, computerMaker } from "./player";
import gameboardMaker from "./gameboard";

const testGameboardOne = gameboardMaker();
const testGameboardTwo = gameboardMaker();
const testPlayer = playerMaker();
const computerTestPlayerOne = computerMaker();
const computerTestPlayerTwo = computerMaker();
computerTestPlayerOne.testing = true;
testGameboardOne.positions.push([1, 1]);

test("return a player object with xmoves and ymoves properties", () => {
  expect(playerMaker()).toMatchObject({
    identity: `player`,
  });
});

test("return a computerplayer object with xmoves and ymoves properties", () => {
  expect(computerMaker()).toMatchObject({
    identity: `computer`,
  });
});

test("player being able to make a play on gameboard", () => {
  expect(testPlayer.play(testGameboardOne, 1, 2)).toEqual(true);
});

test("computer being able to make a play on gameboard", () => {
  expect(computerTestPlayerOne.play(testGameboardOne)).toEqual(true);
});

test("computer being able to stop playing", () => {
  expect(computerTestPlayerTwo.play(testGameboardTwo)).toEqual(false);
});

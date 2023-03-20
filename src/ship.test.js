import shipMaker from "./ship";

test("return object with length, hits and sink properties", () => {
  expect(shipMaker(1, 2, 3)).toMatchObject({ length: 1, hits: 2, sunk: 3 });
});

test("increase hits property by 1", () => {
  expect(shipMaker(1, 2, 3).hit()).toEqual(3);
});

test("substract hits from length", () => {
  expect(shipMaker(3, 2, 3).isSunk()).toEqual(1);
});

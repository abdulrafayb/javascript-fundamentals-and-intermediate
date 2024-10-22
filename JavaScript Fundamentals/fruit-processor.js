cutIntoPieces = (fruit) => fruit * 4;

juiceMaker = function (apples, oranges) {
  const cutApple = cutIntoPieces(apples);
  const cutOrange = cutIntoPieces(oranges);
  const juice = `Juice With ${cutApple} Apple Pieces, And ${cutOrange} Orange Slices`;
  return juice;
};

console.log(juiceMaker(4, 6));

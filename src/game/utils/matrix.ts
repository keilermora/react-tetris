import TetriminoInPlay from '../interfaces/tetriminoInPlay';

export const getMatrixGrid = () => {
  const rows = 18;
  const cols = 10;
  const grid: number[][] = [];

  for (let row = 0; row < rows; row++) {
    grid.push([]);
    for (let col = 0; col < cols; col++) {
      grid[row].push(0);
    }
  }

  return grid;
};

export const addTetriminoToMatrixGrid = (
  tetriminoInPlay: TetriminoInPlay,
  matrixGrid: number[][]
) => {
  const shape = tetriminoInPlay.tetrimino.shapes[tetriminoInPlay.rotation];
  const newMatrixGrid = [...matrixGrid];

  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        newMatrixGrid[row + tetriminoInPlay.y][col + tetriminoInPlay.x] =
          tetriminoInPlay.tetrimino.colorNumber;
      }
    }
  }
  return newMatrixGrid;
};

export const clearHorizontalLines = (matrixGrid: number[][]) => {
  const newMatrixGrid = [...matrixGrid];

  for (let row = 0; row < matrixGrid.length; row++) {
    if (newMatrixGrid[row].indexOf(0) === -1) {
      // Remove the row and add a new empty one at the top
      newMatrixGrid.splice(row, 1);
      newMatrixGrid.unshift(Array(10).fill(0));
    }
  }

  return newMatrixGrid;
};

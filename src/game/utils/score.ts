import { ScorePoints } from '../constants/scorePoints';

export const getScorePoints = (matrixGrid: number[][], level: number) => {
  const points = [
    0,
    ScorePoints.SINGLE,
    ScorePoints.DOUBLE,
    ScorePoints.TRIPLE,
    ScorePoints.TETRIS,
  ];

  let completedRows = 0;

  for (let row = 0; row < matrixGrid.length; row++) {
    // No empty cells means it can't find a 0, so the row must be complete!
    if (matrixGrid[row].indexOf(0) === -1) {
      completedRows++;
    }
  }

  return points[completedRows] * level;
};

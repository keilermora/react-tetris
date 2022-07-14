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

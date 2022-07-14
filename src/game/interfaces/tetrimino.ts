import { TetriminoNames } from '../constants/tetriminoNames';

interface Tetrimino {
  name: TetriminoNames;
  colorNumber: number;
  shapes: number[][][];
}

export default Tetrimino;

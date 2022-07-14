import Tetrimino from './tetrimino';

interface TetriminoInPlay {
  tetrimino: Tetrimino;
  rotation: number;
  x: number;
  y: number;
}

export default TetriminoInPlay;

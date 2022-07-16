import blockOgg from '../../assets/sounds/block.ogg';
import moveOgg from '../../assets/sounds/move.ogg';
import placeOgg from '../../assets/sounds/place.ogg';
import rotateOgg from '../../assets/sounds/rotate.ogg';
import pauseOgg from '../../assets/sounds/pause.ogg';
import resumeOgg from '../../assets/sounds/resume.ogg';
import gameOverOgg from '../../assets/sounds/gameOver.ogg';
import scoreOgg from '../../assets/sounds/score.ogg';

import tetrisThemeMp3 from '../../assets/sounds/tetrisTheme.mp3';

const blockSound = new Audio(blockOgg);
blockSound.volume = 0.1;

const moveSound = new Audio(moveOgg);
moveSound.volume = 0.1;

const placeSound = new Audio(placeOgg);
placeSound.volume = 0.1;

const rotateSound = new Audio(rotateOgg);
rotateSound.volume = 0.1;

const pauseSound = new Audio(pauseOgg);
pauseSound.volume = 0.1;

const resumeSound = new Audio(resumeOgg);
resumeSound.volume = 0.1;

const gameOverSound = new Audio(gameOverOgg);
gameOverSound.volume = 0.1;

const scoreSound = new Audio(scoreOgg);
scoreSound.volume = 0.1;

const tetrisThemeMusic = new Audio(tetrisThemeMp3);
tetrisThemeMusic.volume = 0.2;

export {
  blockSound,
  moveSound,
  placeSound,
  rotateSound,
  pauseSound,
  resumeSound,
  gameOverSound,
  scoreSound,
  tetrisThemeMusic,
};

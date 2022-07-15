export const getFallSpeed = (level: number) => {
  return (0.8 - (level - 1) * 0.007) ** (level - 1) * 1000;
};

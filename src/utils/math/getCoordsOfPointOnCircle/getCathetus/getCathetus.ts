import { degreesToRadian } from './degreesToRadian';

export const getCathetus = (alphaAngle: number, hypotenuse: number) => {
  const a = hypotenuse * Math.cos(degreesToRadian(alphaAngle));
  const b = hypotenuse * Math.sin(degreesToRadian(alphaAngle));

  return { a, b };
};

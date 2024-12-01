import { getCathetus } from './getCathetus';

/**
 *
 * @param alphaAngle угол в градусах
 * @param radius радиус окружности
 * @returns координаты точки на окружности с соответствующим углом
 */
export const getCoordsOfPointOnCircle = (
  alphaAngle: number,
  radius: number,
) => {
  const { a, b } = getCathetus(alphaAngle, radius);

  return { x: radius + b, y: radius + a };
};

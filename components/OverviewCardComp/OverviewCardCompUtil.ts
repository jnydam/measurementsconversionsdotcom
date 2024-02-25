import { TriangleType } from '@/model/OverviewCardComp';

export const determineTrianglePath = (type: TriangleType) => {
  if (type === 'darkblue') {
    return '/app/darkbluetriangle.svg';
  }

  if (type === 'mediumblue') {
    return '/app/middlebluetriangle.svg';
  }

  if (type === 'lightblue') {
    return '/app/lightbluetriangle.svg';
  }

  return '/app/darkbluetriangle.svg';
};

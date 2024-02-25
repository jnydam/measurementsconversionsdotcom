export const determineBodyPageTitle = (pathContent: string) => {
  if (pathContent.includes('/temperature')) {
    return 'Temperature';
  }

  if (pathContent.includes('/speed')) {
    return 'Speed';
  }

  if (pathContent.includes('/distance')) {
    return 'Distance';
  }

  if (pathContent.includes('/cooking')) {
    return 'Cooking';
  }

  if (pathContent.includes('/time')) {
    return 'Time';
  }

  if (pathContent.includes('/')) {
    return 'Measurements and Conversions';
  }
};

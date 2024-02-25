// Fahrenheit and Celsius Conversions

export const convertFahrenheitToCelsius = (fahrenheitValue: number) => {
  return parseFloat(((5 / 9) * (fahrenheitValue - 32)).toFixed(2));
};

export const convertCelsiusToFahrenheit = (celsiusValue: number) => {
  return parseFloat(((9 / 5) * celsiusValue + 32).toFixed(2));
};

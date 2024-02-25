// Kelvin and Fahrenheit Conversions

import {
  convertFahrenheitToCelsius,
  convertCelsiusToFahrenheit,
} from './fahrenheitcelsius';
import {
  convertCelsiusToKelvin,
  convertKelvinToCelsius,
} from './kelvincelsius';

export const convertKelvinToFahrenheit = (kelvinValue: number) => {
  return convertCelsiusToFahrenheit(convertKelvinToCelsius(kelvinValue));
};

export const convertFahrenheitToKelvin = (fahrenheitValue: number) => {
  return convertCelsiusToKelvin(convertFahrenheitToCelsius(fahrenheitValue));
};

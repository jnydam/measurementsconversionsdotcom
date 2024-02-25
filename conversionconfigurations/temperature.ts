import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from '@/conversionalgos/temperature/fahrenheitcelsius';
import { sameAlgo } from '@/conversionalgos/samesamealgos';
import {
  convertCelsiusToKelvin,
  convertKelvinToCelsius,
} from '@/conversionalgos/temperature/kelvincelsius';
import {
  ConversionOverlayConfigurationType,
  AlgoFromToMappingType,
} from '@/models/Params';
import {
  convertFahrenheitToKelvin,
  convertKelvinToFahrenheit,
} from '@/conversionalgos/temperature/kelvinfahrenheit';

const FAHRENHEIT = 'Fahrenheit';
const CELSIUS = 'Celsius';
const KELVIN = 'Kelvin';

const temperatureValueList = [FAHRENHEIT, CELSIUS, KELVIN];

const temperatureAlgoMappings: AlgoFromToMappingType = [
  // Fahrenheit - Celsius Conversions

  {
    from: FAHRENHEIT,
    to: CELSIUS,
    algo: convertFahrenheitToCelsius,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${FAHRENHEIT}`,
    toDescriptionText: `degrees ${CELSIUS}`,
  },
  {
    from: CELSIUS,
    to: FAHRENHEIT,
    algo: convertCelsiusToFahrenheit,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${CELSIUS}`,
    toDescriptionText: `degrees ${FAHRENHEIT}`,
  },

  // Kelvin - Celsius Conversions

  {
    from: CELSIUS,
    to: KELVIN,
    algo: convertCelsiusToKelvin,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${CELSIUS}`,
    toDescriptionText: `${KELVIN}`,
  },
  {
    from: KELVIN,
    to: CELSIUS,
    algo: convertKelvinToCelsius,
    descriptionSameAsLabel: false,
    fromDescriptionText: `${KELVIN}`,
    toDescriptionText: `degrees ${CELSIUS}`,
  },

  // Kelvin - Fahrenheit Conversions

  {
    from: KELVIN,
    to: FAHRENHEIT,
    algo: convertKelvinToFahrenheit,
    descriptionSameAsLabel: false,
    fromDescriptionText: `${KELVIN}`,
    toDescriptionText: `degrees ${FAHRENHEIT}`,
  },
  {
    from: FAHRENHEIT,
    to: KELVIN,
    algo: convertFahrenheitToKelvin,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${FAHRENHEIT}`,
    toDescriptionText: `${KELVIN}`,
  },

  // SAME Algo Conversions

  {
    from: FAHRENHEIT,
    to: FAHRENHEIT,
    algo: sameAlgo,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${FAHRENHEIT}`,
    toDescriptionText: `degrees ${FAHRENHEIT}`,
  },
  {
    from: CELSIUS,
    to: CELSIUS,
    algo: sameAlgo,
    descriptionSameAsLabel: false,
    fromDescriptionText: `degrees ${CELSIUS}`,
    toDescriptionText: `degrees ${CELSIUS}`,
  },
  {
    from: KELVIN,
    to: KELVIN,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },
];

export const temperaturePageOverlayConfig: ConversionOverlayConfigurationType =
  {
    availableFroms: temperatureValueList,
    defaultFrom: FAHRENHEIT,
    defaultTo: CELSIUS,
    availableTos: temperatureValueList,
    algoFromToMapping: temperatureAlgoMappings,
  };

import {
  convertFeetToInches,
  convertInchesToFeet,
} from '@/conversionalgos/distance/feetinch';
import {
  convertFeetToMeters,
  convertMetersToFeet,
} from '@/conversionalgos/distance/metersfeet';
import {
  convertInchesToMeters,
  convertMetersToInches,
} from '@/conversionalgos/distance/metersinch';
import { sameAlgo } from '@/conversionalgos/samesamealgos';
import {
  AlgoFromToMappingType,
  ConversionOverlayConfigurationType,
} from '@/models/Params';

const METERS = 'Meters';
const FEET = 'Feet';
const INCHES = 'Inches';

const distanceValueList = [METERS, FEET, INCHES];

const distanceAlgoMappings: AlgoFromToMappingType = [
  // Meters - Feet Conversions

  {
    from: METERS,
    to: FEET,
    algo: convertMetersToFeet,
    descriptionSameAsLabel: true,
  },

  {
    from: FEET,
    to: METERS,
    algo: convertFeetToMeters,
    descriptionSameAsLabel: true,
  },

  // Meters - Inches Conversions

  {
    from: METERS,
    to: INCHES,
    algo: convertMetersToInches,
    descriptionSameAsLabel: true,
  },

  {
    from: INCHES,
    to: METERS,
    algo: convertInchesToMeters,
    descriptionSameAsLabel: true,
  },

  // Feet -- Inches Conversions

  {
    from: FEET,
    to: INCHES,
    algo: convertFeetToInches,
    descriptionSameAsLabel: true,
  },

  {
    from: INCHES,
    to: FEET,
    algo: convertInchesToFeet,
    descriptionSameAsLabel: true,
  },

  // Same Same Conversinos

  {
    from: METERS,
    to: METERS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: FEET,
    to: FEET,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: INCHES,
    to: INCHES,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },
];

export const distancePageOverlayConfig: ConversionOverlayConfigurationType = {
  availableFroms: distanceValueList,
  defaultFrom: METERS,
  defaultTo: FEET,
  availableTos: distanceValueList,
  algoFromToMapping: distanceAlgoMappings,
};

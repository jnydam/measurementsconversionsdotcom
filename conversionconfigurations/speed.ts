import {
  AlgoFromToMappingType,
  ConversionOverlayConfigurationType,
} from '@/models/Params';

import { sameAlgo } from '@/conversionalgos/samesamealgos';
import {
  convertMetersPerSecondToMilesPerHour,
  convertMilesPerHourToMetersPerSecond,
} from '@/conversionalgos/speed/meterspersecondmilesperhour';
import {
  convertMetersPerSecondToMach,
  convertMachToMetersPerSecond,
} from '@/conversionalgos/speed/machmeterspersecond';
import {
  convertMilesPerHourToMach,
  convertMachToMilesPerHour,
} from '@/conversionalgos/speed/machmilesperhour';

const METERS_PER_SECOND = 'Meters/Second';
const MILES_PER_HOUR = 'Miles/Hour';
const MACH = 'Mach';

const speedValueList = [METERS_PER_SECOND, MILES_PER_HOUR, MACH];

const speedAlgoMappings: AlgoFromToMappingType = [
  // Meters/Second - Miles/Hour Conversions

  {
    from: METERS_PER_SECOND,
    to: MILES_PER_HOUR,
    algo: convertMetersPerSecondToMilesPerHour,
    descriptionSameAsLabel: true,
  },

  {
    from: MILES_PER_HOUR,
    to: METERS_PER_SECOND,
    algo: convertMilesPerHourToMetersPerSecond,
    descriptionSameAsLabel: true,
  },

  // Meters/Second - Mach Conversions

  {
    from: METERS_PER_SECOND,
    to: MACH,
    algo: convertMetersPerSecondToMach,
    descriptionSameAsLabel: true,
  },

  {
    from: MACH,
    to: METERS_PER_SECOND,
    algo: convertMachToMetersPerSecond,
    descriptionSameAsLabel: true,
  },

  // Miles/Hour -- Mach Conversions

  {
    from: MILES_PER_HOUR,
    to: MACH,
    algo: convertMilesPerHourToMach,
    descriptionSameAsLabel: true,
  },

  {
    from: MACH,
    to: MILES_PER_HOUR,
    algo: convertMachToMilesPerHour,
    descriptionSameAsLabel: true,
  },

  // Same Same Conversinos

  {
    from: MILES_PER_HOUR,
    to: MILES_PER_HOUR,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: METERS_PER_SECOND,
    to: METERS_PER_SECOND,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: MACH,
    to: MACH,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },
];

export const speedPageOverlayConfig: ConversionOverlayConfigurationType = {
  availableFroms: speedValueList,
  defaultFrom: METERS_PER_SECOND,
  defaultTo: MILES_PER_HOUR,
  availableTos: speedValueList,
  algoFromToMapping: speedAlgoMappings,
};

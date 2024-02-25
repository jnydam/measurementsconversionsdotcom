import { sameAlgo } from '@/conversionalgos/samesamealgos';
import {
  convertHoursToMilliseconds,
  convertMillisecondsToHours,
} from '@/conversionalgos/time/millisecondhour';
import {
  convertMillisecondsToMinutes,
  convertMinutesToMilliseconds,
} from '@/conversionalgos/time/millisecondminute';
import {
  convertMillisecondsToSeconds,
  convertSecondsToMilliseconds,
} from '@/conversionalgos/time/millisecondsecond';
import {
  convertHoursToMinutes,
  convertMinutesToHours,
} from '@/conversionalgos/time/minutehour';
import {
  convertHoursToSeconds,
  convertSecondsToHours,
} from '@/conversionalgos/time/secondhour';
import {
  convertMinutesToSeconds,
  convertSecondsToMinutes,
} from '@/conversionalgos/time/secondminute';
import {
  AlgoFromToMappingType,
  ConversionOverlayConfigurationType,
} from '@/models/Params';

const MILLISECONDS = 'Milliseconds';
const SECONDS = 'Seconds';
const MINUTES = 'Minutes';
const HOURS = 'Hours';

const timeValueList = [MILLISECONDS, SECONDS, MINUTES, HOURS];

const timeAlgoMappings: AlgoFromToMappingType = [
  // Milliseconds - Seconds Conversions

  {
    from: MILLISECONDS,
    to: SECONDS,
    algo: convertMillisecondsToSeconds,
    descriptionSameAsLabel: true,
  },

  {
    from: SECONDS,
    to: MILLISECONDS,
    algo: convertSecondsToMilliseconds,
    descriptionSameAsLabel: true,
  },

  // Milliseconds - Minutes Conversions

  {
    from: MILLISECONDS,
    to: MINUTES,
    algo: convertMillisecondsToMinutes,
    descriptionSameAsLabel: true,
  },

  {
    from: MINUTES,
    to: MILLISECONDS,
    algo: convertMinutesToMilliseconds,
    descriptionSameAsLabel: true,
  },

  // Milliseconds -- Hours Conversions

  {
    from: MILLISECONDS,
    to: HOURS,
    algo: convertMillisecondsToHours,
    descriptionSameAsLabel: true,
  },

  {
    from: HOURS,
    to: MILLISECONDS,
    algo: convertHoursToMilliseconds,
    descriptionSameAsLabel: true,
  },

  // Seconds -- Minutes Conversions

  {
    from: SECONDS,
    to: MINUTES,
    algo: convertSecondsToMinutes,
    descriptionSameAsLabel: true,
  },

  {
    from: MINUTES,
    to: SECONDS,
    algo: convertMinutesToSeconds,
    descriptionSameAsLabel: true,
  },

  // Seconds -- Hours Conversions

  {
    from: SECONDS,
    to: HOURS,
    algo: convertSecondsToHours,
    descriptionSameAsLabel: true,
  },

  {
    from: HOURS,
    to: SECONDS,
    algo: convertHoursToSeconds,
    descriptionSameAsLabel: true,
  },

  // MINUTES -- Hours Conversions

  {
    from: MINUTES,
    to: HOURS,
    algo: convertMinutesToHours,
    descriptionSameAsLabel: true,
  },

  {
    from: HOURS,
    to: MINUTES,
    algo: convertHoursToMinutes,
    descriptionSameAsLabel: true,
  },

  // Same Same Conversinos

  {
    from: MINUTES,
    to: MINUTES,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: SECONDS,
    to: SECONDS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: HOURS,
    to: HOURS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: MILLISECONDS,
    to: MILLISECONDS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },
];

export const timePageOverlayConfig: ConversionOverlayConfigurationType = {
  availableFroms: timeValueList,
  defaultFrom: MINUTES,
  defaultTo: SECONDS,
  availableTos: timeValueList,
  algoFromToMapping: timeAlgoMappings,
};

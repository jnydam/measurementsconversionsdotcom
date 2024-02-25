import {
  convertUSCupToUSTablespoon,
  convertUSTablespoonToUSCup,
} from '@/conversionalgos/cooking/uscupustablespoon';
import {
  convertUSCupToUSTeaspoon,
  convertUSTeaspoonToUSCup,
} from '@/conversionalgos/cooking/uscupusteaspoon';
import {
  convertUSTablespoonToUSTeaspoon,
  convertUSTeaspoonToUSTablespoon,
} from '@/conversionalgos/cooking/usteaspoonustablespoon';
import { sameAlgo } from '@/conversionalgos/samesamealgos';
import {
  AlgoFromToMappingType,
  ConversionOverlayConfigurationType,
} from '@/models/Params';

const USCUPS = 'US Cups';
const USTABLESPOONS = 'US Tablespoons';
const USTEASPOONS = 'US Teaspoons';

const cookingValueList = [USCUPS, USTABLESPOONS, USTEASPOONS];

const cookingAlgoMappings: AlgoFromToMappingType = [
  // US Cups - US Teaspoons Conversions

  {
    from: USCUPS,
    to: USTEASPOONS,
    algo: convertUSCupToUSTeaspoon,
    descriptionSameAsLabel: true,
  },

  {
    from: USTEASPOONS,
    to: USCUPS,
    algo: convertUSTeaspoonToUSCup,
    descriptionSameAsLabel: true,
  },

  // US Cups - US Tablespoons Conversions

  {
    from: USCUPS,
    to: USTABLESPOONS,
    algo: convertUSCupToUSTablespoon,
    descriptionSameAsLabel: true,
  },

  {
    from: USTABLESPOONS,
    to: USCUPS,
    algo: convertUSTablespoonToUSCup,
    descriptionSameAsLabel: true,
  },

  // US Teaspoons - US Tablespoons Conversions

  {
    from: USTEASPOONS,
    to: USTABLESPOONS,
    algo: convertUSTeaspoonToUSTablespoon,
    descriptionSameAsLabel: true,
  },

  {
    from: USTABLESPOONS,
    to: USTEASPOONS,
    algo: convertUSTablespoonToUSTeaspoon,
    descriptionSameAsLabel: true,
  },

  // Same Same Conversinos

  {
    from: USCUPS,
    to: USCUPS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: USTEASPOONS,
    to: USTEASPOONS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },

  {
    from: USTABLESPOONS,
    to: USTABLESPOONS,
    algo: sameAlgo,
    descriptionSameAsLabel: true,
  },
];

export const cookingPageOverlayConfig: ConversionOverlayConfigurationType = {
  availableFroms: cookingValueList,
  defaultFrom: USTEASPOONS,
  defaultTo: USTABLESPOONS,
  availableTos: cookingValueList,
  algoFromToMapping: cookingAlgoMappings,
};

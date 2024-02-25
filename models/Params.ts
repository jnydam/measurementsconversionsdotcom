type OptionParam = {
  name: string;
  displayBlurb: string;
};

export type AlgoFromToMappingType = {
  from: string;
  to: string;
  descriptionSameAsLabel: boolean;
  fromDescriptionText?: string;
  toDescriptionText?: string;
  algo: (prevValue: number) => number;
}[];

export type AlgoMappingStateInfo = {
  algo: (prevValue: number) => number;
  fromDescriptionText: string | undefined;
  toDescriptionText: string | undefined;
};

export type ConversionOverlayConfigurationType = {
  defaultFrom: string;
  defaultTo: string;
  availableFroms: string[];
  availableTos: string[];
  algoFromToMapping: AlgoFromToMappingType;
};

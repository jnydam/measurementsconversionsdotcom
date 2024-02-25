// Meters Per Second -- Mach Conversions

export const convertMetersPerSecondToMach = (metersPerSecond: number) => {
  return metersPerSecond / 343;
};

export const convertMachToMetersPerSecond = (mach: number) => {
  return mach * 343;
};

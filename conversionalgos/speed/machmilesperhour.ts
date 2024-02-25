// Miles Per Hour -- Mach Conversions

// approximate
export const convertMilesPerHourToMach = (milesPerHour: number) => {
  return milesPerHour / 767.269;
};

// approximate
export const convertMachToMilesPerHour = (mach: number) => {
  return mach * 767.269;
};

export const formatNumber = (value: string): string => {
  return value.slice(0, -4) + '-' + value.slice(-4);
};

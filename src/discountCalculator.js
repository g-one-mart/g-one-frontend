export const discountCalculator = (originalPrice, discountedPrice) => {
  return Math.floor(((originalPrice - discountedPrice) / originalPrice) * 100);
};

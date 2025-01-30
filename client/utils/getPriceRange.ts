export default function getPriceRange(
  minPrice: number,
  maxPrice: number
): string {
  const formatToINR = (price: number): string => {
    if (price >= 1_00_00_000) {
      const croreValue = price / 1_00_00_000;
      return `INR ${croreValue.toFixed(2)} Cr`;
    } else if (price >= 1_00_000) {
      const lakhValue = price / 1_00_000;
      return `INR ${lakhValue.toFixed(2)} Lakh`;
    } else {
      return `INR ${price}`;
    }
  };

  const formattedMinPrice = formatToINR(minPrice);
  const formattedMaxPrice = formatToINR(maxPrice);

  return `${formattedMinPrice} to ${formattedMaxPrice}`;
}

export const getShortPriceRange = (range: string): string => {
  const [min, max] = range.split(" - ").map(Number);

  const formatValue = (value: number): string => {
    if (value >= 10000000) {
      return `${value / 10000000}Cr`;
    } else if (value >= 100000) {
      return `${value / 100000}L`;
    }
    return value.toString();
  };

  if (max >= 1000000000) {
    return `above ${formatValue(min)}`;
  }

  const formattedMin = formatValue(min);
  const formattedMax = formatValue(max);

  if (
    (min < 10000000 && max < 10000000) ||
    (min >= 10000000 && max >= 10000000)
  ) {
    return `${formattedMin} - ${formattedMax}`;
  }

  return `${formattedMin} - ${formattedMax}`;
};

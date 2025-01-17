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

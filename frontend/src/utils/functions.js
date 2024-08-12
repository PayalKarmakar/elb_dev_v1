export const currencyFormat = () => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2, // Ensures two decimal places
  });
  return formatter;
};

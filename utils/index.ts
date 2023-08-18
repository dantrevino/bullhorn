
export const formattedBTC = (value: number) => {
  if (!value) return '';
  return `${value.toFixed(8).toLocaleString() || 0}`;
};

export const formattedCurrency = (amount: number) => {
  if (!amount) return '';
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });
};

export const formattedInterestRate = (interestRate: number) => {
  if (!interestRate) return '';
  return interestRate.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

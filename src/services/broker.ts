export const moneyFormat = (amount: number): string =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

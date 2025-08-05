// @ts-check

/*
 The day rate, given a rate per hour
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/*
 Calculates the number of days in a budget, rounded down
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}

/*
 Calculates the discounted rate for large projects, rounded up
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const month = Math.floor(numDays / 22);
  const remainder = (numDays % 22);
  return Math.ceil((dayRate(ratePerHour) * (1 - discount) * month * 22) + (remainder * dayRate(ratePerHour)))
} 

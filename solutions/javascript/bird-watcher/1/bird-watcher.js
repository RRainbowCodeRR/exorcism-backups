// @ts-check


export function totalBirdCount(birdsPerDay) {
  let total = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
  total += birdsPerDay[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let totalBirdsInWeek = 0;
  for (let i = 7 * (week -1); i < (7 * week); i++) {
    totalBirdsInWeek += birdsPerDay[i]; 
  }
  return totalBirdsInWeek;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}

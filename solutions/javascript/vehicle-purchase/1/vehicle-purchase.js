// @ts-check

export function needsLicense(kind) {
  if ( kind === 'car' || kind === 'truck') {
    return true
  } else {
    return false
  }
}

export function chooseVehicle(option1, option2) {
  let str = ' is clearly the better choice.'
  if (option1 < option2) {
    return option1 + str;
  } else {
    return option2 + str;
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice *.8;
  } else if (age >= 3  && age <= 10) {
    return originalPrice * .7;
  } else {
    return originalPrice * .5;
  }
}

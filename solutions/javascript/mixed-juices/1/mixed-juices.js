// @ts-check

export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy': 
      return .5;

    case 'Energizer': 
      return 1.5;
      
    case 'Green Garden': 
      return 1.5;

    case 'Tropical Island':
      return 3;
      
    case 'All or Nothing':
      return 5;

    default: 
      return 2.5;
  }
}



export function limesToCut(wedgesNeeded, limes) {
  let usedLimes = 0;
  let limeToCut = limes[0]
  
    while ( wedgesNeeded > 0 && limes.length > 0 ) {

    if (wedgesNeeded <= 0 ) {
        break;
      }
      
    switch (limeToCut) {
      case 'small' : 
        wedgesNeeded -= 6;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        break;
      case 'large' :
        wedgesNeeded -= 10;
        break;
    }
      
      limes.shift();
      usedLimes += 1;
      limeToCut = limes[0];
    }
    
    return usedLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let name = orders[0];
  
  do {
    
    timeLeft -= timeToMixJuice(name)
    
    orders.shift()
    name = orders[0]
    
    
  } while (timeLeft > 0 && orders.length > 0);

  return orders
}

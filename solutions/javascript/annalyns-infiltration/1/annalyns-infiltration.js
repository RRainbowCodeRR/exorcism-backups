// @ts-check


export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? false : true;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return (knightIsAwake || archerIsAwake || prisonerIsAwake) ? true : false;
    
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return (!archerIsAwake && prisonerIsAwake) ? true : false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if ((knightIsAwake && !archerIsAwake) && prisonerIsAwake && petDogIsPresent) {
    return true;
  } else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
    return true;
  } else if (knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent){
    return true;
  } else if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent){
    return true; 
  } else {
    return false;
  }
}

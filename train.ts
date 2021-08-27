import {printTrain, turnOffLight, turnOnLight, isLightOn, goToPriorCar, goToNextCar, startTrain} from "./train";

// turn off light where I am (if on)
// move to car, turn on lights whenever off
// whenever a light is flipped, return n many cars
// if you trek back and find your car light on, you found n

var totalVisited = 0;

function checkNextCar() : boolean {
    goToNextCar();
    totalVisited++;
    return isLightOn();
}

function explore() : number {
    let carsVisited = 1;
    while (checkNextCar()) {
        carsVisited++;
    }
    turnOnLight();
    return carsVisited;
}

function goBack(distanceToStartingCar : number) : boolean {
    for (let i = 0; i < distanceToStartingCar; i++) {
        goToPriorCar();
        totalVisited++;
    }

    if (isLightOn()) {
        // we found the end of the train
        return true;
    }
    return false;
}

function solve() : number {
  let lengthOfTrain = explore();

  while (!goBack(lengthOfTrain)) {
    lengthOfTrain = explore();
  }
  return lengthOfTrain;
}

startTrain(4);
turnOffLight();

console.log(solve());
console.log(totalVisited);
printTrain();

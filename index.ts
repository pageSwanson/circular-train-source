import {printTrain, turnOffLight, turnOnLight, isLightOn, goToPriorCar, goToNextCar, startTrain} from "./train";

// describe a solution here

// keep track of the total train cars visited
var totalVisited = 0;

// code starts with this - create the train and step inside
// an 'arbitrary' train car
startTrain(4);

var trainLength = 0;

// report the final length of the train
console.log(trainLength);

// helpful function
function checkNextCar() : boolean {
    goToNextCar();
    totalVisited++;
    return isLightOn();
}

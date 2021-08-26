import { List } from "simple-double-linked-list";
import { ListIterator } from "simple-double-linked-list/dist/src/listIterator";

var _train = new List<boolean>();
var train : ListIterator<boolean>;

function startTrain(carCount : number) : void {
  _train = new List<boolean>();

  for (let i = 0; i < carCount; i++) {
    _train.AddFront(Math.random() < 0.5);
  }

  _train.Print();

  train = _train.Begin();
}

function goToNextCar() : void {
  train.Next();

  if (train.IsAtEnd()) {
    train.ToFirst();
    return;
  }
};

function goToPriorCar() : void {
  train.Previous();

  if (train.Value() == null) {
    train.ToLast()
  }
};

function isLightOn() : boolean {
  let isLit = train.Value();
  return isLit;
};

function turnOnLight() : void {
   _train.Update(train, true);
};

function turnOffLight() : void {
  _train.Update(train, false);
};

function printTrain() : void {
  _train.Print();
}

export {printTrain, turnOffLight, turnOnLight, isLightOn, goToPriorCar, goToNextCar, startTrain}

// Code your solution in this file!
const start = 42;

function distanceFromHqInBlocks(someValue) {
  return someValue > start ? someValue - start : 0;
}

const distance = distanceFromHqInBlocks(50);

console.log(distance);

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

const distanceInFeet = distanceFromHqInFeet(50);

console.log(distanceInFeet);

function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  }

  if (distance <= 2000) {
    return distance * 0.02;
  }

  if (distance > 2000) {
    return 'cannot travel that far';
  }
}

console.log(calculatesFarePrice(42, 50));
console.log(calculatesFarePrice(42, 2500));
console.log(calculatesFarePrice(42, 2501));
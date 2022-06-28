// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation)
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue)
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start - destination) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
  }
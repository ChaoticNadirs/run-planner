const MILE_IN_KM = 1.60934;

const milesToKm = miles => {
  return miles * MILE_IN_KM;
};

const kmToMiles = km => {
  return km / MILE_IN_KM;
};

const milePaceToKmPace = seconds => {
  return seconds / MILE_IN_KM;
};

const tenKmPaceToMilePace = (min, sec) => {
  const totalSec = min * 60 + sec;
  const tenKmInMiles = kmToMiles(10);
  const milePace = Math.round(totalSec / tenKmInMiles);
  return milePace;
};

export { milesToKm, milePaceToKmPace, kmToMiles, tenKmPaceToMilePace };

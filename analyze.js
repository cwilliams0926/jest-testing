const findAverage = (array) => {
  return array.reduce((sum, current) => sum + current, 0) / array.length;
};

const findMin = (array) => {
  return Math.min(...array);
};

const findMax = (array) => {
  return Math.max(...array);
};

const analyzeArray = (array) => {
  return {
    average: findAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length,
  };
};

export default analyzeArray;

export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-unused-vars
  for (const value of array) {
    // eslint-disable-next-line no-const-assign
    value += appendString;
  }
  return array;
}

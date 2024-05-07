/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) { // Use 'const' for loop iteration
    value += appendString; // Modify the element directly using +=
  }
  return array;
}

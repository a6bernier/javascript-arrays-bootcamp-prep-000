var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array]
  return newArray
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) { 
  const newArray = [array, element]
  console.log(newArray[0])
}
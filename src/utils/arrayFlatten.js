const arrayFlatten = (accumulator, element) => {
  return Array.isArray(element) ?
    [...accumulator, ...element.reduce(arrayFlatten, [])] :
    [...accumulator, element];
}

export default arrayFlatten;


const solution = (array) => {

    // This is a slightly advanced implementation of the easy smallest-value snack.
    // We are still using the sort method, with a custom callback to compare the value property of the objects
    // The logic is the same, but this time we are using the implicit return of the arrow functions

    array.sort((a, b) => a.value - b.value);

    // Remember to return the value and not the object :)
    return array[0].value;
};


export default { solution: solution };
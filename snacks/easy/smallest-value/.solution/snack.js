
const solution = (a) => {
    // This is the simplest solution
    // We will use the sort() method to order the array
    // Then we'll take the first element of the array

    a.sort((a, b) => {
        // If a - b >= 1 it means a is bigger than b
        // If a - b <= -1 it means b is bigger than a
        // If a - b = 0 it means a and b are equals

        // The sort methods accept a callback (this arrow function) and based on the return value
        // decide how to order the elements inside the array.

        // For the classic ascendent order (smaller to bigger) just return the result of the subtraction (a - b)
        // If you want the order to be reversed just return the result of b - a

        // NOTE: a and b could also be arrays or objects. In that case make sure to get the element or the property you want
        // I.E. a.age - b.age or a[0] - b[0]

        return a - b;
    })

    // Now we just return the first element of the array
    return a[0];
};


export default { solution: solution };
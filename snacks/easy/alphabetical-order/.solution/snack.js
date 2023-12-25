const solution = (array) => {
    // This is the simplest solution
    // We will use the sort() method to order the array
    // Then we'll take the first element of the array

    // The sort method change the order in the original array (so we don't need to create a new array)
    // We can use sort without a callback to get the basic ordering and to order strings with ease.

    // NOTE: make sure to understand how JS treats lowerCase and upperCase strings and even numbers as string.
    // Remember also that an empty strings is still a string :)
    array.sort();

    // If you want to implement a callback, you should use the correct method to compare two strings (i.e. the classic a - b won't work)
    // array.sort((a, b) => a.localeCompare(b));
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

    return array[0];
};


export default { solution: solution };

const solution = (s) => {
    // First we save the length of the string (it's just a little optimization)
    // In this way we will avoid computing the string (or array) length at every iteration
    const stringLength = s.length;
    const result = []

    // Since we can access every character in the string using square brackets notation (an alternative is the charAt() method)
    // We will use a for loop to iterate through the string
    for (let i = 0; i < stringLength; i++) {

        // A valid alternative is:
        // const letter = s.charAt(i)
        const letter = s[i];

        // We get the last item in the result array (i.e. the current letter we are counting)
        // If result is empty, the at() method will return undefined
        const lastItem = result.at(-1);

        // If the current letter equals the previous saved letter, we increment the count property
        if (lastItem && lastItem.letter === letter) {
            lastItem.count++;
        } else {

            // Otherwise we encountered a new letter, so we need to add a new object in the array
            const newItem = {
                letter: letter,
                count: 1
            };
            result.push(newItem);
        }
    }

    // Once we completed the iterations on the string we use the map method to create a new array
    // The new array will be an array of strings (the letter plus the counter)
    // Then we'll concatenate all the strings together (the join() method with an empty string as parameter will concatenate all the elements in the array
    // without spaces or other characters)
    return result.map(l => `${l.letter}${l.count}`).join('');
};


export default { solution: solution };
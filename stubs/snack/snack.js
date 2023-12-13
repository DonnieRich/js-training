
/**
 * This function should be empty except for the function parameters, if needed.
 * @returns 
 */
const solution = () => {
    // Write your solution

    return "your solution";
};

/**
 * This method will contain only a console.log with a template literal nicely formatted with the instructions
 * needed to complete the snack.
 * You should include:
 * - the input (i.e. the solution() function parameters and their type)
 * - the expected output for a couple of inputs
 * 
 * Use the default text as guide. Be sure to add the correct text and delete this comment before submitting your snack.
 */
const info = () => {
    console.log(`
    This snack will receive one input:
        - one array of numbers (a)


    From the following example you should be able to understand how to implement a solution:

    Input:          | Output:
    [1,2,3,4]       | 20

    Input:          | Output:
    [5,5]           | 20

    Input:          | Output:
    [3,5,7]         | 30

    Input:          | Output:
    [100,200]       | 600 
    `);
};

export default { solution: solution, info: info };
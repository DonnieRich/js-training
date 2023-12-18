
const solution = (s, start, end) => {
    // Write your solution

    return "your solution";
};


const info = () => {
    console.log(`
    This snack will receive three inputs:
        - a string (s)
        - an integer (start)
        - an integer (end)


    From the following example you should be able to understand how to implement a solution:

    Input:          | Output:
    ABCDE           | CDE
    2               |
    4               |

    Input:          | Output:
    ABCDE           | CDEABCDE
    17              |
    24              |

    Input:          | Output:
    customString123 | 23cust
    1498            |
    1503            |

    Input:          | Output:
    customString123 | 123c
    5712            |
    5715            |

    `);
};

export default { solution: solution, info: info };
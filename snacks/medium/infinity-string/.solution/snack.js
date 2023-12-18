
const solution = (s, start, end) => {
    let result = '';
    const length = s.length;

    for (let i = start; i <= end; i++) {
        result += s[i % length];
    }

    return result;
};


export default { solution: solution };
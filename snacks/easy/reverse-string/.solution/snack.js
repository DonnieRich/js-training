const solution = (n, s) => {
    return n % 2 === 0 ? s : s.split('').reverse().join('');
};


export default { solution: solution };
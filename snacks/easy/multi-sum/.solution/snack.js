const solution = (a) => {
    return a.map(n => n * 2).reduce((acc, val) => acc + val, 0);
};


export default { solution: solution };
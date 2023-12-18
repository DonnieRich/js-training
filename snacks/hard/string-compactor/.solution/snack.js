
const solution = (s) => {
    const stringAsArray = s.split('');
    const result = []

    for (const letter of stringAsArray) {
        const lastItem = result.at(-1);
        if (lastItem && lastItem.letter === letter) {
            lastItem.count++;
        } else {
            const prevItem = result.at(-1);
            const newItem = {
                letter: letter,
                count: 1,
                position: prevItem ? prevItem.position + 1 : 1
            };
            result.push(newItem);
        }
    }

    result.sort((a, b) => a.position - b.position);

    return result.map(l => `${l.letter}${l.count}`).join('');
};


export default { solution: solution };
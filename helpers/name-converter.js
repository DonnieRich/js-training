const snackNameForTest = (name, difficulty = 'easy') => {
    return toCamelCase(prefixDifficulty(name, difficulty));
}

const prefixDifficulty = (name, difficulty = 'easy') => {
    return `${difficultyChecker(difficulty)}${capitalize(name)}`;
}

const toCamelCase = (name) => {
    const words = name.split('-');
    let camelCaseName = words[0];

    if (words.length > 1) {
        camelCaseName = words.map((substring, i) => i === 0 ? substring : capitalize(substring)).join('');
    }

    return camelCaseName;
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const toKebabCase = (string) => {
    return string.replace(/([A-Z])/g, '-$1').toLowerCase();
}

const difficultyChecker = (string) => {
    let prefix = difficultyContract(string);
    if (!['e', 'm', 'h'].includes(prefix)) {
        prefix = 'e';
        throw new Error('The selected difficulty is not available. Using default level: "easy".');
    }
    return prefix;
}

const difficultyContract = (string) => {
    return string.toLowerCase()[0];
}

const difficultyExpand = (letter) => {
    return difficultyTranslator(letter[0])
}

const difficultyTranslator = (letter) => {
    const map = {
        e: 'easy',
        m: 'medium',
        h: 'hard'
    };
    return map[letter];
}

export { snackNameForTest, toKebabCase, difficultyExpand };
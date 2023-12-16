const snackNameForTest = (string, difficulty = 'easy') => {
    return prefixDifficulty(toCamelCase(string), difficulty);
}

const prefixDifficulty = (string, difficulty = 'easy') => {
    return `${difficultyChecker(difficulty)}${capitalize(string)}`;
}

const toCamelCase = (string) => {

    if (/^[a-z][A-Za-z0-9]*$/.test(string)) {
        return string.replace(/[0-9]/g, '');
    }

    if (/^[A-Z0-9]*$/.test(string)) {
        return string.toLowerCase().replace(/[0-9]/g, '');
    }

    if (/^[A-Z][A-Za-z0-9]*$/.test(string)) {
        return string.charAt(0).toLowerCase() + string.slice(1).replace(/[0-9]/g, '');
    }

    return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase()).replace(/[0-9]/g, '');

}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const toKebabCase = (string) => {
    return string.replace(/([A-Z])/g, '-$1').replace(/(^[-])|([0-9])/g, '').toLowerCase();
}

const difficultyChecker = (string) => {
    const prefix = difficultyContract(string);
    if (!['e', 'm', 'h'].includes(prefix)) {
        throw new Error('The selected difficulty is not valid. Use only: easy, medium, hard.');
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
    return map[letter.toLowerCase()];
}

export { snackNameForTest, prefixDifficulty, toCamelCase, capitalize, toKebabCase, difficultyChecker, difficultyContract, difficultyExpand, difficultyTranslator };
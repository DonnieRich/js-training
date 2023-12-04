const translateName = (name) => {
    if (name.includes('-')) {
        return toCamelCase(name);
    }
    return name;
}

const toCamelCase = (name) => {
    return name.split('-').map((substring, i) => i === 0 ? substring : capitalize(substring)).join('');
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { translateName };
import { toKebabCase, difficultyExpand } from "./name-converter.js";

const exporter = async (snackName) => {
    const difficulty = difficultyExpand(snackName[0]);
    // TODO: the function return a string with a prefix (-). This should be corrected.
    const snackDir = toKebabCase(snackName.slice(1)).slice(1);

    const snack = await import(`../snacks/${difficulty}/${snackDir}/snack.js`);

    return snack.default;
};

export { exporter };
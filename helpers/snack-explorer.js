import fs from 'fs/promises';

const listAllSnacks = async (difficulty) => {
    try {
        const snacks = await fs.readdir(`${process.cwd()}/snacks/${difficulty}`);

        if (snacks.length > 0) {
            snacks.forEach(snack => {
                console.log(snack);
            });
        } else {
            console.log(`Currently there are no ${difficulty} snacks availables`)
        }
    } catch (err) {
        console.log(err);
    }
}

export { listAllSnacks };
## How to use this project

- Clone the project
- Run `npm install`

After that you can:
- Get a list of all snacks (filtered by difficulty level) with the command `npx snack -a`
    - Default difficulty level: `easy`
    - Use the `-d` option is for the difficulty level (i.e. `npx snack -a -d medium` or `npx snack -a -d m` will show all the medium difficulty snacks)
- Or check the snacks inside the _snacks_ folder (they are organized by difficulty - `easy, medium, hard`)

To see a snack info from the terminal run `npx snack -i snack-name -d snack-difficulty`
- the `-i` option is for the snack name (both camelCase or kebab-case are good)
- the `-d` option is for the difficulty level (`easy, medium, hard` - default: `easy`)

Read carefully the instructions and the input/output examples.  
Try to solve the snack by writing your code inside the `solution()` function (every snack has one), then run the test cases for the snack you solved (use `npm run test -- dSnackName`)  

> NOTE  
> the snack name for the test MUST be prefixed with the difficulty and be in camelCase (i.e. `eMultiSum`)  
> 

Check each test result and fix your code accordingly.  
Enjoy your dev journey! :)

### How to create new snacks

Run the command `npx snack -c snack-name -d snack-difficulty`
- the `-c` option need a snack name (both camelCase or kebab-case are good)
- the `-d` option need a difficulty level (`easy, medium, hard` - default: `easy`)

The snack stubs will be copied inside the `snacks/{difficultyLevel}/{snack-name}` folder.  
Inside it you'll find:
- a basic `snack.js` file (no need to change the _solution_ function, but you should edit the _info_ function output to be aligned with the snack you want to create)
- a `.solution` folder with a `snack.js` file inside. Here you MUST implement a solution for your snack (keep it simple and maybe add some descriptive comments)
- a `__test__` folder with a `snack.test.js` file inside. No need to change anything except the test cases and the functions parameters (see some of the existing tests for a clear example)
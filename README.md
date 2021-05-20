# POS Integration Demo (Front-end)

### How to start app

```js
// Install yarn packages
yarn

// Run app locally
yarn run electron-react

// Command for running tests
yarn run test
```


### Code implementation & Core knowledge points (covered)

1. For Components: I have introduced <a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank">`Atomic`</a> component design methodology (I only used for atom and template 2 layers because of time limit, later can implement 4 layers [`atom`, `molecule`, `organism`, `template`])

2. For Unit testing: utilized React-Testing Library (builtin no extra configuration for now, save time)

3. Using proxy setup in `package.json` file fot localhost API request (avoid CORS error)

4. `BEM` methodology for CSS component custom styling

5. `Atomic` component design methodology for component folder structure

6. Using React `Hooks` for making code shorter and easier to be reade

7. `SOLID` principle: `SRP` (Single Responsibility Principle) implemented

8. `DRY` rule for avoid same logic occurred multiple times

9. Using `Context API` for handling state share

10. Keeping each component file lees than `200` lines (clean and easier to read)

11. using CSS `var` to make color code reusable for css file

12. Extract function logic out and put it into a `utils` folder as `helper` functions, which is easier to maintain later

13. Unit tests covered (simple ones/ time limit)

14. Able to keep user order state data `updated` and also ensured user is able to view the total cost before click pay button 

### Future improvements

1. Need to write a new route to fetch `/products` instead of using the mock data

2. Need display a `popup` after payment process (API request) has been successfully to show either API response

3. Should to add `ES Linter`

4. Should cover more unit tests with unit tests coverage settings

5. Need to write more explanation comments for codebase

6. Should put Context store logic inside `globalContext` file not App file (Sorry, time limited)

### References

1. Electron Configuration Sample: https://github.com/electron/electron-quick-start/blob/master/main.js

2. Write data into a JSON file (NodeJS): https://stackoverflow.com/questions/36093042/how-do-i-add-to-an-existing-json-file-in-node-js

3. Reduce method: https://dm-tipify.netlify.app/js-reduce-method.html

4. generate uuid: https://github.com/uuidjs/uuid

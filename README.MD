## TypeScript Lunch and Learn for DDSG

####TypeScript is…
- A superset of JavaScript – meaning it extends the JavaScript language without creating a whole new language (in other words, TypeScript is JavaScript)
- Cross platform (can develop typescript apps using Windows, Mac, Linux)
- Created and maintained by Microsoft
- Adds static typing on top of Javascript which means that it is able to provide compile time code checking that will not only catch bugs before you run your code but will also help you write your code by providing in-line documentation and guidance. 

####TypeScript FYIs
- You’ll have to compile your TypeScript code into JavaScript in order to run it in a browser
- TypeScript files end with a `.ts`
- We’ll only go over the basics of TypeScript here (not the advanced parts)
- You'll need to install the TypeScript package into Sublime Text (Command (⌘) + shift + p to open the Package Manager, after that, type *TypeScript* and choose the first option)
- However, VS code has built in support for typescript.
- TypeScript info: https://www.typescriptlang.org/
- TypeScript Playground: https://www.typescriptlang.org/play

####Installing TypeScript in you JavaScript app:
- Resource: https://www.typescriptlang.org/download
- First we need to install the TypeScript compiler. We can use NPM to install it.
- We’ll install the TypeScript compiler as a dev dependency because it’ll only be needed at development time and not at runtime: `npm install typescript --save-dev`
- After that, check `package.json` to make sure TypeScript is part of `devDependencies`
- Next you’ll need to add a config file at the root level: `tsconfig.json`
- There are many config options avail but we’ll just use these: `includes` and `compilerOptions`
- `includes`: supply path to files to include (in our case all files in the `src` folder)
- `compilerOptions`: `target`: ‘ES6’ so the typescript compiler will compile `.ts` files to `.js` files using the ES6 syntax. `outDir`: folder where you want the generated files
`noEmit`: true (now it won't compile the `.ts` files, use this if only using typescript for type checking and instead using babel for compile)
- Finally, set up a `src` folder with `.ts` files and set up an empty `build` folder, both at root level
- Run the typescript compiler in your bash shell: `npx tsc`. See how `.ts` files in `src` are compiled into `.js` files in `build` 

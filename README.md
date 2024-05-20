# Image-Processing-API
 This is a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. 
 The project's using VietNam's beautiful images. It will help you discover Viet Nam through photos.

# Build project
    npm run build

# Run project
    npm start

# Steps to Install and Configure Project
## 1.Install npm by Terminal
    npm init -y
    npm i

## 2.Install Typescript
### Terminal:
    npm i --save-dev typescript
    npm i --save-dev ts-node 
    npm i --save-dev @types/node

    Add the default TypeScript configuration file.
        npx tsc --init
    
    Add a build script to your package.json file
        "build": "npx tsc"

    Configuration file tsconfig.json
        "target": "es5",
        "lib": ["ES6"],
        "outDir": "./build",
        "strict": true,
        "noImplicitAny": true

   Exclude checking of node modules in tsconfig.json
        "exclude": ["node_modules"]

## 3. Install Express
### Terminal:
    npm i express
    npm i --save-dev @types/express
    npm i --save-dev nodemon

    Add 'start' to package.json file in the "script"
        "start": "nodemon src/app.ts"

### 4. Install ejs and sharp
    npm install ejs
    npm i --save-dev @types/ejs

    npm install sharp
    npm i --save-dev @types/sharp

### 5. Install, configure Formatting
    npm i prettier
    Run the command on git bash: touch .prettierrc

    Configure .prettierrc file: 
        {
            "semi": true,
            "singleQuote": true,
            "trailingComma": "none",
            "printWidth": 80
        }
    
    Add script: "prettier" to package.json file
        *** if using Mac, use this script:
            "prettier": "prettier --config .prettierrc 'src/**/*.ts' --write"

        *** if using Window, use this script:
            "prettier": "prettier --single-quote --trailing-comma es5 --write \"src/**/*.ts\""

    Run Prettier
        npm run prettier




# React - A JavaScript library for building user interfaces

#### Website
* React https://reactjs.org
* Node https://nodejs.org
* npm https://www.npmjs.com
* Babel https://babeljs.io
* Semantic UI https://semantic-ui.com
* CDN https://cdnjs.com
* Faker https://fakerjs.dev
* Jest https://jestjs.io
* Testing Library https://testing-library.com
* Jest DOM https://github.com/testing-library/jest-dom

#### Package
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [axios](https://www.npmjs.com/package/axios)
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
* [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
* [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
* [@testing-library/user-event
](https://www.npmjs.com/package/@testing-library/user-event)
* [jest-cli](https://www.npmjs.com/package/jest-cli)
* [Mock Service Worker](https://www.npmjs.com/package/msw)

### VSCode Extension
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
* [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

#### [Google Chrome Extension](https://www.youtube.com/watch?v=xv8LaashiWM)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Debug CSS](https://chrome.google.com/webstore/detail/debug-css/igiofjnckcagmjgdoaakafngegecjnkj)
* [Inspect Element](https://chrome.google.com/webstore/detail/inspect-element/flgcpmeleoikcibkiaiindbcjeldcogp)
* [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/mhimpmpmffogbmmkmajibklelopddmjf)
* [RestMan](https://chrome.google.com/webstore/detail/restman/ihgpcfpkpmdcghlnaofdmjkoemnlijdi/related)

# Create React App - Minimal
## Webpack
1) Create new directory and change to directory that you create
```sh
mkdir reactapp
cd reactapp 
```

2) Init node package
```sh
npm init -y
```

3) Install webpack
```sh
npm i --save-dev \
webpack-cli \
webpack-dev-server \
path
```

4) Create a new file webpack.config.js
```js
const path = require("path");

module.exports={
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "9500",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
}
```

5) Create 2 directory
* public
* src

6) Create file index.html to public directory and add 2 line in body
```html
<div id="root"></div>
<script src="main.js"></script>
```

6) Config start, build to package.json
```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  },
```

## Babel
7) Add module to webpack.config.js
```js
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            },
        ]
    }
```

8) Create a new file .babelrc
```js
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```

9) Install babel
```sh
npm i --save-dev \
babel-loader \
@babel/preset-env \
@babel/plugin-transform-runtime \
@babel/preset-react
```

9) Install react
```sh
npm i react react-dom
```

10) Testing Library
```sh
npm i -g jest-cli \
&& npm i --save-dev \
jest-environment-jsdom \
@testing-library/jest-dom \
@testing-library/react
```

11) Create a new file jest.config.js
```js
module.exports = {
    testEnvironment: 'jsdom',
}
```

# Create React App - Full
1) Install react, webpack, babel, linters, path, loader dependencies
```sh
npm init -y \
&& npm i react react-dom \
&& npm i --save-dev \
webpack-cli \
webpack-dev-server \
babel-loader \
@babel/preset-env \
@babel/plugin-transform-runtime \
@babel/preset-react \
path \
style-loader \
css-loader \
jest-environment-jsdom \
@testing-library/jest-dom \
@testing-library/react \
&& npm i -g jest-cli
```

5) Create a new file webpack.config.js
```js
const path = require("path");

module.exports={
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "9500",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use:  'babel-loader' 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}
```

6) Create a new file .babelrc
```js
{
    "presets": [
        "@babel/preset-env", 
        "@babel/preset-react" 
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```

7) Create a new file jest.config.js
```js
module.exports = {
    testEnvironment: 'jsdom',
}
```

8) Config start, build, test scripts to package.json
```json
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "test": "jest --watch"
  },
```

9) Create 2 directory
* public
* src

10) Create file index.html to public directory
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>
</html>
```

11) Create index.js to src directory
```js
import React from "react"
import { createRoot } from "react-dom/client"

const App = () => {
    return <div>Hello World</div>
}

const el = document.getElementById("root")
const root = createRoot(el)
root.render(<App/>)
```


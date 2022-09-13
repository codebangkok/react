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

# Create React App
1) Create new directory and change to directory that you create
```sh
mkdir reactapp
cd reactapp 
```

2) Init node package
```sh
npm init -y
```

3) Install react, webpack, babel, linters, path, loader dependencies
```sh
npm i react react-dom \
&& npm i --save-dev \
webpack \
webpack-cli \
webpack-dev-server \
babel-loader \
@babel/preset-env \
@babel/core \
@babel/plugin-transform-runtime \
@babel/preset-react \
@babel/eslint-parser \
@babel/runtime \
@babel/cli \
eslint \
eslint-config-airbnb-base \
eslint-plugin-jest \
eslint-config-prettier \
path \
style-loader \
css-loader
```

4) Install Testing Library and Jest (Optional for test)
```sh
npm i -g jest-cli \
&& npm i --save-dev \
jest-environment-jsdom \
@testing-library/jest-dom \
@testing-library/react
```

5) Copy files from resources to your root project directory
* .babelrc
* webpack.config.js
* .jest.config.js (Optional for test)

6) Config start, build, test scripts to package.json
```json
"scripts": {
    "start": "webpack-dev-server --config webpack.config.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest --watch"
}
```

7) Create 2 directory
* public
* src

8) Create file index.html to public directory
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
    <script src="main"></script>
</body>
</html>
```

9) Create index.js to src directory
```js
import React from "react";
import { createRoot } from "react-dom/client"

const App = () => {
    return <div>Hello World</div>
}

const el = document.getElementById("root")
const root = createRoot(el)
root.render(<App/>)
```

10) Run command build
```sh
npm run build
```

11) Start React Web Development
```sh
npm start
```
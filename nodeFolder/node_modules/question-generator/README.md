# question-generator

> Package to generate question for specific scenarios style questions

### Usage

```js
import QuestionGenerator from "question-generator";
```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

    yarn add question-generator (--dev)

or npm

    npm install question-generator (--save-dev)

### Examples

##### Interview questions

```js
import { interview } from "question-generator";

const question = interview(turtles);

console.log(question);
//Have you ever shown interest in turtles?
```

### Builds

`question-generator` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
-9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `question-generator` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/question-generator/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/question-generator) on your page. The UMD builds make `question-generator` available as a `window.questionGenerator` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

```

```

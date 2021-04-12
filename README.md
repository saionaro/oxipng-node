# oxipng-node [![CI](https://github.com/Saionaro/oxipng-node/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Saionaro/oxipng-node/actions/workflows/ci.yml) [![npm version](https://badge.fury.io/js/oxipng-node.svg)](https://badge.fury.io/js/oxipng-node)

Nodejs wrapper for multithreaded PNG optimizer written in Rust: [oxipng](https://github.com/shssoichiro/oxipng)

## Installation

Execute command

`npm i oxipng-node` or `yarn add oxipng-node`

depending on your project package manager.

## Usage

```javascript
// import module
const { run } = require("oxipng-node");
// import { run } from "oxipng-node"; // in case of TS

async function optimizeCat() {
  try {
    await run({
      input: "/Users/user/project/images/cat.png",
      out: "/Users/user/project/images/optimized/cat.png",
      optimization: 2,
    });

    console.log("File optimized!");
  } catch (e) {
    console.error(e);
  }

  // you can also use it without async-await
  // run(options).then(() => { ... }).catch(e => { ... })
}
```

## TypeScript Support

Package includes type definitions out the box.

## Options

| Name            | Type            | Default value | Description                                                                             |
| --------------- | --------------- | ------------- | --------------------------------------------------------------------------------------- |
| `path`          | `string`        | -             | Global path to file for optimization supports GLOBs                                     |
| `out`           | `string`        | -             | Global path to output file, if missing will modify original file inplace                |
| `optimization?` | `number` (1-6)  | 2             | Optimization preset see [here](https://github.com/shssoichiro/oxipng#usage) for details |
| `alpha?`        | `boolean`       | false         | Perform additional alpha optimizations                                                  |
| `interlacing?`  | `boolean`       | false         | PNG interlace type                                                                      |
| `strip?`        | `"safe", "all"` | -             | Strip metadata                                                                          |

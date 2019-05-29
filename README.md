## TDD using Jest and Vanilla JavaScript [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

### Getting Started
Install Jest using [`npm`](https://www.npmjs.com/):
```bash
npm install --save-dev jest
```

Add the following section to your `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run `npm run test` and Jest will print this message:

```bash
PASS  ./index.test.js
✓ should not return 4 (2ms)
```

To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

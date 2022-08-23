# cosmjs-types

[![npm version](https://img.shields.io/npm/v/cosmjs-types.svg)](https://www.npmjs.com/package/cosmjs-types)

## Maintenance

This section is for maintainers of this repo, not users.

### Getting started

```sh
# Pull external code
git submodule init
git submodule update

# Install dependencies
yarn install

# Setup SDK for IDE support (see https://next.yarnpkg.com/getting-started/editor-sdks)
yarn dlx @yarnpkg/sdks vscode
```

### Rebuilding types

```sh
yarn codegen # Generate .ts files into ./src
yarn build # Build .js/.d.ts files
```

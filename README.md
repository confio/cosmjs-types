# cosmjs-types

## Maintenance

This section is for maintainers of this repo, not users.

### Rebuilding types

```sh
git submodule init
git submodule update

yarn install
yarn define-proto # Generate .ts files into ./src
yarn build # Build .js/.d.ts files
```

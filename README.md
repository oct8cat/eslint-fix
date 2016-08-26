## Installation

`npm i -g eslint eslint-fix`

## Usage

### Shell

`cat myfile.js | eslint-fix`

### VIM

Set `equalprg` to `eslint-fix`. Use `ggVG=`.

`:set equalprg=eslint-fix`

Combine with [js-beautify](https://github.com/beautify-web/js-beautify) for solid pew-pew.

`:set equalprg=eslint-fix\|js-beautify`

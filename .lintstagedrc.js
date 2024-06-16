const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'tsc --incremental false --noEmit', // 前回のビルドから変更されたファイルのみをコンパイル
    buildEslintCommand,
    'prettier --write',
  ],
};

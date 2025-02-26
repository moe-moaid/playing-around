/**
 * By default lint-staged will run configured top-level tasks
 * concurrently. This can cause race conditions if multiple tasks write
 * to the same files.
 *
 * @see https://github.com/okonet/lint-staged#task-concurrency
 */

module.exports = {
  '*.{css,json,js,jsx,ts,tsx}': ['prettier --check'],
  '*.{js,jsx,ts,tsx}': [
    'eslint --quiet --cache --cache-location .cache/eslintcache',
    () => 'tsc',
    () => 'dpdm --no-warning --no-tree --exit-code circular:1 src/index.tsx',
  ],
};


module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{json,css,md,yml,yaml}': ['prettier --write'],
};

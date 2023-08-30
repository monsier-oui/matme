module.exports = {
  '*.css': ['prettier --write'],
  '*.{js,cjs,ts,tsx,astro}': ['prettier --write', 'eslint --fix'],
}

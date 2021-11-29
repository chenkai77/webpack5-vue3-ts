module.exports = {
  'src/**/*.{js,vue,png,svg,jpg,jepg,gif}': [
    (filenames) =>
      filenames.map(
        (filename) => `prettier --write --ignore-unknown '${filename}'`
      ),
  ],
}

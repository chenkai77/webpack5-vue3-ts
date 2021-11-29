module.exports = {
  'src/**/*.{js,vue,png,svg,jpg,jepg,gif}': [
    (filenames) => {
      let filenamesStr = filenames.join(' ')
      return `node ./config/check-format.js ${filenamesStr}`
    },
    (filenames) =>
      filenames.map(
        (filename) => `prettier --write --ignore-unknown '${filename}'`
      ),
  ],
}

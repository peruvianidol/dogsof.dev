module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
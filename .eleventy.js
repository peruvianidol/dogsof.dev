module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/images/");
  eleventyConfig.addPassthroughCopy("./_src/fonts/");

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
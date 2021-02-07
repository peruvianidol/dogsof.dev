const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  src = "_src" + src;
  
  let metadata = await Image(src, {
    widths: [460],
    formats: ["avif", "jpeg"],    
    urlPath: "/images/",
    outputDir: "./_site/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/images/");
  eleventyConfig.addPassthroughCopy("./_src/fonts/");
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
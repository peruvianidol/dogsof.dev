const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let isOnNetlify = process.env.CONTEXT === "production" ||
    process.env.CONTEXT === "deploy-preview" ||
    process.env.CONTEXT === "branch-deploy";

  let metadata = await Image(src, {
    widths: [400, 800],
    // use fewer formats on localhost to speed up builds
    formats: isOnNetlify ? ["avif", "webp", "jpeg"] : [null],
    outputDir: "./_site/images/generated/",
    urlPath: "/images/generated/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/images/");
  eleventyConfig.addPassthroughCopy("./_src/fonts/");
  eleventyConfig.addPassthroughCopy("./_src/css/");
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
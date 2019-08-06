module.exports = function(config) {
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    templateFormats: ["md", "html", "jpg", "png", "svg"]
  };
};

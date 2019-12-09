module.exports = (config) => {
  config.addPassthroughCopy("static");
  
  return {
    markdownTemplateEngine: "ejs",
  };
};
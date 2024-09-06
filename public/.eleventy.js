module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("abilities", (collection) =>
    collection.getFilteredByGlob("characters/abilities/*.md").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );
  eleventyConfig.addCollection("adventure", (collection) =>
    collection.getFilteredByGlob(["adventure/*.md", "adventure/*.html"]).sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("characters", (collection) =>
    collection.getFilteredByGlob(["characters/*.md", "characters/*.html"]).sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("items", (collection) =>
    collection.getFilteredByGlob(["characters/items/*.md", "characters/items/*.html"]).sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("gm", (collection) =>
    collection.getFilteredByGlob(["gm/*.md", "gm/*.html"]).sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("rituals", (collection) =>
    collection.getFilteredByGlob("characters/rituals/*.md").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("skills", (collection) =>
    collection.getFilteredByGlob("characters/skills/*.md").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("traits", (collection) =>
    collection.getFilteredByGlob("characters/traits/*.md").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  );

  return { passthroughFileCopy: true };
};

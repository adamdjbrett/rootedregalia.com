export default {
	tags: [
		"individualproducts"
	],
	"layout": "post.njk",
  
  eleventyComputed: {
    eleventyExcludeFromCollections: data => 
      data.draft === true ? true : false,
    permalink: data => 
      data.draft === true ? false : data.permalink,
    tags: data => 
      data.draft === true ? [] : (data.tags || ["individualproducts"])
  }
};

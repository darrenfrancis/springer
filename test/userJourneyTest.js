import Home_Page from "../page_objects/Home_Page.mjs";


describe('User journey test', function () {
	it('Search for a permaculture, filter search results for articles, go to purchase article form', function(done) {
		browser.url("https://link.springer.com/");
		Home_Page.searchInput.setValue("permaculture");
		Home_Page.searchButton.click();
	});
});

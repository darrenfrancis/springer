import Home_Page from "../page_objects/Home_Page.mjs";
import SearchResults_Page from "../page_objects/SearchResults_Page.mjs";
import Article_Page from "../page_objects/Article_Page.mjs";
import Order_Page from "../page_objects/Order_Page.mjs";




describe('User journey test', function () {
	it('Search for "permaculture food systems", filters search results to only show articles,view article info page, go to purchase article form', function(done) {
		browser.url("https://link.springer.com/");
		Home_Page.searchInput.setValue("permaculture food systems");
		Home_Page.searchButton.click();
		SearchResults_Page.filterArticle.click();
		SearchResults_Page.searchResultFirst.click()
		Article_Page.buyArticleButton.click();
		Order_Page.cartItems.waitForDisplayed();
	});
});

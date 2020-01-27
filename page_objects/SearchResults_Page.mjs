import Page from './Page'

class SearchResults_Page extends Page {
	constructor() {
		super()
	}

	/*****************************/
	/********* Selectors *********/
	/*****************************/

	get searchResultFirst() { return $("#results-list li:nth-child(1) h2 a");}
	get filterArticle() { return $ ("span*=Article")}

	/*****************************/
	/********** Methods **********/
	/*****************************/

}

export default new SearchResults_Page()
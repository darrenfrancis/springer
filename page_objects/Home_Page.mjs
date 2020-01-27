import Page from './Page'

class Home_Page extends Page {
	constructor() {
		super()
	}

	/*****************************/
	/********* Selectors *********/
	/*****************************/

	get searchInput() { return $("#query");}
	get searchButton() { return $("#search");}

	/*****************************/
	/********** Methods **********/
	/*****************************/

	open(path) {
		browser.url(path);
	}
}

export default new Home_Page()
import Page from './Page'

class Article_Page extends Page {
	constructor() {
		super()
	}

	/*****************************/
	/********* Selectors *********/
	/*****************************/

	get buyArticleButton() { return $("article[data-test-id='buy-article'] .c-box__button");}

	/*****************************/
	/********** Methods **********/
	/*****************************/

}

export default new Article_Page()
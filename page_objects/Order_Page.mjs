import Page from './Page'

class Order_Page extends Page {
	constructor() {
		super()
	}

	/*****************************/
	/********* Selectors *********/
	/*****************************/

	get cartItems() { return $(".your-items");}

	/*****************************/
	/********** Methods **********/
	/*****************************/

}

export default new Order_Page()
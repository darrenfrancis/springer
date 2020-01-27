export default class Page {
	constructor() {
		this.title = browser.getTitle();
	}

	open(path) {
		browser.url(path);
	}
}

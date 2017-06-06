'use strict'
	
class HomePage {

	constructor() {
		this.searchBox = element(by.css('#autocomplete'));
		this.selectElement=element(by.css('#auto_suggestions>div:first-child'));
	 }
	
	searchBar(text) {
          return this.searchBox.sendKeys(text);
     }
	
	selectSearchElement(){
		      return this.selectElement.click();
      }
	
 }

module.exports = HomePage;

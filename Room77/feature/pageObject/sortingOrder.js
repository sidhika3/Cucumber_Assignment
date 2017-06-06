'use strict'
class SortingOrder {

	constructor() {
		this.sortName=element(by.xpath("//em[@bo-text='sort|to_sort_name']"));
		this.selectElement=element(by.css('#auto_suggestions>div:first-child'));
		this.clickOnElement=element(by.xpath("//div[@class='sort_menu']//ul[@class='sort_list ng-scope']"));
		this.clickOnPrice=element(by.xpath("//div[@class='sort_menu']//ul[@class='dropdown-menu sort_ul']/li[2]"));
		this.resultElement = element(by.xpath("//em[@bo-text='sort|to_sort_name']"));
	 }
	verifySortingOrder()
	 {
		
		 this.sortName.getText().then(function(text){
				console.log("sorting order is "+text);
			
		 });
		 return this.sortName.getText();
     }
	changeSortingOrder(){
//		 browser.sleep(1000);
		browser.waitForAngular();
		 this.clickOnElement.click();
		 this.clickOnPrice.click();
	}
	
	verifySortingOrder1(){
		
		this.resultElement.getText().then(function(text){
			console.log("sorting order is "+text);
		
	 });
		return this.resultElement.getText();
//		this.resultElement.getText().then(function(value){
//			console.log("Sort Order : "+value);
//		})
	}
	
 }
module.exports = SortingOrder;
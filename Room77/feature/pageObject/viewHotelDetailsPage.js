'use strict';
	
class ViewHotelDetailsPage {

	constructor() {
		this.clickOnElement = element(by.xpath("//div[@class='info_container']//a//span[contains(text(),'Best Western Mornington Hotel London Hyde Park')]"));
		this.address=element(by.css('.clear:nth-child(1) .fact_content.ng-scope'));
		this.priceTab=element(by.css('.exp_card_tab_name_wrapper:nth-child(3)>div>a'));
		this.priceList = element.all(by.xpath("//td[@align='center']/span[@bo-text='rate|format_total']"));
		this.closeButton= element(by.css('.exp_card_tab_name_wrapper.serp_ico.tab_close>a'));
	 }
	
	clickOnHotel(){
		this.clickOnElement.click();
	}
	verifyAddress(){
		browser.waitForAngular();
		
		this.address.getText().then(function(value){
			console.log("Address is"+value);
		});
		return this.address.getText();
	}
	clickOnPriceTab(){
		
		this.priceTab.click();
		this.priceTab.getText().then(function(value){
			console.log("Text  is"+value);
		});
	}
	verifyLowestPrice(){
	
		this.priceList.each(function(element){
			element.getText().then(function(value){
				console.log("Rate : "+value);
			});
		 })
		}
	clickOnCloseTab(){
		this.closeButton.click();
		 
	}
 }

module.exports = ViewHotelDetailsPage;


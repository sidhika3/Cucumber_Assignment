'use strict'
class FilterPage {

	constructor() {
		
		this.clickOnElement=element(by.css('[ng-click="build_brands_dropdown=true"]'));
		this.selectAsbrand=element(by.css(".brand_search"));
		this.clickOnBrand = element(by.xpath("//div[@class='brand_overflow']//li//span[text()='Best Western']"));
		this.verifyHotel=element.all(by.xpath("//span[@bo-text='hotel.name']"))
		this.element1 = element(by.xpath("//ul//span[contains(@class,'hotel_classes')]//span[@class='pointer']"));
		this.element2 = element(by.xpath("//div[@class='rating_scale']/span[4]"));
		this.guestElement1 = element(by.xpath("//ul//span[contains(@class,'slider ng-isolate-scope')]//span[@class='pointer']"));
	    this.guestElement2 = element(by.xpath("//div[@class='review_scale']/span[8]"));
		this.hotelNamesList = element.all(by.xpath("//span[@bo-text='hotel.name']"));
		this.hotelRateList = element.all(by.css('[bo-text="hotel.stars"]'));
	 }
	selectBrand(){
		
		this.clickOnElement.click();
		
		this.selectAsbrand.sendKeys("Best Western");
		this.clickOnBrand.click();
		
		var hotelNamesList = this.verifyHotel;
		hotelNamesList.each(function(element){
			element.getText().then(function(value){
				if(value.startsWith("Best Western")){
					console.log("Hotel name : "+value);
				}
			});
		});
	}
   selectRating(){
	   this.clickOnElement.click();
		
		
		browser.actions().
		mouseDown(this.element1).
		mouseMove(this.element2).
		mouseUp().
		perform();
		
		
		browser.actions().dragAndDrop(this.guestElement1,this.guestElement2).perform();
		
		
		this.hotelNamesList.each(function(element){
			element.getText().then(function(value){
				if(value.startsWith("Best Western")){
					console.log("Hotel name : "+value);
				}
			});
		});
   }
   verifyCriteria(){
	  
		this.hotelRateList.each(function(element){
			element.getText().then(function(value){
				console.log("Rate : "+value);
			});
			
//			element.getText().then((value) => {
//		        expect(parseInt(value)).not.equal(5);
//		      })
		});
		
   }
 }

module.exports = FilterPage;

'use strict'
class UpdateSearch{
	
	constructor(){
		this.searchBox=element(by.css('#autocomplete'));
		this.selectElement=element(by.xpath("//div[@id='auto_suggestions']//span[@selenium-suggestion='hotels near London Zoo']"));
		this.checkIndate=element(by.xpath("//*[@id='autocomplete_wrapper']/div/span[2]"));
		this.nextMonth=element(by.className("next_month"));
		this.monthElement = element(by.xpath("//div[@class='calendar_month ng-scope left']//table/caption"));
		this.dateArray = element.all(by.xpath("//div[@class='calendar_month ng-scope left']//td"));
		this.dateArray1 = element.all(by.xpath("//div[@class='calendar_month ng-scope right']//td[contains(@class,'date_enabled')]"));
		this.updateButton=element(by.css(".search_button.btn>span"));
		this.hotelCount=element(by.css("[bo-show='remaining_hotels.length']"));
		this.resultCount = element(by.className("ng-scope ng-binding"));
	}
	
	updateSearchBar(task){
		this.searchBox.clear();
		this.searchBox.sendKeys(task);
		this.selectElement.click();
//		  browser.sleep(1000);
		browser.waitForAngular();
	}
	selectCheckInDate(){
		
		var currentDate = new Date();
		currentDate.setMonth(currentDate.getMonth()+1);
		currentDate.setDate(currentDate.getDate()+1);
		var date  = currentDate.getDate();
		console.log("Checkin Date : "+currentDate);
		console.log("date : "+date);
		
		this.checkIndate.click();
		this.nextMonth.click();
		
		this.monthElement.getText().then(function(value){
			console.log("Month : "+value);
		})
		
		this.dateArray.each(function(element,index){
			 element.getText().then(function(value){
				 if(value == date){
					 element.click();
				 }
			 });
		 });
	}
	
	selectCheckOutDate(){
		
		var currentDate = new Date();
		var tomorrow = new Date();
		tomorrow.setDate(currentDate.getDate()+15);
		console.log("New Date : "+tomorrow.getDate());
		tomorrow = tomorrow.getDate();
			
		
		this.dateArray1.each(function(element,index){
			element.getText().then(function(value){
				if(value == tomorrow){
					element.click();
				}
			})
		});
	}
	
	clickOnUpdateButton(){
		this.updateButton.click();	
	}
	
	verifyHotelList(){
//		browser.sleep(500);
		browser.waitForAngular();
		 this.hotelCount.getText().then(function(text){
			console.log("total is "+text);
			
		})
		return this.hotelCount.getText();
		this.resultCount.getText().then(function(value){
			console.log("Result value : "+value);
		})
	}
};
module.exports = UpdateSearch;
'use strict'
class SearchHotel{
	
	constructor(){
		this.checkInHighlighted=element(by.css("[ng-click='ShowCalendar(1);']"));
        this.tommorrowDate =element.all(by.xpath("//div[@class='calendar_month ng-scope left']//td[contains(@class,'date_enabled')]"));
        this.checkOutDate =element.all(by.xpath("//div[@class='calendar_month ng-scope right']//td[contains(@class,'date_enabled')]"));
        this.selectGuest = element(by.model('params.num_guests'));
        this.selectRoom = element(by.model("params.num_rooms"));
        this.searchButton=element(by.className("search_button btn"));
        this.hotelCount=element(by.className("ng-scope ng-binding"));
	}
	checkInHighlighted() {
        return this.checkInHighlighted.getText();
   }
	selectTommorrowDate(){
		
		var currentDate = new Date();
		currentDate.setDate(currentDate.getDate()+1);
		var date  = currentDate.getDate();
		var dateArray = this.tommorrowDate;
		
		 dateArray.each(function(element,index){
			 element.getText().then(function(value){
				 
				 if(value == date){
					 element.click();
				 }
			 })
		 })
	}
	
	// Select date after two weeks as check-out date
	selectCheckOutDate(){
		
		var currentDate = new Date();
		var tomorrow = new Date();
	    tomorrow.setDate(currentDate.getDate()+15);
		console.log("New Date : "+tomorrow.getDate());
		tomorrow = tomorrow.getDate();
		var dateArray1 = this.checkOutDate;	
		
		dateArray1.each(function(element,index){
			element.getText().then(function(value){
				if(value == tomorrow){
					element.click();
				}
			})
		})
	}
	
	selectNoOfGuests(task){
		
		var cssValue = '[value="'+task+'"]';
		console.log("value:"+cssValue);
		this.selectGuest.$(cssValue).click();
	}
	
	selectNoOfRooms(task){
		
		var cssValue = '[value="'+task+'"]';
		console.log("value:"+cssValue);
		this.selectRoom.$(cssValue).click();
	}
	
	clickOnSearch(){
		this.searchButton.click();
	}
    verifyHotelList(){
    	
    	this.hotelCount.getText().then(function(text){
			console.log("total hotel is "+text);
		
	 });
    	return this.hotelCount.getText();
		
    }
}
module.exports = SearchHotel;
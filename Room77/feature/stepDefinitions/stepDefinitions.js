var homePO = require('../pageObject/homePage.js');
home = new homePO();

var SearchHotelPO=require('../pageObject/SearchHotel.js');
searchhotel=new SearchHotelPO();

var updateSearchPO=require('../pageObject/updateSearch.js');
updateSearch=new updateSearchPO();

var sortingOrderPO=require('../pageObject/sortingOrder.js');
var sortingorder=new sortingOrderPO();

var filterPagePO=require('../pageObject/filterPage.js');
var filterPage=new filterPagePO();

var viewDetailsPO=require('../pageObject/viewHotelDetailsPage.js');
var viewDetails=new viewDetailsPO();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();

module.exports = function() {
	this.Given(/^I go to homepage$/, function() {
		browser.get('https://www.room77.com/').then();
		browser.waitForAngular();
	});

	// Enter "Argentina" in the search box
	this.When(/^Enter (.*) in the search box$/, function(place) {
		home.searchBar(place);
		home.selectSearchElement();
	});

	// Verify Check-in section is highlighted
	this.When(/^Verify Check-in section is highlighted$/, function() {
		//expect(searchhotel.checkInHighlighted()).to.exist;
		  
	});
	
	//Select tomorrow's date as check-in date
	this.When(/^Select tomorrow's date as check-in date$/, function(){
		searchhotel.selectTommorrowDate();
	});
	
	//Select date after two weeks as check-out date
	this.When(/^Select date after two weeks as check-out date$/,function(){
		searchhotel.selectCheckOutDate();
	});
	
	// Select as "4" number of guests
	this.When(/^Select as "([^"]*)" number of guests$/,function(task){
		searchhotel.selectNoOfGuests(task);
	});
	
	//Select as "2" number of rooms
	this.When(/^Select as "([^"]*)" number of rooms$/,function(task){	
		searchhotel.selectNoOfRooms(task);
	});
	
	// Click on search button
	this.When(/^Click on search button$/,function(){
		searchhotel.clickOnSearch();
	});
	
	//Verify the list of hotels gets populated
	this.Then(/^Verify the list of hotels gets populated$/, function(){   
		expect(searchhotel.verifyHotelList()).to.eventually.equal('1 Hotels');
	});
	
	//Perform next search and Enter "london" in search box
	this.When(/^Perform next search and Enter "([^"]*)" in search box$/, function(task){
		updateSearch.updateSearchBar(task);
	});
	
	//Select check in date
	this.When(/^Select check in date$/,function(){
		updateSearch.selectCheckInDate();
	});
	
	// Select check out date of new search
	this.When(/^Select check out date of new search$/, function(){
		updateSearch.selectCheckOutDate();
	});
	
	//Click on update search button
	this.When(/^Click on update search button$/, function(){
		updateSearch.clickOnUpdateButton();
	});
	
	//Verify it populates list of hotels
	this.Then(/^Verify it populates list of hotels$/,function(){
	     
	expect(updateSearch.verifyHotelList()).to.eventually.equal('500 Hotels');
	});
	
	//Verify the default sorting order is Distance
	this.Then(/^Verify the default sorting order is Distance$/, function() {
	
	expect(sortingorder.verifySortingOrder()).to.eventually.equal('Distance');
		

	});
	
	//Change sort order to price  
	this.Then(/^Change sort order to price$/,function(){
		sortingorder.changeSortingOrder();
	});
	
	this.Then(/^Check if hotels are sorted by price$/,function(){
		browser.waitForAngular();
		 //browser.wait(protractor.wait(protractor.ExpectedConditions(,6000)))
		expect(sortingorder.verifySortingOrder1()).to.eventually.equal('Price');
		
	});
	
	//Should enter brand as Best Western
	this.When(/^Should enter brand as Best Western$/,function(){
		filterPage.selectBrand();
	});
	
	//Should enter number of ratings
	this.When(/^Should enter number of ratings$/,function(){
		filterPage.selectRating();
	});
	
	//Should check if listed hotels satisfies the criteria or not
	this.Then(/^Should check if listed hotels satisfies the criteria or not$/,function(){
		filterPage.verifyCriteria();
	});
	// Click on the first hotel listed
	this.When(/^Click on the first hotel listed$/,function(){
		viewDetails.clickOnHotel();
	});
	//Verify the address contains London
	this.Then(/^Verify the address contains London$/, function(){
		//viewDetails.verifyAddress();
		viewDetails.verifyAddress().then(function(value){
			expect(value).to.contain('London');
			console.log("Address is"+value);
		});
	});
	// Click on Price tab
    this.When(/^Click on Price tab$/,function(){
    	viewDetails.clickOnPriceTab();
    });
  //Verify the lowest price among all deals and the site name is showing at the top
	this.Then(/^Verify the lowest price among all deals and the site name is showing at the top$/,function(){
		viewDetails.verifyLowestPrice();
	});
	

//Click the close button and verify it closes the expanded detail of the hotel
this.Then(/^Click the close button and verify it closes the expanded detail of the hotel$/,function(){
	viewDetails.clickOnCloseTab();
});	
	
};

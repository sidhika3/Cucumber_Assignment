Feature: Running Cucumber with Protractor Example
	As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

#In This Scenerio, we search for a place "Argentina" and select checkIn and checkOut Date and also select number of guests and 
#rooms which u want and click On Search button,Then Verify the hotel list which is populated to the screen...

Scenario Outline: Search for a hotel 
	Given I go to homepage 
	When Enter <place> in the search box 
	When Verify Check-in section is highlighted 
	When Select tomorrow's date as check-in date 
	When Select date after two weeks as check-out date 
	When Select as "4" number of guests 
	When Select as "2" number of rooms 
	When Click on search button 
	Then Verify the list of hotels gets populated 
	Examples:
  | place  |
  | Argentina |
  
  
  
#In this Scenerio, we upadate search bar by the place "London"and select checkIn date of next month and checkOut date.and click on update 
# search Button,Then  Verify the hotel list which is populated to the screen...	
Scenario: Update search 
	When Perform next search and Enter "london" in search box 
	When Select check in date 
	When Select check out date of new search 
	When Click on update search button 
	Then Verify it populates list of hotels 
	
	
#In this Scenerio ,we first verify that sorting order is distance or not,and Then Change the sorting order to Price ,Then check
#if hotel which are populated are sorted by price or not...
Scenario: Sorting order verification 
	Then Verify the default sorting order is Distance 
	Then Change sort order to price 
	Then Check if hotels are sorted by price 
	
	
#In this Scenerio,we select brand of hotel as "Best Western" from the dropdown,and select rating of	hotel as Star Rating as "3Star"
#and Minimum guest rating as "70", and Then check if hotel list are satisfies with given condition.
Scenario: Filter result verification 
	When Should enter brand as Best Western 
	When Should enter number of ratings 
	Then Should check if listed hotels satisfies the criteria or not 
	

#In this Scenerio.We selects first hotel which is populated in the list and then verify that address is from London or not.
#click on price tab of that hotel and Verify the lowest price among all deals and the site name is showing at the top 
#Then click On close button of that hotel which populated and then verify it closes the expanded detail of the hotel 
	
Scenario: View details of a hotel 
	When Click on the first hotel listed 
	Then Verify the address contains London 
	When Click on Price tab 
	Then Verify the lowest price among all deals and the site name is showing at the top 
	Then Click the close button and verify it closes the expanded detail of the hotel 
	
	
	
	
	
	
	
      
Feature: Login Test
  User Should able to login into nop commerce website



  Scenario: User should navigate to login page successfully
    Given User on homepage
    When User click on login link
    And User verify the Welcome, Please Sign In! message display


  Scenario:Verify That User Should Login Successfully With Valid Credentials
    When User click on login link
    And User enter emailField "road@gmail.com"
    And User enter passwordField "121212"
    And User click on login button
    Then User verify Log out link display

  Scenario:verify The Error Message With  InValid Credentials
    When User click on login link
    And User enter emailField "rod@gmail.com"
    And User enter passwordField "121212"
    And User click on login button
    Then User verify the error message display

  Scenario:verify That User Should LogOut SuccessFully
    When User click on login link
    And User enter emailField "rat@gmail.com"
    And User enter passwordField "121212"
    And User click on login button
    And User click on log out link
    And User verify Login link display


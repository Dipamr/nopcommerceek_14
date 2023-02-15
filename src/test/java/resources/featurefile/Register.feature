Feature: Register
  User should able to Register successfully

  Scenario: verify User Should Navigate To Register Page  successfully
    Given User on homepage
    When User click on register link
    And  User verify Register Text "Register"
  Scenario: verify That FirstName LastName Email Password and ConfirmPassword Fields are Mandatory
    Then User click on Register link
    And User click on First name is required ""
    And User click on Last name is required ""
    And User click on Email is required""
    And User click on Password  is required""
    And User click on Confirmpassword  is required ""
  Scenario: verify That User Should Create Account Successfully
    Given User click on Register link
    Then User click on maleradiobutton
    Then User click on femaleradiobutton
    And User click on Firstnamefield "bat"
    And User click on Lastnamefield "patel"
    And User click on Dateofbirthbutton "14"
    And User click on Monthofbirthbutton "10"
    And User click on Yearofbirthbutton "1930"
    And User click on enterEmailfield "bat@gmail.com"
    And User click on entrepasswordfieldfield "191919"
    And user click on entreConfirmpasswordfield "191919"
    And User click on Registerbutton
    And User verify message  Your Registration completed
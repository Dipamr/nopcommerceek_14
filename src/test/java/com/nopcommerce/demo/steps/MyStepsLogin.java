package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsLogin {
    @Given("^User on homepage$")
    public void user_on_homepage()  {

    }

    @When("^User click on login link$")
    public void user_click_on_login_link()  {
        new LoginPage().clickOnloginlink();

    }

    @And("^User verify the Welcome, Please Sign In! message display$")
    public void user_verify_the_Welcome_Please_Sign_In_message_display()  {
        new LoginPage().getWelcomeText();
    }

    @And("^User enter emailField \"([^\"]*)\"$")
    public void user_enter_emailField(String eml)  {
        new LoginPage().enteremailField(eml);

    }

    @And("^User enter passwordField \"([^\"]*)\"$")
    public void user_enter_passwordField(String psw)  {
        new LoginPage().enterpasswordField(psw);

    }

    @And("^User click on login button$")
    public void user_click_on_login_button()  {
        new LoginPage().clickOnloginbutton();
    }

    @Then("^User verify Log out link display$")
    public void user_verify_Log_out_link_display()  {
        new LoginPage().clickOnLogOutLink();
    }

    @Then("^User verify the error message display$")
    public void user_verify_the_error_message_display()  {
        new LoginPage().getErrorMessage();
    }

    @And("^User click on log out link$")
    public void user_click_on_log_out_link()  {
        new LoginPage().clickOnLogOutLink();
    }

    @And("^User verify Login link display$")
    public void user_verify_Login_link_display()  {

    }
}

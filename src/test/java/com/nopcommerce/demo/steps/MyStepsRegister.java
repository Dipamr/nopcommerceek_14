package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyStepsRegister {
    @When("^User click on register link$")
    public void user_click_on_register_link()  {
        new RegisterPage().clickOnRegisterLink();
    }

    @And("^User verify RegisterText$")
    public void user_verify_RegisterText(String reg)  {
//        new RegisterPage().RegisterText();
        Assert.assertEquals(reg,new RegisterPage().RegisterText(reg));
    }

//    @Then("^User click on Register link$")
//    public void userClickOnRegisterLink() {
//    }

    @And("^User click on First name is required \"([^\"]*)\"$")
    public void userClickOnFirstNameIsRequired(String nam)  {
        new RegisterPage().Firstnamerequired(nam);

    }

    @And("^User click on Last name is required \"([^\"]*)\"$")
    public void userClickOnLastNameIsRequired(String Lnam)  {
        new RegisterPage().Lastnamerequired(Lnam);

    }

    @And("^User click on Email is required\"([^\"]*)\"$")
    public void userClickOnEmailIsRequired(String eml)  {
       new RegisterPage().Emailrequired(eml);
    }

    @And("^User click on Password  is required\"([^\"]*)\"$")
    public void userClickOnPasswordIsRequired(String ps)  {
        new RegisterPage().Passwordrequired(ps);
    }

    @And("^User click on Confirmpassword  is required \"([^\"]*)\"$")
    public void userClickOnConfirmpasswordIsRequired(String cpw)  {
        new RegisterPage().Confirmpasswordrequired(cpw);

    }

    @Then("^User click on maleradiobutton$")
    public void userClickOnMaleradiobutton() {
        new RegisterPage().clickOnmaleradiobutton();
    }

    @Then("^User click on femaleradiobutton$")
    public void userClickOnFemaleradiobutton() {
        new RegisterPage().clickOnfemaleradiobutton();
    }

    @And("^User click on Firstnamefield \"([^\"]*)\"$")
    public void userClickOnFirstnamefield(String fnam)  {
      new  RegisterPage().clickOnenterEmailfield(fnam);
    }

    @And("^User click on Lastnamefield \"([^\"]*)\"$")
    public void userClickOnLastnamefield(String pw)  {
        new RegisterPage().clickOnenterPasswordfield(pw);
    }

    @And("^User click on Dateofbirthbutton \"([^\"]*)\"$")
    public void userClickOnDateofbirthbutton(String dob)  {
       new RegisterPage().clickOnDateofBirth();
    }

    @And("^User click on Monthofbirthbutton \"([^\"]*)\"$")
    public void userClickOnMonthofbirthbutton(String mob)  {
      new RegisterPage().clickOnMonthofBirth();
    }

    @And("^User click on Yearofbirthbutton \"([^\"]*)\"$")
    public void userClickOnYearofbirthbutton(String yob)  {
        new RegisterPage().clickOnYearofBirth();
    }

    @And("^User click on enterEmailfield \"([^\"]*)\"$")
    public void userClickOnEnterEmailfield(String emf)  {
       new RegisterPage().clickOnenterEmailfield(emf);
    }

    @And("^User click on entrepasswordfieldfield \"([^\"]*)\"$")
    public void userClickOnEntrepasswordfieldfield(String ps)  {
        new RegisterPage().clickOnenterPasswordfield(ps);
    }

    @And("^user click on entreConfirmpasswordfield \"([^\"]*)\"$")
    public void userClickOnEntreConfirmpasswordfield(String cp)  {
        new RegisterPage().clickOnenterConfirmpasswordfield(cp);
    }

    @And("^User click on Registerbutton$")
    public void userClickOnRegisterbutton() {
        new RegisterPage().clickOnRegisterbutton();
    }

    @And("^User verify message  Your Registration completed$")
    public void userVerifyMessageYourRegistrationCompleted() {
    }

    @Then("^User click on Register link$")
    public void userClickOnRegisterLink() {
        new RegisterPage().clickOnRegisterLink();
    }

    @And("^User verify Register Text \"([^\"]*)\"$")
    public void userVerifyRegisterText(String arg0)  {

    }
}

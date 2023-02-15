package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement registerLink;
    @CacheLookup
    @FindBy(xpath = "//div[@class='page-title']/h1")
    WebElement RegisterText;
    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement maleradiobutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femaleradiobutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement enterFirstnamefield;
    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement enterLastnamefield;
    @CacheLookup
    @FindBy(xpath = "//div[@class='inputs date-of-birth']/div/select[1]")
    WebElement Dateofbirthbutton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='inputs date-of-birth']/div/select[2]")
    WebElement Monthofbirthbutton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='inputs date-of-birth']/div/select[3]")
    WebElement Yearofbirthbutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement enterEmailfield;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement enterPasswordfield;
    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement enterConfirmpasswordfield;
    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement clickOnRegisterButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMsg;
    @CacheLookup
    @FindBy(xpath = "//div[@class='result']")
    WebElement RegistrationcompletedText;
    @CacheLookup
    @FindBy(xpath = "//div[@class='result']")
    WebElement ContinueButton;
    @CacheLookup
    @FindBy(id = "FirstName-error")
    WebElement FirstnameRequired;
    @CacheLookup
    @FindBy(id = "LastName-error")
    WebElement LastNameRequired;
    @CacheLookup
    @FindBy(id = "Email-error")
    WebElement EmailRequired;
    @CacheLookup
    @FindBy(id = "Password-error")
    WebElement PasswordRequired;
    @CacheLookup
    @FindBy(id = "ConfirmPassword-error")
    WebElement ConfirmPasswordRequired;

    public void clickOnRegisterLink() {
        clickOnElement(registerLink);
    }

    public String RegisterText(String reg) {
        return getTextFromElement(RegisterText);
    }

    public void clickOnmaleradiobutton() {
        clickOnElement(maleradiobutton);
    }

    public void clickOnfemaleradiobutton() {
        clickOnElement(femaleradiobutton);

    }

    public void enterEmailfield() {
        clickOnElement(enterFirstnamefield);
    }

    public void enterLastnamefield() {
        clickOnElement(enterLastnamefield);
    }

    public void clickOnDateofBirth() {
        clickOnElement(Dateofbirthbutton);
    }

    public void clickOnMonthofBirth() {
        clickOnElement(Monthofbirthbutton);
    }

    public void clickOnYearofBirth() {
        clickOnElement(Yearofbirthbutton);
    }

    public void clickOnenterEmailfield(String s) {
        clickOnElement(enterEmailfield);

    }

    public void clickOnenterPasswordfield(String s) {
        clickOnElement(enterPasswordfield);

    }

    public void clickOnenterConfirmpasswordfield(String s) {
        clickOnElement(enterConfirmpasswordfield);

    }

    public void clickOnRegisterbutton() {
        clickOnElement(clickOnRegisterButton);
    }

    public String RegistrationcompletedText() {
        return getTextFromElement(RegistrationcompletedText);
    }

    public void clickOnContinueButton() {
        clickOnElement(ContinueButton);

    }

    public String Emailrequired(String eml) {
        return getTextFromElement(EmailRequired);
    }


    public String Firstnamerequired(String name) {
        return getTextFromElement(FirstnameRequired);

    }

    public String Lastnamerequired(String lname) {
        return getTextFromElement(LastNameRequired);
    }

    public String Passwordrequired(String psw) {
        return getTextFromElement(PasswordRequired);
    }

    public String Confirmpasswordrequired(String cpsw) {
        return getTextFromElement(ConfirmPasswordRequired);
    }

    public void loginToApplication(String Register) {
        clickOnRegisterLink();


    }

    public void loginToApplication(RegisterPage registerPage) {
        clickOnRegisterLink();
    }
}





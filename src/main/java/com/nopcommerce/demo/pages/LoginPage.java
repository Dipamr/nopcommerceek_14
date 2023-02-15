package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());


    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;
    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-login']")
    WebElement loginlink;
    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;
    @CacheLookup
    @FindBy(xpath = "//button[@class='button-1 login-button']")
    WebElement loginbutton;
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-logout']")
    WebElement LogoutLink;

    public void clickOnloginlink() {
        clickOnElement(loginlink);
    }

    public String getWelcomeText() {
        log.info("getting text from : " + welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

    public void enteremailField(String email) {
        sendTextToElement(emailField, email);
    }

    public void enterpasswordField(String password) {
        sendTextToElement(passwordField, password);
    }

    public void clickOnloginbutton() {
        clickOnElement(loginbutton);
    }

    public void clickOnLogOutLink() {
        clickOnElement(LogoutLink);
    }

    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
    }

    public void loginToApplication(String email, String password) {
        clickOnloginlink();
        enteremailField(email);
        enterpasswordField(password);
        clickOnloginbutton();
        clickOnLogOutLink();
    }
}




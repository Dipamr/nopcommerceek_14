package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());


    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li[1]/a")
    WebElement Computers;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li[1]")
    WebElement ComputerText;
    @CacheLookup
    @FindBy(xpath = "//div[@class='page-body']/div[1]/div[1]/div[1]/div[1]/h2/a")
    WebElement DesktopsLink;
    @CacheLookup
    @FindBy(xpath = "//h2[@class='product-title']/a[contains(text(),'Build your own computer')]")
    WebElement BuildyourowncomputerText;
    @CacheLookup
    @FindBy(linkText = "Build your own computer")
    WebElement Buildyourowncomputer;
    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement ProcessorDropDown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement RamDropDown;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement HDDradiosbutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement OSradiosbutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement Softwarecheckboxesbutton;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement Addtocartbutton;
    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-cart']/span[2]")
    WebElement Addedtoyourshoppingcartbutton;

    public String getComputerText() {
        return getTextFromElement(ComputerText);
    }

    public void clickOnDesktopsLink() {
        clickOnElement(DesktopsLink);


    }

    public void ClickOnBuildyourowncomputer() {
        clickOnElement(Buildyourowncomputer);
    }

    public void RamDropDownLink(String ram) {
        clickOnElement(RamDropDown);
    }

    public void ProcessorDropDownLink(String processor) {
        clickOnElement(ProcessorDropDown);
    }

    public void clickOnHDDradiosbutton(String hdd) {
        clickOnElement(HDDradiosbutton);
    }

    public void clickOnOSradiosbutton(String os) {
        clickOnElement(OSradiosbutton);
    }

    public void clickOnSoftwarecheckboxesbutton(String software) {
        clickOnElement(Softwarecheckboxesbutton);
    }

    public void clickOnAddtocartbutton(String ac) {
        clickOnElement(Addtocartbutton);
    }

    public void clickOnAddedtoyourshoppingcartbutton() {
        clickOnElement(Addedtoyourshoppingcartbutton);
    }

    public void makeyourown(String processor, String ram, String hdd, String os, String software) {
        ProcessorDropDownLink(processor);
        RamDropDownLink(ram);
        clickOnHDDradiosbutton(hdd);
        clickOnOSradiosbutton(os);
        clickOnSoftwarecheckboxesbutton(software);
    }
}

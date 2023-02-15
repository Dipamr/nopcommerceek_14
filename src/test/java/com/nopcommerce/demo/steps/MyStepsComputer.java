package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;

public class MyStepsComputer {
    @And("^click on Computer tab$")
    public void click_on_Computer_tab()  {
        new ComputerPage().getComputerText();
    }

    @And("^click on Desktops link$")
    public void click_on_Desktops_link()  {
        new ComputerPage().clickOnDesktopsLink();
    }

    @And("^click on product name Build your own computer$")
    public void click_on_product_name_Build_your_own_computer()  {
        new ComputerPage().ClickOnBuildyourowncomputer();
    }

    @And("^select processor \"([^\"]*)\"$")
    public void select_processor(String pro)  {
       new ComputerPage().ProcessorDropDownLink(pro);
    }

    @And("^select Ram \"([^\"]*)\"$")
    public void select_Ram(String rm)  {
       new ComputerPage().RamDropDownLink(rm);
    }

    @And("^select HDD \"([^\"]*)\"$")
    public void select_HDD(String hd )  {
       new ComputerPage().clickOnHDDradiosbutton(hd);
    }

    @And("^select OS \"([^\"]*)\"\\]\"$")
    public void select_OS(String s)  {
       new ComputerPage().clickOnOSradiosbutton(s);
    }

    @And("^select Software \"([^\"]*)\"$")
    public void select_Software(String sw)  {
       new ComputerPage().clickOnSoftwarecheckboxesbutton(sw);
    }

    @And("^click on Add to cart button \"([^\"]*)\">$")
    public void click_on_Add_to_cart_button(String ac)  {
     new ComputerPage().clickOnAddtocartbutton(ac);
    }



    }


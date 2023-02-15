$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "User should able to build computer",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 47218345300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify user Should Navigate To Computer Page Successfully",
  "description": "User click on computer tab\r\nUser able to verify Computer Text",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.after({
  "duration": 895103800,
  "status": "passed"
});
formatter.before({
  "duration": 6481057600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "verify user Should Navigate To Desktops Page Successfully",
  "description": "User click on computer tab\r\nUser click on Desktops link\r\nUser verify Desktops text",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.after({
  "duration": 851826500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "verify That User should Build your own Computer And add Them To cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Add to cart button \"\u003cAdd to Cart\"\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 26,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2Ghz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00\"]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 27,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5Ghz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4 GB[+$20.00]",
        "400 GB [+$100.00]",
        "\"Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 28,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 Ghz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander[+$5.00]"
      ],
      "line": 29,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7505129300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify That User should Build your own Computer And add Them To cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select processor \"2.2Ghz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select OS \"Vista Home [+$50.00\"]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Add to cart button \"\u003cAdd to Cart\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_on_homepage()"
});
formatter.result({
  "duration": 420658000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Computer_tab()"
});
formatter.result({
  "duration": 127005000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Desktops_link()"
});
formatter.result({
  "duration": 20643631400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dfc0db7bcfd1fb13783b01408cb2bdef, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52684}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52684/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dfc0db7bcfd1fb13783b01408cb2bdef\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopsLink(ComputerPage.java:61)\r\n\tat com.nopcommerce.demo.steps.MyStepsComputer.click_on_Desktops_link(MyStepsComputer.java:15)\r\n\tat ✽.And click on Desktops link(src/test/java/resources/featurefile/Computer.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_product_name_Build_your_own_computer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2Ghz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "MyStepsComputer.select_processor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_Ram(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_HDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00",
      "offset": 11
    }
  ],
  "location": "MyStepsComputer.select_OS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "MyStepsComputer.select_Software(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAdd to Cart",
      "offset": 29
    }
  ],
  "location": "MyStepsComputer.click_on_Add_to_cart_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2296549500,
  "status": "passed"
});
formatter.before({
  "duration": 8725132000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify That User should Build your own Computer And add Them To cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select processor \"2.5Ghz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Ram \"4 GB[+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select OS \"\"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Add to cart button \"\u003cAdd to Cart\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_on_homepage()"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Computer_tab()"
});
formatter.result({
  "duration": 118111200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Desktops_link()"
});
formatter.result({
  "duration": 20035302900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [61cc3fff54ee954f12cc0d25fcb6e52d, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52703}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52703/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 61cc3fff54ee954f12cc0d25fcb6e52d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopsLink(ComputerPage.java:61)\r\n\tat com.nopcommerce.demo.steps.MyStepsComputer.click_on_Desktops_link(MyStepsComputer.java:15)\r\n\tat ✽.And click on Desktops link(src/test/java/resources/featurefile/Computer.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_product_name_Build_your_own_computer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5Ghz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "MyStepsComputer.select_processor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 GB[+$20.00]",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_Ram(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_HDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "MyStepsComputer.select_Software(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAdd to Cart",
      "offset": 29
    }
  ],
  "location": "MyStepsComputer.click_on_Add_to_cart_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1599347000,
  "status": "passed"
});
formatter.before({
  "duration": 20947948800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify That User should Build your own Computer And add Them To cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select processor \"2.5 Ghz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Software \"Total Commander[+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Add to cart button \"\u003cAdd to Cart\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_on_homepage()"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Computer_tab()"
});
formatter.result({
  "duration": 116470600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_Desktops_link()"
});
formatter.result({
  "duration": 20058615600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e86a93d8d35813984c6fda6cb1f7c414, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027page-body\u0027]/div[1]/div[1]/div[1]/div[1]/h2/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52723}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52723/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e86a93d8d35813984c6fda6cb1f7c414\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopsLink(ComputerPage.java:61)\r\n\tat com.nopcommerce.demo.steps.MyStepsComputer.click_on_Desktops_link(MyStepsComputer.java:15)\r\n\tat ✽.And click on Desktops link(src/test/java/resources/featurefile/Computer.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsComputer.click_on_product_name_Build_your_own_computer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 Ghz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "MyStepsComputer.select_processor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_Ram(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "MyStepsComputer.select_HDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander[+$5.00]",
      "offset": 17
    }
  ],
  "location": "MyStepsComputer.select_Software(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAdd to Cart",
      "offset": 29
    }
  ],
  "location": "MyStepsComputer.click_on_Add_to_cart_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1328872100,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "User Should able to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6904175000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User verify the Welcome, Please Sign In! message display",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_on_homepage()"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_link()"
});
formatter.result({
  "duration": 1187547300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_verify_the_Welcome_Please_Sign_In_message_display()"
});
formatter.result({
  "duration": 138016300,
  "status": "passed"
});
formatter.after({
  "duration": 753469400,
  "status": "passed"
});
formatter.before({
  "duration": 7669191600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify That User Should Login Successfully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter emailField \"road@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter passwordField \"121212\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Log out link display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_link()"
});
formatter.result({
  "duration": 1091018600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "road@gmail.com",
      "offset": 23
    }
  ],
  "location": "MyStepsLogin.user_enter_emailField(String)"
});
formatter.result({
  "duration": 152967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121212",
      "offset": 26
    }
  ],
  "location": "MyStepsLogin.user_enter_passwordField(String)"
});
formatter.result({
  "duration": 152784100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 741480200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_verify_Log_out_link_display()"
});
formatter.result({
  "duration": 20022186100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2dc7c153f9a660fa12294df1f73fa963, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53243}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53243/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2dc7c153f9a660fa12294df1f73fa963\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.LoginPage.clickOnLogOutLink(LoginPage.java:63)\r\n\tat com.nopcommerce.demo.steps.MyStepsLogin.user_verify_Log_out_link_display(MyStepsLogin.java:46)\r\n\tat ✽.Then User verify Log out link display(src/test/java/resources/featurefile/Login.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1631707400,
  "status": "passed"
});
formatter.before({
  "duration": 8761073700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify The Error Message With  InValid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter emailField \"rod@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter passwordField \"121212\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify the error message display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_link()"
});
formatter.result({
  "duration": 1127427800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rod@gmail.com",
      "offset": 23
    }
  ],
  "location": "MyStepsLogin.user_enter_emailField(String)"
});
formatter.result({
  "duration": 133340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121212",
      "offset": 26
    }
  ],
  "location": "MyStepsLogin.user_enter_passwordField(String)"
});
formatter.result({
  "duration": 131048100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 494609900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_verify_the_error_message_display()"
});
formatter.result({
  "duration": 58584900,
  "status": "passed"
});
formatter.after({
  "duration": 984656000,
  "status": "passed"
});
formatter.before({
  "duration": 6719943500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter emailField \"rat@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enter passwordField \"121212\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify Login link display",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_link()"
});
formatter.result({
  "duration": 1141735700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rat@gmail.com",
      "offset": 23
    }
  ],
  "location": "MyStepsLogin.user_enter_emailField(String)"
});
formatter.result({
  "duration": 121286600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121212",
      "offset": 26
    }
  ],
  "location": "MyStepsLogin.user_enter_passwordField(String)"
});
formatter.result({
  "duration": 115033500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 497437300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsLogin.user_click_on_log_out_link()"
});
formatter.result({
  "duration": 20110989200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8b730de2dd99baa15365136698e4a065, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53280}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53280/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8b730de2dd99baa15365136698e4a065\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.LoginPage.clickOnLogOutLink(LoginPage.java:63)\r\n\tat com.nopcommerce.demo.steps.MyStepsLogin.user_click_on_log_out_link(MyStepsLogin.java:56)\r\n\tat ✽.And User click on log out link(src/test/java/resources/featurefile/Login.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsLogin.user_verify_Login_link_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1021795700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "User should able to Register successfully",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4949576900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify User Should Navigate To Register Page  successfully",
  "description": "",
  "id": "register;verify-user-should-navigate-to-register-page--successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify Register Text \"Register\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsLogin.user_on_homepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsRegister.user_click_on_register_link()"
});
formatter.result({
  "duration": 654279800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 27
    }
  ],
  "location": "MyStepsRegister.userVerifyRegisterText(String)"
});
formatter.result({
  "duration": 58500,
  "status": "passed"
});
formatter.after({
  "duration": 756291100,
  "status": "passed"
});
formatter.before({
  "duration": 5905743800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "verify That FirstName LastName Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User click on Register link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on First name is required \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Last name is required \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on Email is required\"\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Password  is required\"\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Confirmpassword  is required \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsRegister.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 839309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "MyStepsRegister.userClickOnFirstNameIsRequired(String)"
});
formatter.result({
  "duration": 20101643500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#FirstName\\-error\"}\n  (Session info: chrome\u003d110.0.5481.96)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6635b46e3b0146e1653c61ddc23a521d, findElement {using\u003did, value\u003dFirstName-error}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53315}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53315/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6635b46e3b0146e1653c61ddc23a521d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.Firstnamerequired(RegisterPage.java:153)\r\n\tat com.nopcommerce.demo.steps.MyStepsRegister.userClickOnFirstNameIsRequired(MyStepsRegister.java:28)\r\n\tat ✽.And User click on First name is required \"\"(src/test/java/resources/featurefile/Register.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MyStepsRegister.userClickOnLastNameIsRequired(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "MyStepsRegister.userClickOnEmailIsRequired(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "MyStepsRegister.userClickOnPasswordIsRequired(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "MyStepsRegister.userClickOnConfirmpasswordIsRequired(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1009698100,
  "status": "passed"
});
formatter.before({
  "duration": 6517559900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User click on Register link",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on maleradiobutton",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on femaleradiobutton",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User click on Firstnamefield \"bat\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Lastnamefield \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Dateofbirthbutton \"14\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Monthofbirthbutton \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on Yearofbirthbutton \"1930\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on enterEmailfield \"bat@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on entrepasswordfieldfield \"191919\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user click on entreConfirmpasswordfield \"191919\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Registerbutton",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User verify message  Your Registration completed",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsRegister.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1136319600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsRegister.userClickOnMaleradiobutton()"
});
formatter.result({
  "duration": 98585600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsRegister.userClickOnFemaleradiobutton()"
});
formatter.result({
  "duration": 76135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bat",
      "offset": 30
    }
  ],
  "location": "MyStepsRegister.userClickOnFirstnamefield(String)"
});
formatter.result({
  "duration": 97969200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 29
    }
  ],
  "location": "MyStepsRegister.userClickOnLastnamefield(String)"
});
formatter.result({
  "duration": 83919500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 33
    }
  ],
  "location": "MyStepsRegister.userClickOnDateofbirthbutton(String)"
});
formatter.result({
  "duration": 135524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 34
    }
  ],
  "location": "MyStepsRegister.userClickOnMonthofbirthbutton(String)"
});
formatter.result({
  "duration": 788246800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1930",
      "offset": 33
    }
  ],
  "location": "MyStepsRegister.userClickOnYearofbirthbutton(String)"
});
formatter.result({
  "duration": 140983700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bat@gmail.com",
      "offset": 31
    }
  ],
  "location": "MyStepsRegister.userClickOnEnterEmailfield(String)"
});
formatter.result({
  "duration": 84709100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "191919",
      "offset": 39
    }
  ],
  "location": "MyStepsRegister.userClickOnEntrepasswordfieldfield(String)"
});
formatter.result({
  "duration": 67649300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "191919",
      "offset": 41
    }
  ],
  "location": "MyStepsRegister.userClickOnEntreConfirmpasswordfield(String)"
});
formatter.result({
  "duration": 96891200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsRegister.userClickOnRegisterbutton()"
});
formatter.result({
  "duration": 101606300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsRegister.userVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 163800,
  "status": "passed"
});
formatter.after({
  "duration": 759126900,
  "status": "passed"
});
});
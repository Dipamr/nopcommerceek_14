Feature: Computer Page Test
  User should able to build computer

  Scenario: verify user Should Navigate To Computer Page Successfully
  User click on computer tab
  User able to verify Computer Text

  Scenario: verify user Should Navigate To Desktops Page Successfully
  User click on computer tab
  User click on Desktops link
  User verify Desktops text

  Scenario Outline: verify That User should Build your own Computer And add Them To cart successfully
    Given User on homepage
    And click on Computer tab
    And click on Desktops link
    And click on product name Build your own computer
    And select processor "<processor>"
    And select Ram "<ram>"
    And select HDD "<hdd>"
    And select OS "<os>"

    And select Software "<software>"
    And click on Add to cart button "<Add to Cart">
    Examples:
      | processor                                       | ram           | hdd               | os                       | software                   |
      | 2.2Ghz Intel Pentium Dual-Core E2200            | 2 GB          | 320 GB            | Vista Home [+$50.00"]    | Microsoft Office [+$50.00] |
      | 2.5Ghz Intel Pentium Dual-Core E2200 [+$15.00]  | 4 GB[+$20.00] | 400 GB [+$100.00] | "Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 Ghz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]     | Total Commander[+$5.00]    |


# _Currency Exchanger Application_

#### _Application to accept input of an amount of money in U.S.D., and will output amount converted into a foreign currency selected by user, 11.20.2020_

#### By _**Nathan Schrader**_

## Description
This web application was created as an independent project in Week 6 of Epicodus, a fulltime coding school that is 6 months long. In this project I implement a currency exchange API from `https://www.exchangerate-api.com`, then code business logic in JavaScript that allows a user to input an amount of money in U.S. Dollars and convert it into one of 5 different currencies.

In addition, the application makes use of the `Date()` constructor function to include today's date and the current time.

Future iterations of this application will include all currencies availabe at exchangerate-api.com.

### Example User Input/Output
| Input: | Output: |
|:------| :-------- |
| "`25`" and selects "`Swiss Franc`" | **"Your 25 U.S. Dollars is 22.66 Swiss Franc (CHF) with an exchange rate of 0.9064 as of Sun Nov 29 2020 20:18:09 GMT-0800 (Pacific Standard Time)."** |
| "`25`" and selects "`Canadian Dollars`" | **"Your 25 U.S. Dollars is 32.48 Canadian Dollars (CAD) with an exchange rate of 1.2992 as of Sun Nov 29 2020 20:20:49 GMT-0800 (Pacific Standard Time)."** |
| "`25`" and selects "`Mexican peso`" | **"Your 25 U.S. Dollars is 501.16 Mexican peso (MXN) with an exchange rate of 20.0465 as of Sun Nov 29 2020 20:49:48 GMT-0800 (Pacific Standard Time).."** |
| "`25`" and selects "`Chinese yuan`" | **"Your 25 U.S. Dollars is 501.16 Mexican peso (MXN) with an exchange rate of 20.0465 as of Sun Nov 29 2020 20:22:04 GMT-0800 (Pacific Standard Time)."** |
| "`25`" and selects "`Euro`" | **"Your 25 U.S. Dollars is 20.9375 Euro (EUR) with an exchange rate of 0.8375 as of Sun Nov 29 2020 20:22:29 GMT-0800 (Pacific Standard Time)."** |

## Setup/Installation
### Requirements:

* Internet Browser
* Code editor if you want to explore the code

### Download:

1. Download this repository by clicking the green 'Code' button and selecting "Download Zip"
2. Unzip the file to extract files to your local drive. 
3. Create a new file in the root directory named `.env`. This is where you will put the API KEY you get.
4. To get correct API KEY go to https://www.exchangerate-api.com/, and:
    * Input your email in the text box next to blue `"Get Free Key"` button, then click `"Get Free Key"` button.
    * You will then be prompted to create a simple and free account by inputting a **First Name** and **Password**, then check the `You agree to our Terms & Conditions of Use` box. Then click `"Create Account and Get API Key!"` button.
    * In the middle of the first page it brings you to will be an API KEY in bold, titled `"Your API Key"`. Copy just the key itself, and paste it into your newly created `.env` file, like so: `API_KEY=INSERT API KEY HERE` - DO NOT PUT QUOTES AROUND THE API KEY, ONLY INSERT THE KEY NUMBERS/LETTERS.
5. Save all files to complete your changes.
6. In your Terminal, navigate to the root directy where the project exists and
install webpack by typing:
`npm install`
7. Open the `index.html` file in your browser.

### Terminal:
1. Open command terminal on local device
2. Navigate to the directory where you want respository to save to
3. Copy repository link by clicking on the green "Code" button and clicking 'clipboard' icon
4. Back in the terminal, type `git clone {Repository-URL-here}`
5. In your code editor program, open the newly created repository directory
6. Follow steps **3**, **4** and **5** above under the **Download** section above to get and implement API KEY. 
6. Right click on the `index.html` file and select "Copy file path"
7. Paste the link into your web browser window

## Known Bugs
No known bugs at this time. If you find a bug, let me know via email!

## Support and contact details
_If you run into any issues or have concerns, please reach out at ``nathanschrader@icloud.com``

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript - ES6
* jQuery
* Test Driven Development
* Visual Studio Code
* API endpoints
* Git
* Github


## Legal
Copyright (c) 2020 **_Nathan Schrader_**

This software is licensed under the MIT license.
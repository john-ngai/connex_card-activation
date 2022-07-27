# Project - Connex Credit Card Activation

A simple web application that allows users to activate their credit cards.

## Requirements

You are asked by a bank to create a simple webpage to allow their customers to activate their credit card. Using a programming language of your choice, create a web application to allow customers to enter their:

1. Card number

2. CSV

3. Expiry date (MMYY)

4. Phone number

Your application will then use the following webservice details to activate the credit card:

**Request URL**: https://us-west2-connexinterview.cloudfunctions.net/cardactivation

**Request Method:** POST

**Request Headers (key/value pair):**

&nbsp;&nbsp; **Authkey:** A123JDKn12l123@11saazdeop102

&nbsp;&nbsp; **Content-Type:** application/json

## Dependencies

* React
* http-proxy-middleware
* Axios
* Sass

## Final Product

![Empty form](https://github.com/john-ngai/connex_card-activation/blob/main/docs/01_empty-form.png)
![Activation successful message](https://github.com/john-ngai/connex_card-activation/blob/main/docs/02_success-message.png)
![Activation failed message](https://github.com/john-ngai/connex_card-activation/blob/main/docs/03_fail-message.png)

## Getting Started

1. `npm install` all the dependencies.

2. Run `npm start` to startup the development server.

3. Use the following sample card details to produce a successful activation message:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Card Numbers:** 401212341234000X (X = 1, 2, 3, or 4), e.g. 4012123412340001

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **CSV:** 234

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **MM/YY:** 0628

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Phone:** 6471234123

4. Use any other desired card details to produce a failed activation message.
# Yelp Review Application

## Description

This application utilizes the [yelp fusion API](https://www.yelp.com/developers/documentation/v3) to conveniently pull reviews from your preferred restaurant, given only the name of the restaurant and its city.

---

## Setup

Please create a yelp account to use yelp fusion, and create a yelp fusion application [here](https://www.yelp.com/developers/v3/manage_app).

After you have created an app, navigate to `yelpreview.js` and replace `YOUR_API_KEY` from the code snipit below 

```js
const client = yelp.client('YOUR_API_KEY');
```
with the value of `API Key` under the [manage app page](https://www.yelp.com/developers/v3/manage_app)

Finally, you will want to nagivate to your project directory in a terminal, [install npm](https://www.npmjs.com/get-npm) if you have not done so and execute

```bash
npm install
```
to install the `node_modules` necessary for the project.

---

### Run app

in your terminal, navigate to the project directory and execute
```bash
node .\yelpreview.js
```
then navigate to a url using the server name and port specified by the fields set in `yelpreview.js` (default is `127.0.0.1:3000`) and append `two query strings` to use search terms for the restaurant.

example request 

```js
localhost:3000?restaurant=taco bell&location=denver
```
example response

```js
[
    {
        "review": "I drove thru with my friend and she let the employees know that the order was for one person \"me\". \nSo during the transaction I felt great that they knew..."
    },
    {
        "review": "Tonight I ordered a vegan crunch wrap supreme with no dairy and a Veggie Fiesta Burrito w/ no dairy. When I told them that both parts of my order were wrong..."
    },
    {
        "review": "NEVER GO TO THIS LOCATION I hope it gets permanently closed soon, bad bad bad bad bad no matter what time or day it is they will mess it up and you will be..."
    }
]
```
# NodeJS Lost Lands API
NodeJS package for accessing the Lost Lands API. Currently implemented is API v1.

## Getting Started

#### Installing
`npm i node-lostlands-api`

#### Including in your application
```javascript
const lostlandsAPI = require("node-lostlands-api");
const v1 = new lostlandsAPI.v1();
```

## API
#### Example Call

```javascript
const uuid = "0713189b-ba9f-4b30-b772-d17e7bd402f9";
v1.player(uuid, function(err, player) {
    if (err) {
        console.error(err);
    } else {
        //player is an array of all documented player data
        console.log(player);
    }
});
````
#### Documentation
Documentation for all API calls can be found under the v1 documentation on the Lost Lands developer docs.
https://developer.lostlands.co/

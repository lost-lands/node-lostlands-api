const lostlandsAPI = require("./index");
const api = new lostlandsAPI();

api.get('pvp', 'test', function(err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(response);
    }
})
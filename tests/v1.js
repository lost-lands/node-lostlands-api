const lostlandsAPI = require("../index");
const v1 = new lostlandsAPI.v1();
v1.player('DoubleCheck', function(err, player) {
    if (err) {
        console.error(err);
    } else {
        //player is an array of all documented player data
        console.log(player);
    }
});
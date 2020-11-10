const lostlandsAPI = require("../index");
const v1 = new lostlandsAPI.v1();
v1.linked('40f41aca-f0e3-4244-9bd8-5170e3a5b6c0', function(err, player) {
    if (err) {
        console.error(err);
    } else {
        //player is an array of all documented player data
        console.log(player);
    }
});
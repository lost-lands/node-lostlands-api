const https = require('https');
const http = require('http');

class v1 {
    constructor(api_url) {
        if (api_url) {
            var url = api_url;
        } else {
            var url = "https://api.lostlands.co/v1";
        }
        if (url.substr(0, 5) == "https") { //check if API is over HTTPS
            var protocol = https;
        } else {
            var protocol = http;
        }
        this.request = function(route, callback, p = protocol, u = url) {
            p.get(u + route, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {

                    data = JSON.parse(data);

                    if (data.error) {
                        callback(data);
                    } else {
                        callback(null, data);
                    }


                });
            }).on("error", (error) => {
                callback(error)
            });
        }
        
        //API functions
        this.player = function(player, callback) {
            this.request(url + '/player/' + player, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.pvp = function(player, callback) {
            this.request(url + '/pvp/' + player, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.kills = function(server, callback) {
            this.request(url + '/kills/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.performance = function(server, callback) {
            this.request(url + '/server/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.online = function(server, callback) {
            this.request(url + '/online/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
    }
}
module.exports = { v1 }
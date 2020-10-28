const https = require('https');
const http = require('http');
var v1_requests = require('./v1.json');
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

                // called when a data chunk is received.
                response.on('data', (chunk) => {
                    data += chunk;
                });

                // called when the complete response is received.
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
        this.get = function(query, data, callback) {
            for (let type in v1_requests) {
                if (type === query) {
                    var route = v1_requests[type];
                    this.request(url + route, function(err, response) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, response);
                        }
                    })
                }
            }
        }
    }
}
module.exports = v1
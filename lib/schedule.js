/**
 * 获取某天的赛程
 * */

var request = require("request");

var API_URL = "http://115.28.172.121:3344/schedule/fetch";
module.exports = function (channel, date, cb) {
    API_URL += ("?channel=" + channel);
    if (date) {
        API_URL += ("&date=" + date);
    }

    request(API_URL, function (errors, response, body) {
        if (!errors && response.statusCode == 200) {
            var schedule;
            try {
                schedule = JSON.parse(body).data;
            } catch (e) {
                cb(new Error("api error"));
            }
            cb(null, schedule);
        } else {
            cb(new Error("api error"));
        }
    });
};
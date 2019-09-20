var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertBurger: function(cols, vals, callback) {
        orm.insertBurger("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    updateBurger: function(objColVals, condition, callback) {
        orm.updateBurger("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    },
    deleteBurger: function(condition, callback) {
        orm.deleteBurger("burgers", condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
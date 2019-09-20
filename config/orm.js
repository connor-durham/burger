var connection = require("../config/connection.js");

function questionMark(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objTransformer(obj) {
       var arr = [];

       for (var key in obj) {
           arr.push(key + "=" + obj[key]);
       }
       return arr.toString();
}





let orm = {
    selectAll: function(table, callback) {
        var query = "SELECT * FROM " + table + ";";

        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    insertBurger: function(table, cols, vals, callback) {
        var query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += questionMark(vals.length);
        query += ") ";

        connection.query(query, vals, function(err, result) {
            if (err) {
                throw err
            }
            callback(result);
        });
    },

    updateBurger: function(table, objColVals, condition, callback) {
        var query = "UPDATE " + table;
        query += " SET ";
        query += objTransformer(objColVals);
        query += " WHERE ";
        query += condition;

        connection.query(query, function(err, result) {
            if (err) {
                throw err
            }
            callback(result);
        });
    },

    deleteBurger: function(table, condition, callback) {
        var query = "DELETE FROM " + table;
        query += " WHERE ";
        query += condition;

        connection.query(query, function(err, result) {
            if (err) {
                throw err
            }
            callback(result);
        });
    }
};

module.exports = orm;
const mysql = require('mysql');

// 1: The model schema.
var stateModel = {
    stateID: {
     
        unique: true,
        allowNull: false
    },

    stateName: {
     
        allowNull: false
    }
};



module.exports = stateModel;
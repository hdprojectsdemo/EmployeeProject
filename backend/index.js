const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var statemodel = require('./Model/state.model');
var randomstring = require("randomstring");


var cors = require('cors')

var config = require('./config');

var app = express();

app.use(bodyParser.json());

app.use(cors())


app.listen(3000, () => {
    console.log("Connection is created on port 3000");
})

app.get('/employee', (req, res) => {
    config.query('select * from employee', (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});






app.get('/employee/:id', (req, res) => {
    config.query('select * from employee where empID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });

});


app.get('/empIDOnly', (req, res, err) => {
    const empID = 'TECH' + randomstring.generate(4);
    res.send(empID);
    console.log(empID)
});




app.delete('/employee/:id', (req, res) => {
    config.query('DELETE from employee where empID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log('Employee successfully deleted');
            res.send('Employee successfully deleted');
        } else {
            console.log(err);
        }
    });
    config.query('select * from employee', (err, rows, fields) => {});
});



app.post('/employee', (req, res) => {
    let emp = req.body;
    var sql = "set @empID = ?; set @empName = ?; set @emailID = ?; set @contactNo = ?; set @address = ?; set @state = ?; set @city = ?; \
    call EmployeeAddOrEdit(@empID,@empName,@emailID,@contactNo,@address, @state, @city)"
    config.query(sql, [emp.empID, emp.empName, emp.emailID, emp.contactNo, emp.address, emp.state, emp.city], (err, rows, fields) => {
        if (!err) {
            console.log(rows);

            res.send('employee inserted successfully');

        } else {
            console.log(err);
        }
    });
});



app.put('/employee', (req, res) => {
    let emp = req.body;
    var sql = "set @empID = ?; set @empName = ?; set @emailID = ?; set @contactNo = ?; set @address = ?; set @state = ?; set @city = ?; \
    call EmployeeAddOrEdit(@empID,@empName,@emailID,@contactNo,@address, @state, @city)"
    config.query(sql, [emp.empID, emp.empName, emp.emailID, emp.contactNo, emp.address, emp.state, emp.city], (err, rows, fields) => {
        if (!err) {
            console.log(rows);

            res.send('employee updated successfully');

        } else {
            console.log(err);
        }
    });
});





app.get('/state', (req, res) => {
    config.query('SELECT * FROM emp.state', (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});



app.get('/city/:id', (req, res) => {
    config.query('SELECT * FROM emp.city where stateID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});
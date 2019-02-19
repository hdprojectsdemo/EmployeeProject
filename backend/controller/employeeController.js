const express = require('express');
var router = express.Router();
var randomstring = require("randomstring");


const _empID= 'TECH'+randomstring.generate(4);
console.log(_empID);



router.get('/employee',(req,res)=>{
    mysqlConnection.query('select * from employee',(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});



router.get('/employee/:id',(req,res)=>{
    mysqlConnection.query('select * from employee where empID = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});




router.delete('/employee/:id',(req,res)=>{
    mysqlConnection.query('DELETE from employee where empID = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log('Employee successfully deleted');
            res.send('Employee successfully deleted');
        }
        else{
            console.log(err);
        }
    });
});






router.post('/employee',(req,res)=>{
    let emp = req.body;
    var sql = "set @empID = _empID; set @empName = ?; set @emailID = ?; set @contactNo = ?; set @address = ?; set @state = ?; set @city = ?; \
    call EmployeeAddOrEdit(@empID,@empName,@emailID,@contactNo,@address, @state, @city)"
    mysqlConnection.query(sql,[emp.empID,emp.empName,emp.emailID,emp.contactNo,emp.address,emp.state,emp.city],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
        
        res.send('employee insertd successfully');
          
        }
        else{
            console.log(err);
        }
    });
});



router.put('/employee',(req,res)=>{
    let emp = req.body;
    var sql = "set @empID = ?; set @empName = ?; set @emailID = ?; set @contactNo = ?; set @address = ?; set @state = ?; set @city = ?; \
    call EmployeeAddOrEdit(@empID,@empName,@emailID,@contactNo,@address, @state, @city)"
    mysqlConnection.query(sql,[emp.empID,emp.empName,emp.emailID,emp.contactNo,emp.address,emp.state,emp.city],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            
        res.send('employee updated successfully');
          
        }
        else{
            console.log(err);
        }
    });
});





router.get('/state',(req,res)=>{
    mysqlConnection.query('SELECT * FROM emp.state',(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});



router.get('/city',(req,res)=>{
    mysqlConnection.query('SELECT * FROM emp.city',(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});


module.exports = router;

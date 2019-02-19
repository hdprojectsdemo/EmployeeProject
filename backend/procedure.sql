CREATE DEFINER=`root`@`localhost` PROCEDURE `EmployeeAddOrEdit`(
in _empID int(5),
in _empName varchar(20),
in _emailID varchar(20),
in _contactNo varchar(20),
in _address varchar(20),
in _state varchar(20),
in _city varchar(20)
)
BEGIN
	if _empID = 0 then
		insert into employee(empID,empName,emailID,contactNo,address,state,city)
        values(_empID,_empName,_emailID,_contactNo,_address,_state,_city);
        
        set _empID = last_insert_id();
	else
		update employee
		set
		empName=_empName,
		emailID=_emailID,
		contactNo=_contactNo,
		address=_address,
		state=_state,
		city=_city
		where _empID = empID;
	end if;
END
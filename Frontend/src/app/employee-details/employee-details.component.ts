import { EmployeeDetailsService } from './../services/employee-details.service';
import { EmployeeRegistrationService } from './../services/employee-registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  EmployeeRegistration} from '../models/employee-registration.model'
import { State } from '../models/state.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: EmployeeRegistration[];
  model:any;
  emp: EmployeeRegistration;
  empID: any;
  stateID: number;
  state:State[];
  city1: State[];
  stateName=String;

  constructor(private empService: EmployeeDetailsService,public router: Router) { }


  getEmployeeDetails(emp1:EmployeeRegistration){

    this.emp= emp1;
    this.empID = this.emp.empID;
    console.log(this.empID);
  }


  updateEmployeeDetails(emp:EmployeeRegistration){
    this.empService.editEmployee(this.emp).subscribe(
      (res)=>{
        console.log("Successfully updated");
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  
  
  getCity(stateID:number){

    this.empService.getCity(stateID).subscribe(
      (data) => {
       this.city1=data;
      
      }
    )
  
  }


  getStateID(stateID:number) {
   
    this.stateID=stateID;
    
  }


  deleteEmployee(employee:EmployeeRegistration){
    this.empService.deleteEmployee(this.empID).subscribe(
      ()=>console.log("data successfully deleted")
    )
  }


  ngOnInit() {

    this.empService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
       
        console.log(this.employees);
        
   
      }
    );
    this.empService.getState().subscribe(
      (data) => {
        this.state = data;
        console.log(this.state);
       
      }
    )
  }

}

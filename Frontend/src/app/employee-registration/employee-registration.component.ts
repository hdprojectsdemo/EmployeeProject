import { City } from './../models/city.model';
import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { EmployeeRegistration } from '../models/employee-registration.model';
import { EmployeeRegistrationService } from '../services/employee-registration.service';
import { Router } from '@angular/router';
import { State } from '../models/state.model';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EmployeeRegistrationComponent),
    }
  ]
})
export class EmployeeRegistrationComponent implements OnInit {

  model: any = { empID: 0 };
  @ViewChild('f') form: any;
  employees: EmployeeRegistration[];
  empID: any;
  state1: State[];
  stateID:number;
  city1:City[];
  





  constructor(private empService: EmployeeRegistrationService, public router: Router) { }
  
  
  addEmployees(employee: EmployeeRegistration) {
    return this.empService.addEmployees(employee).subscribe(
      (data) => {
        this.employees = data;
        console.log(employee);
        if (this.form.valid) {
          console.log("Form Submitted!");
          this.form.reset();
          this.router.navigate['employee-details'];
        }
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

  ngOnInit() {

    this.empService.getState().subscribe(
      (data) => {
        this.state1 = data;
       
      }
    )

  }

}

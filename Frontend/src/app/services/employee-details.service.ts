import { Injectable } from '@angular/core';
import { EmployeeRegistration } from '../models/employee-registration.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {


  
  httpOption = {
    headers : new HttpHeaders({ 'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }

  public getEmployees(): Observable<EmployeeRegistration[]>
  {
    const url = 'http://localhost:3000/employee';
 
    return this.http.get<EmployeeRegistration[]>(url);
  }

  public editEmployee(employee:EmployeeRegistration): Observable<void>{

    const url = 'http://localhost:3000/employee'
    return this.http.put<void>(url,employee,this.httpOption);
  }

  public getState(): Observable<State[]>
  {
    const url = 'http://localhost:3000/state';
 
    return this.http.get<State[]>(url);
  }

  public getCity(stateID:number): Observable<State[]>
  {
    const url = 'http://localhost:3000/city/'+stateID;
 
    return this.http.get<State[]>(url);
  }

 


  public getEmpID(): Observable<EmployeeRegistration>
  {
    const url = 'http://localhost:3000/empIDOnly';
 
    return this.http.get<EmployeeRegistration>(url);
  }

  public deleteEmployee(employee:number): Observable<void>
  {
    const url = 'http://localhost:3000/employee/'+employee;
 
    return this.http.delete<void>(url);
  }

}





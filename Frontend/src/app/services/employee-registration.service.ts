import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import  { EmployeeRegistration } from '../models/employee-registration.model';
import { State } from '../models/state.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  httpOption = {
    headers : new HttpHeaders({ 'Content-Type':'application/json'})
  };


  

  constructor(private http: HttpClient) { }


  public addEmployees(employee:EmployeeRegistration): Observable<EmployeeRegistration[]>
  {
    const url = 'http://localhost:3000/employee';
 
    return this.http.post<EmployeeRegistration[]>(url,employee,this.httpOption);
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



}

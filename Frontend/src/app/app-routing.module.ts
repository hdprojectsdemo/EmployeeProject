import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
const routes: Routes = [
  {path:'employee-details',component:EmployeeDetailsComponent},
  {path:'employee-registration',component:EmployeeRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

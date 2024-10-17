import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service'; // Update import path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-module';
  employeeDetails: any = null;

  constructor(private employeeService: EmployeeService) {
    this.getEmployeeDetails();
  }

  register(registerForm: NgForm) {
    this.employeeService.registerEmployee(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getEmployeeDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getEmployeeDetails() {
    this.employeeService.getEmployees().subscribe(
      (resp) => {
        console.log(resp);
        this.employeeDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteEmployee(employee: any) {
    this.employeeService.deleteEmployee(employee.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmployeeDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  employeeToUpdate = {
    id: "",
    name: "",
    position: "",
    salary: 0
  };

  edit(employee: any) {
    this.employeeToUpdate = employee;
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmployeeDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

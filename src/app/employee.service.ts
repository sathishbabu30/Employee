import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API = "http://localhost:8080"; // URL of the Spring Boot project

  constructor(private http: HttpClient) {}

  public registerEmployee(employeeData: any) {
    return this.http.post(`${this.API}/employees`, employeeData);
  }

  public getEmployees() {
    return this.http.get(`${this.API}/employees`);
  }

  public deleteEmployee(employeeId: any) {
    return this.http.delete(`${this.API}/employees/${employeeId}`);
  }

  public updateEmployee(employee: any) {
    return this.http.put(`${this.API}/employees/${employee.id}`, employee);
  }
}

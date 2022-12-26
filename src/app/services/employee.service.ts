import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiModelEmp, EmployeeModel} from "../models/employee.model";
import {ApiResponse} from "../models/api-response";


;

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<ApiModelEmp[]>>(
      'https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<ApiModelEmp[]>): EmployeeModel[] => {
        return response.data.map((employeeResponse: ApiModelEmp) => {
          return{
            idx:employeeResponse.id,
            name:employeeResponse.employee_name,
            salary: employeeResponse.employee_salary
          }
        });}
      ));
  }

  getOne(id:string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<ApiModelEmp>>(
      'https://dummy.restapiexample.com/api/v1/employee/' + id).pipe(
      map((employeeResponse) => {
        return {

          idx: employeeResponse.data.id,
          name: employeeResponse.data.employee_name,
          salary: employeeResponse.data.employee_salary

        }
      }))
  }
}


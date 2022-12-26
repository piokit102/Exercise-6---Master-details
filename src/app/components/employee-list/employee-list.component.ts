import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly employeeList$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _detailsSubject: Subject<string> = new Subject<string>();
  public details$: Observable<string> = this._detailsSubject.asObservable();
  readonly oneDetails$: Observable<EmployeeModel> = this.details$.pipe(switchMap(data => this._employeeService.getOne(data)));

  constructor(private _employeeService: EmployeeService) {
  }

  select(idx: string): void {
    this._detailsSubject.next(idx);
  }
}

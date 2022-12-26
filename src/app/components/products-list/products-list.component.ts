import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductsModel} from '../../models/products.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  styleUrls: ['./products-list.component.scss'],
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  readonly productsList$: Observable<ProductsModel[]> = this._productsService.getAll();
  private _detailsInfoSubject: Subject<string> = new Subject<string>();
  public detailsInfo$: Observable<string> = this._detailsInfoSubject.asObservable();
  readonly detale$: Observable<ProductsModel> = this.detailsInfo$.pipe(
    switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  select(id: string): void {
    return this._detailsInfoSubject.next(id);
  }
}

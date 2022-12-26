import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoCurrencyModel } from '../../models/crypto-currency.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-currency',
  styleUrls: ['./crypto-currency.component.scss'],
  templateUrl: './crypto-currency.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoCurrencyComponent {
  readonly cryptoList$: Observable<CryptoCurrencyModel[]> = this._cryptoCurrencyService.getAll();
  private _detailsSubject: Subject<CryptoCurrencyModel> = new Subject<CryptoCurrencyModel>();
  public details$: Observable<CryptoCurrencyModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  select(crypto: CryptoCurrencyModel): void {
    this._detailsSubject.next(crypto);
  }
}

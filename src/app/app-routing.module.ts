import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { CryptoCurrencyComponentModule } from './components/crypto-currency/crypto-currency.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }, { path: 'employee', component: EmployeeListComponent }, { path: 'crypto', component: CryptoCurrencyComponent }]), ProductsListComponentModule, ProductsServiceModule, EmployeeListComponentModule, EmployeeServiceModule, CryptoCurrencyComponentModule, CryptoCurrencyServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

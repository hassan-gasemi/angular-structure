import { Route } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

export const productsRoutes: Route[] = [
  { path: '', component: ProductsHomeComponent },
  { path: 'list', component: ProductsListComponent },
  { path: 'create', component: ProductsCreateComponent },
  { path: 'detail', component: ProductsDetailComponent },
];

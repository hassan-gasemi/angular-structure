import { Route } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { LayoutComponent } from '@simple/shared-ui';

export const productsRoutes: Route[] = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: ProductsListComponent },
      { path: 'create', component: ProductsCreateComponent },
      { path: 'detail', component: ProductsDetailComponent },
    ]
  }
];

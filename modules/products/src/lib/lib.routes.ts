import { Route } from '@angular/router';
import { LayoutComponent } from '@simple/shared-ui';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

export const productsRoutes: Route[] = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: ProductsListComponent },
      { path: 'create', component: ProductsCreateComponent },
      { path: 'detail', component: ProductsDetailComponent },
    ]
  }
];
